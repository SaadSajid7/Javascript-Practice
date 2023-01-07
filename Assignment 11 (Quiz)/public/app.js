// var questions = [
//   {
//     question: "HTML stands for: ",
//     options: [
//       "Hyper Text Markup Language",
//       "Hexa Text Markup Language",
//       "Hexa Text Mockup Language",
//       "Hyper Text Mockup Language",
//     ],
//     correctAnswer: "Hyper Text Markup Language",
//   },
//   {
//     question: "CSS stands for: ",
//     options: [
//       "Colour Style Sheet",
//       "Cascading Style Sheet",
//       "Cascading Sheet Style",
//       "Colour Sheet Style",
//     ],
//     correctAnswer: "Cascading Style Sheet",
//   },
//   {
//     question: "The valid format of MS Word is __",
//     correctAnswer: ".doc",
//     options: [".exe", ".doc", ".png", " .jpeg"],
//   },
//   {
//     question: "What program is used in MS-Word to check the spelling?",
//     correctAnswer: "Spelling & Grammar",
//     options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
//   },
//   {
//     question: "A word gets selected by clicking it",
//     correctAnswer: "Twice",
//     options: [" Once", "Twice", "Three times", "Four times"],
//   },
//   {
//     question: "The center the selected text, the shortcut key is",
//     correctAnswer: "Ctrl + E",
//     options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
//   },
//   {
//     question: "Which option is not available in Microsoft office button?",
//     correctAnswer: "Bold",
//     options: ["Bold", "New", "Save", "Open"],
//   },
// ];

var indexNum = 0;
var questionNo = document.getElementById("questionNo");
const options1 = document.getElementById("option1");
const options2 = document.getElementById("option2");
const options3 = document.getElementById("option3");
const options4 = document.getElementById("option4");
const ansParent = document.getElementById("ansParent");
var quest = document.getElementById("quest");
var marks = document.getElementById("marks");
var percentage = document.getElementById("percentage");
var nextBtn = document.getElementById("nxtBtn");
var remarks = document.getElementById("remarks");
var progressBar = document.getElementById("progressBar");

// progress bar include and (marks and percentage at the end of the quiz)

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
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

var name = document.getElementById("name");
const inputName = document.getElementById("inputName");




var questionsArr = [];
const getData = () => {
  let reference = ref(database, "questions/");
  onChildAdded(reference, function (dt) {
    questionsArr.push(dt.val());
    renderQuestion();
  });
};

getData();

window.nextQuestion = function () {
  if (
    options1.classList.contains("correctAnswer") ||
    options2.classList.contains("correctAnswer") ||
    options3.classList.contains("correctAnswer") ||
    options4.classList.contains("correctAnswer")
  ) {
    if (indexNum+1 !== questionsArr.length) {
      indexNum++;
      renderQuestion();
    }
  } else {
    alert("Please Select Any One Option");
  }
};

window.checkDiv = function (userValue) {
  options1.disabled = true;
  options2.disabled = true;
  options3.disabled = true;
  options4.disabled = true;
};

function renderQuestion() {
  var currentQuestion = questionsArr[indexNum];
  questionNo.innerHTML = `Question: ${indexNum + 1} out of ${
    questionsArr.length
  }`;
  quest.innerHTML = currentQuestion.question;
  options1.innerHTML = currentQuestion.options["option1"];
  options2.innerHTML = currentQuestion.options["option2"];
  options3.innerHTML = currentQuestion.options["option3"];
  options4.innerHTML = currentQuestion.options["option4"];
  options1.classList.remove("correctAnswer");
  options2.classList.remove("correctAnswer");
  options3.classList.remove("correctAnswer");
  options4.classList.remove("correctAnswer");
  options1.classList.remove("wrongAnswer");
  options2.classList.remove("wrongAnswer");
  options3.classList.remove("wrongAnswer");
  options4.classList.remove("wrongAnswer");
  options1.disabled = false;
  options2.disabled = false;
  options3.disabled = false;
  options4.disabled = false;
  var progress = ((indexNum / questionsArr.length) * 100).toFixed(0)
  progressBar.style.width = progress + "%";
}

var mark = 0;
window.checkQuestion = function (userValue) {
  var currentQuestion = questionsArr[indexNum];
  if (userValue.innerHTML === currentQuestion.correctAns) {
    userValue.classList.add("correctAnswer");
    mark++;
    marks.innerHTML = "Marks: " + mark;
    var percent = ((mark / questionsArr.length) * 100).toFixed(0);
    percentage.innerHTML = "Percentage: " + percent + "%";
  } else {
    userValue.classList.add("wrongAnswer");
    for (let i = 0; i <= 3; i++) {
      if (currentQuestion.correctAns == ansParent.children[i].textContent) {
        ansParent.children[i].classList.add("correctAnswer");
      }
    }
  }
  if (indexNum + 1 == questionsArr.length) {
    nextBtn.setAttribute("data-bs-toggle", "modal");
    nextBtn.setAttribute("data-bs-target", "#endModal");
    if (percent >= 70) {
      remarks.innerHTML = `Congratulations!`;
    } else {
      remarks.innerHTML = "Hard Luck!";
      
    }
  }
};
