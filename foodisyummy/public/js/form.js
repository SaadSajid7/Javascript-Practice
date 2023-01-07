let user = sessionStorage.user;
function replaceLocation() {
  if (user != null) {
    location.replace('./index.html');
  }
};
replaceLocation();

const formBtn = document.querySelector(".btn");
const loader = document.querySelector(".loader");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWKGSVVB1LNo93sr4HaNplL6st_pI3V0g",
  authDomain: "foodisyummy-16a56.firebaseapp.com",
  projectId: "foodisyummy-16a56",
  storageBucket: "foodisyummy-16a56.appspot.com",
  messagingSenderId: "514922987214",
  appId: "1:514922987214:web:b6d816b6502e73e0c95a9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

// Login
const auth = getAuth();

window.loginUser = function () {
  if (!email.value.length || !password.value.length) {
    showAlertMsg("Fill all inputs");
  } else {
    loader.style.display = "block";
    var obj = {
      email: email.value,
      password: password.value,
    };
    sessionStorage.setItem("user", email.value);
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (res) {
        const reference = ref(database, `users/${res.user.uid}/`);
        onValue(reference, function (dt) {
          loader.style.display = "none";
          location.href = "./index.html";
        });
      })
      .catch(function (err) {
        showAlertMsg(err.message);
      });
  }
};

// Signup
window.signUpUser = function () {
  if (username.value.length < 3) {
    showAlertMsg("Username must be 3 letters long");
  } else if (!email.value.length) {
    showAlertMsg("Enter your email");
  } else if (
    !email.value.match(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/)
  ) {
    showAlertMsg("Email is Invalid");
  } else if (password.value.length < 8) {
    showAlertMsg("Password should be 8 letters long");
  } else {
    loader.style.display = "block";
    var obj = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    sessionStorage.setItem("user", obj);
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (res) {
        obj.id = res.user.uid;
        const reference = ref(database, `users/${obj.id}/`);
        set(reference, obj);
        loader.style.display = "none";
        location.href = "./index.html";
      })
      .catch(function (err) {
        showAlertMsg(err.message);
      });
  }
};
