var input = document.getElementById("input");
var mainList = document.getElementById("mainList");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  remove,
  update,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTf6nuuvPQyX1jMH7xJ5ypHaa8YAlQcEo",
  authDomain: "todo-list-a3e3b.firebaseapp.com",
  projectId: "todo-list-a3e3b",
  storageBucket: "todo-list-a3e3b.appspot.com",
  messagingSenderId: "506452870719",
  appId: "1:506452870719:web:3cb70e314abe3d37d39a8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const addBtn = document.getElementById("add-btn");
const deleteAll = document.getElementById("deleteAll");

addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Enter Something");
  } else {
    var obj = {
      todo: input.value,
    };
    obj.id = input.value + Math.floor(1000 + Math.random() * 9000);
    let reference = ref(database, `list/${obj.id}/`);
    set(reference, obj)
    .then(()=>{
      input.value = '';
    })
    .catch((error) => {
      alert(error);
    });
  }
});

function getData() {
  let reference = ref(database, "list/");
  let arr = [];
  onChildAdded(reference, function (dt) {
    arr.push(dt.val());
    mainList.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
      mainList.innerHTML += `<li class="shadow-sm p-2 mt-3 d-flex justify-content-between align-items-center fs-5 text-break" id="li">
                                ${arr[i].todo}
                                <div>
                                    <button onclick="deleteElem('${arr[i].id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                                    <button data-bs-toggle="modal" data-bs-target="#modal" class="btn btn-primary"><i class="fa-solid fa-pen"></i></button>
                                </div>
                                <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5 class="modal-title">Edit Todo</h5>
                                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                      <input type="text" id="editor" placeholder="Enter Edit Text" class="w-100">
                                    </div>
                                    <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                      <button type="button" onclick="editElem('${arr[i].id}')" class="btn btn-primary">Save changes</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>`;
    }
  });
}

getData();

window.deleteElem = function(elem) {
  let reference = ref(database, `list/${elem}`);
  remove(reference)
    .then(() => {
      alert("Deleted Successfully");
      location.reload();
    })
    .catch((error) => {
      alert(error);
    });
};

window.editElem = function(elem) {
  var obj = {
    todo: input.value,
  };
  let reference = ref(database, `list/${elem}`);
  update(reference, obj)
    .then(() => {
      alert("Updated Successfully");
      location.reload();
    })
    .catch((error) => {
      alert(error);
    });
};

deleteAll.addEventListener("click", () => {
  let reference = ref(database, `list/`);
  remove(reference)
    .then(() => {
      alert("All List Deleted Successfully");
      mainList.innerHTML = "";
    })
    .catch((error) => {
      alert(error);
    });
});
