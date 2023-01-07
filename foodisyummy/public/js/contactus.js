// message characters counting
function charCount(){
  var element = document.getElementById('message').value.length;
  document.getElementById('message_count').innerHTML = element+"/150 (Max Characters 150)";
}

// message focus
var message = document.getElementById('message'),
textArea = document.querySelector('.textarea');

message.addEventListener('focus', function() {
  textArea.classList.add('focused');
}, false);

message.addEventListener('blur', function() {
  textArea.classList.remove('focused');
}, false);


const email = document.querySelector('#email');
const FName = document.querySelector('#f-name');
const LName = document.querySelector('#l-name');
const subject = document.querySelector('#subject');

const sendBtn = document.querySelector('#send-btn');

var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const loader = document.querySelector(".loader");

//send email
sendBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  // validations
  if(!FName.value && !LName.value && !email.value && !subject.value && !message.value){
  showAlertMsg("Fill all the fields");
  } else if(FName.value.length < 3 || LName.value.length < 3){
  showAlertMsg("First and last name should be 3 letters long");
  } else if(!regx.test(email.value)){
    showAlertMsg("You have entered an invalid email address");
  } else if(!subject.value){
    showAlertMsg("Please enter a subject");
  } else if(message.value.length < 10){
    showAlertMsg("message should be 10 letters long");
  } else{
    loader.style.display = "block"
    let formData = {
      fullName: FName.value + " " + LName.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contactus');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function(){
      if(xhr.responseText == 'success'){
        loader.style.display = null;
        showAlert('Email sent');
        setTimeout(location.reload.bind(location), 3000);
        fullName.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      } else{
        showAlertMsg('Something went wrong');
      }
    }
    xhr.send(JSON.stringify(formData));
  }
})

// enter key
FName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

LName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

email.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

subject.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});



// navbar
const createNav = () => {
  let nav = document.querySelector("#navbar");

  nav.innerHTML = `
            <div class="nav">
      <a href="html/index.html" class="logo-link"><img src="../img/Logo.png" alt="" class="logo" id="logo"></a>
      <ul class="link-container">
        <li><a class="link" id="home" href="./">Home</a></li>
        <li class="link-list"><a class="link" id="recipes" href="./category">Categories<i class="fa-solid fa-angle-down" id="expand"></i></a>
              <ul class="sub-menu">
                <li><a class="sub-link" id="desi" href="">Desi</a></li>
                <li><a class="sub-link" id="res" href="">Restaurant Style</a></li>
                <li><a class="sub-link" id="ramzan" href="">Ramzan Special</a></li>
                <li><a class="sub-link" id="bakra" href="">Bakra-Eid Special</a></li>
              </ul>
        </li>
        <li><a class="link" id="aboutus" href="./aboutus">About us</a></li>
        <li"><a class="link" id="contactus" href="./contactus">Contact us</a></li>
      </ul>
      <div class="nav-btn">
      <a>
        <div class="account">
          <img src="../img/user.png">
          <p class="account-name">Username</p>
        </div>
          <div class="logout-popup hide">
            <div class="info">
              <img src="../img/user.png">
              <div>
                <p class="account-name-popup">Name</p>
                <p class="account-email-popup">Email</p>
                <button onclick="location.href = '/profile'" class="settings">Profile Settings</button>
              </div>
            </div>
            <hr>
            <button onclick="location.href = '/my-fav'" class="my-fav">My Favourites</button>
            <button href="#" id="user-btn">Logout</button>
          </div>
        </a>
        <a href="./login"><button class="login-btn" id="loginBtn">Log in</button></a>
        <a href="./signup"><button class="signup-btn">Sign up</button></a>
        <a onclick="searchVisible()" id="search-icon"><img src="../img/search-dark.png" id="search-icon-nav"></img></a>
        <div id="search-dd">
          <input type="text" placeholder="Search Recipes" id="search-box-dd">
          <button id="search-btn-dd"><img src="../img/search.png" alt="Search" class="search-icon-dd"></button>
        </div>
      </div>
    </div>
  `;
};

createNav();

//Changing Active
const active = document.getElementsByClassName("active");
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".link").forEach(link => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
})

// Search DropDown
function searchVisible() {
  const searchDD = document.getElementById("search-dd");
  const searchBoxDD = document.getElementById("search-box-dd");
  const searchBtnDD = document.getElementById("search-btn-dd");
  if (searchDD.style.opacity === "0") {
    searchDD.style.opacity = "1";
    searchDD.style.width = "350px";
    searchDD.style.left = "83%";
    searchBoxDD.style.display = "block";
    searchBtnDD.style.display = "block";
  } else {
    searchDD.style.opacity = "0";
    searchDD.style.width = "0";
    searchDD.style.left = "93%";
    searchBoxDD.style.display = "none";
    searchBtnDD.style.display = "none";
  }
}

// nav popup
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");
const userButton = document.querySelector(".account");
const userPopup = document.querySelector(".logout-popup");
const userName = document.querySelector(".account-name");
const popupName = document.querySelector(".account-name-popup");
const popupEmail = document.querySelector(".account-email-popup");
const settingsBtn = document.querySelector(".account-settings");
const logoutBtn = document.querySelector("#user-btn");

if(location.href != '/my-fav'){
  userButton.addEventListener("click", () => {
    userPopup.classList.toggle("hide");
  });

  window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user != null) {
      // means user is logged in
      email.value = `${user.email}`;
      signupBtn.style.display = "none";
      loginBtn.style.display = "none";
      userButton.style.display = "flex";
      userName.innerHTML = `${user.username}`;
      popupName.innerHTML = `${user.username}`;
      popupEmail.innerHTML = `${user.email}`;
      logoutBtn.innerHTML = "Logout";
      logoutBtn.addEventListener("click", () => {
        sessionStorage.clear();
        location.reload();
      });
    } else {
      // user is logged out
      signupBtn.style.display = "block";
      loginBtn.style.display = "block";
      userButton.style.display = "none";
    } if(email.value = `${user.email}`){
      email.style.cursor = "not-allowed";
      email.style.color = "#494949";
      email.disabled = true;
    } else{
      email.style.cursor = "text";
      email.style.color = "#000";
      email.disabled = false;
    }
  };
}

// search box
const searchBtnDD = document.querySelector('#search-btn-dd');
const searchBoxDD = document.querySelector('#search-box-dd');
searchBtnDD.addEventListener('click', () => {
  if(searchBoxDD.value.length){
    location.href = `/search/${searchBoxDD.value}`
  }
})