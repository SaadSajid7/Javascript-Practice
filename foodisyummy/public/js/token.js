let char = `123abcde.fmnopqlABCDE@FJKLMNOPQRSTUVWXYZ456789stuvwxyz0!#$%&ijkrgh'*+-/=?^_${'`'}{|}~`;

const generateToken = (key) => {
  let token = '';
  for(let i = 0; i < key.length; i++){
    let index = char.indexOf(key[i]) || char.length / 2;
    let randomIndex = Math.floor(Math.random() * index);
    token += char[randomIndex] + char[index - randomIndex];
  }
  return token;
}

const compareToken = (token, key) => {
  let string = '';
  for(let i = 0; i < token.length; i=i+2){
    let index1 = char.indexOf(token[i]);
    let index2 = char.indexOf(token[i+1]);
    string += char[index1 + index2];
  }
  if(string === key){
    return true;
  }
  return false;
}

// common functions

// Send data function
const sendData = (path, data) => {
  fetch(path, {
    method: "post",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      processData(response);
    });
};

const processData = (data) => {
  loader.style.display = null;
  if (data.alert) {
    showAlertMsg(data.alert);
  } else if(data.status){
    location.replace("/new-pass");
  } else if (data.username) {
    // create authToken
    data.authToken = generateToken(data.email);
    sessionStorage.user = JSON.stringify(data);
    location.replace("/");
  } else if(data.recipe){
    location.href = '/admin';
  } else if(data.password){
    location.href = '/profile';
  } else if(data.reset){
    location.href = '/aboutus';
  }
};

// alert function
const showAlertMsg = (msg) => {
  var alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  let alertImg = document.querySelector(".alert-img");

  alertMsg.innerHTML = msg;
  alertImg.src = `img/cross.png`;
  alertMsg.style.color = null;
  
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2500);
  return false;
};

const showAlert = (msg) => {
  var alertBox = document.querySelector(".alert-box");
  let alertMsg = document.querySelector(".alert-msg");
  let alertImg = document.querySelector(".alert-img");

  alertMsg.innerHTML = msg;
  alertImg.src = `img/tick.png`;
  alertMsg.style.color = `#0ab50a`;
  
  alertBox.classList.add("show");
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2500);
  return false;
};