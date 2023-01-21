// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  remove,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
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

const addQues = document.getElementById("addQues");
const addOption1 = document.getElementById("addOption1");
const addOption2 = document.getElementById("addOption2");
const addOption3 = document.getElementById("addOption3");
const addOption4 = document.getElementById("addOption4");
const correctAns = document.getElementById("correctAns");
const allQuestions = document.getElementById("allQuestions");

window.addQuestion = function () {
  if (
    !addQues.value ||
    !addOption1.value ||
    !addOption2.value ||
    !addOption3.value ||
    !addOption4.value
  ) {
    alert("Complete Full Form");
  } else {
    var obj = {
      question: addQues.value,
      options: {
        option1: addOption1.value,
        option2: addOption2.value,
        option3: addOption3.value,
        option4: addOption4.value,
      },
      correctAns: correctAns.value,
    };
    obj.id = Math.floor(Math.random() * 90000000000);
    let reference = ref(database, `questions/${obj.id}/`);
    set(reference, obj)
      .then(() => {
        alert("Question Added Successfully");
        location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  }
};

var questionsArray = [];
const getData = () => {
  let reference = ref(database, "questions/");
  onChildAdded(reference, function (dt) {
    questionsArray.push(dt.val());
    allQuestions.innerHTML = "";
    allQuestions.innerHTML += `<h2 class="text-center">Question Added</h2>`;
    for (var i = 0; i < questionsArray.length; i++) {
      allQuestions.innerHTML += `<div class="shadow p-2 mt-3 bg-body rounded d-flex justify-content-between align-items-start fs-5 col-md-5">
      <div>
        <p class="col-md-11"><b>Question:</b> ${questionsArray[i].question}</p>
        <div class="row">
          <p class="col-5 col-md-3"><b>Options:</b></p>
          <ul class="col-7 col-md-9">
            <li>${questionsArray[i].options["option1"]}</li>
            <li>${questionsArray[i].options["option2"]}</li>
            <li>${questionsArray[i].options["option3"]}</li>
            <li>${questionsArray[i].options["option4"]}</li>
          </ul>
        </div>
        <p><b>Correct Answer: </b> <span class="bg-info"> ${questionsArray[i].correctAns}</span></p>
      </div>
      <div>
          <button onclick="deleteElem('${questionsArray[i].id}')" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`;
    }
  });
};

getData();

window.deleteElem = function (elem) {
  let reference = ref(database, `questions/${elem}`);
  remove(reference)
    .then(() => {
      alert("Deleted Successfully");
      location.reload();
    })
    .catch((error) => {
      alert(error);
    });
};
