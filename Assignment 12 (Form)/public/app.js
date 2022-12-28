import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
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

const database = getDatabase()

var a = document.getElementById('task')
var titleinp = document.getElementById('title')
var parent = document.getElementById('parent')

window.saveTask = function () {
  var obj = {
    task: a.value,
    title: titleinp.value,
  }
  obj.id = Math.random().toString().slice(2)
  let reference = ref(database, `tasks/${obj.id}/`)
  set(reference, obj)
  console.log(obj)
}

function getData() {
  let reference = ref(database, 'task/')
  let arr = []
  onChildAdded(reference, function (dt) {
    arr.push(dt.val())
    console.log(arr)
    parent.innerHTML = ''
    for (var i = 0; i < arr.length; i++) {
      parent.innerHTML += `<li>${arr[i].task} </li>`
    }
  })
}

getData()