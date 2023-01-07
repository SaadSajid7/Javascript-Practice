let user = JSON.parse(sessionStorage.user || null);
const loader = document.querySelector(".loader");

const username = document.querySelector('#username');
const email = document.querySelector('#email');

const changeBtn = document.querySelector('#change-btn');

const okContainer = document.querySelector('.ok-container');
const crossBtn = document.querySelector('.fa-xmark');
const okBtn = document.querySelector('.ok-btn');


if(user != null){
  location.reload;
  username.value = `${user.username}`;
  email.value = `${user.email}`;
} else{
  location.replace('/login');
}

const changing = () => {
  changeBtn.style.cursor = "pointer";
  changeBtn.style.background = "#ff5e00";
  changeBtn.disabled = false
}

const updateData = () => {
  return data = { 
    username: username.value,
    email: email.value
  }
}

// set data
changeBtn.addEventListener("click", () => {
  if (username.value.length < 3) {
    showAlertMsg("Username must be 3 letters long");
  } else{
    okContainer.classList.remove('hide');
  }
})

// ok function
okBtn.addEventListener('click', () => {
  loader.style.display = "block";
  let data = updateData();
  sendData('/profile', data)
  sessionStorage.clear();
  location.replace('/login');
})

// cross btn function
crossBtn.addEventListener('click', () => {
  okContainer.classList.add('hide');
})

// enter function
username.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    changeBtn.click();
  }
});