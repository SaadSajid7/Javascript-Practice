// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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
const container = document.getElementById("recipe-container");

const loader = document.querySelector(".loader");
window.onload = () => {
  loader.style.display = "block";
};

const getData = () => {
  let reference = ref(database, "recipes/");
  let arr = [];
  onChildAdded(reference, function (dt) {
    arr.push(dt.val());
    container.innerHTML = "";
    loader.style.display = "none";
    for (var i = 0; i < arr.length; i++) {
      container.innerHTML += `
      <div class="col-md-6 col-lg-4 col-xl-3 cursor">
        <div class="card my-md-3 my-2 shadow">
          <img src="img/Thumbnails/${arr[i].thumbnail}" class="card-img-top" alt="thumbnail" width="100%">
          <div class="card-body d-flex justify-content-between align-items-center">
            <h5 class="card-title text-truncate m-0 text-black">${arr[i].title}</h5>
            <i class="fa-solid fa-heart p-2 rounded-circle shadow bg-dark bg-opacity-25 cursor" style="-webkit-text-stroke: 2px #f00; color: transparent; transition: .5s;" onmouseover="this.style.color= '#f00';" onmouseout="this.style.color= 'transparent';"></i>
          </div>
        </div>
      </div>
      `;
    }
  });
};

getData();
