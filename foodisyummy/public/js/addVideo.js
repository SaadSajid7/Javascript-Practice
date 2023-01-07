let user = JSON.parse(sessionStorage.user || null);
let loader = document.querySelector('.loader');

// checking user is logged in or not
// window.onload = () => {
//   if(user){
//     if(!compareToken(user.authToken, user.email)){
//       location.replace('/404');

//     } else{
//       let adminEmail = JSON.parse(sessionStorage.user).email;
//       if(adminEmail == "jujwuth2904@gmail.com"){
//         location.reload
//       } else{
//         location.replace('/404');
//       }
//     }
//   } else{
//     location.replace('/404');
//   }
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set
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
  appId: "1:514922987214:web:b6d816b6502e73e0c95a9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const title = document.querySelector('#video-name');
const thumb = document.querySelector('#video-thumb');
const iframe = document.querySelector('#video-iframe');
const ing = document.querySelector('#video-ing');
const dir = document.querySelector('#video-dir');
const tags = document.querySelector('#video-tag');
const addVideoBtn = document.querySelector('#add-btn');

addVideoBtn.addEventListener("click", () => {
  if(!title.value, !thumb.value, !iframe.value, !ing.value, !dir.value, !tags.value){
    return showAlertMsg('enter all inputs');
  } else {
    loader.style.display = "block";
    let tagArr = tags.value.split(',');
    tagArr.forEach((item, i) => tagArr[i] = tagArr[i].trim());
    var obj = {
      title: title.value,
      thumbnail: thumb.value,
      iframe: iframe.value,
      ingredients: ing.value,
      directions: dir.value,
      tags: tagArr,
    };
    obj.id = Math.floor(Math.random() * 9999999999);
    let reference = ref(database, `recipes/${obj.id}/`);
    set(reference, obj)
      .then(() => {
        loader.style.display = null;
        showAlert('Added Successfully');
        location.href = "./admin.html";
      })
      .catch((error) => {
        showAlertMsg(error);
      });
  }
});