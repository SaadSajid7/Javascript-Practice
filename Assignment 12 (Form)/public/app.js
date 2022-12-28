import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCozuHBZC5vbP5w35nS163kTfkp0UFPOyo",
  authDomain: "registration-form-db.firebaseapp.com",
  projectId: "registration-form-db",
  storageBucket: "registration-form-db.appspot.com",
  messagingSenderId: "815706654791",
  appId: "1:815706654791:web:0162fa6c35549c6cbfc962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

var name = document.getElementById('name');
var email = document.getElementById('email');
var contact = document.getElementById('contact');
var password = document.getElementById('password');
var parent = document.getElementById('parent');
var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  if (!name.value || !email.value || !contact.value || !password.value) {
    alert("Please Fill all the Form");
  }
  else {
    var obj = {
      name: name.value,
      email: email.value,
      contact: contact.value,
      password: password.value,
    }
    obj.id = Math.random().toString().slice(2)
    let reference = ref(database, `users/${obj.id}/`)
    set(reference, obj)
      .then(() => {
        alert("Added");
      })
      .catch((error) => {
        alert(error);
      });
  }
})

function getData() {
  let reference = ref(database, 'users/')
  let arr = []
  onChildAdded(reference, function (dt) {
    arr.push(dt.val())
    parent.innerHTML = ''
    for (var i = 0; i < arr.length; i++) {
      parent.innerHTML += `<div class="shadow p-5 mb-3">
      <p>Name: ${arr[i].name}</p>
      <p>Email: ${arr[i].email}</p>
      <p>Contact: ${arr[i].contact}</p>
      <p>Password: ${arr[i].password}</p>
      </div>`;
    }
  })
}

getData()