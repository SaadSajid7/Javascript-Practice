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