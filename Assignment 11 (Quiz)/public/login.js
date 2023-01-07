// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbzZwUnDboqBm70MsBiVL6nboWvAj8qtQ",
  authDomain: "quiz-app-27118.firebaseapp.com",
  projectId: "quiz-app-27118",
  storageBucket: "quiz-app-27118.appspot.com",
  messagingSenderId: "143708675138",
  appId: "1:143708675138:web:444fe9138a27c7351021db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

// Login
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.loginUser = function () {
  var obj = {
    email: email.value,
    password: password.value,
  };
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (res) {
      const reference = ref(database, `users/${res.user.uid}/`);
      onValue(reference, function (dt) {
        location.href = "./addQuestion.html";
      });
    })
    .catch(function (err) {
      alert(err.message);
    });
};
