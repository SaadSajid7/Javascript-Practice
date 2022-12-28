var questions = [
  {
    question: "HTML stands for: ",
    options: ['Hyper Text Markup Language', 'Hexa Text Markup Language', 'Hexa Text Mockup Language', 'Hyper Text Mockup Language'],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: "CSS stands for: ",
    options: ['Colour Style Sheet', 'Cascading Style Sheet', 'Cascading Sheet Style', 'Colour Sheet Style'],
    correctAnswer: 'Cascading Style Sheet'
  },
  {
    question: "The valid format of MS Word is __",
    correctAnswer: ".doc",
    options: [".exe", ".doc", ".png", " .jpeg"]
  },
  {
    question: "What program is used in MS-Word to check the spelling?",
    correctAnswer: "Spelling & Grammar",
    options: ["Research", "Word Count", "Set language", "Spelling & Grammar"]
  },
  {
    question: "A word gets selected by clicking it",
    correctAnswer: "Twice",
    options: [" Once", "Twice", "Three times", "Four times"]
  },
  {
    question: "The center the selected text, the shortcut key is",
    correctAnswer: "Ctrl + E",
    options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"]
  },
  {
    question: "Which option is not available in Microsoft office button?",
    correctAnswer: "Bold",
    options: ["Bold", "New", "Save", "Open"]
  }
];

var indexNum = 0;
var questionNo = document.getElementById("questionNo");
// var ansParent = document.getElementById("ansParent");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
var quest = document.getElementById("quest");
var marks = document.getElementById("marks");
var percentage = document.getElementById("percentage");
var displayQuestion = document.getElementById("displayQuestion");
var nxtBtn = document.getElementById("nxtBtn");
var percent = 0;

function renderQuestion() {
  var currentQuestion = questions[indexNum];
  questionNo.innerHTML = `Question: ${indexNum + 1} out of ${questions.length}`;
  quest.innerHTML = currentQuestion.question;
  console.log(currentQuestion.correctAnswer);
  option1.innerHTML = currentQuestion.options[0];
  option2.innerHTML = currentQuestion.options[1];
  option3.innerHTML = currentQuestion.options[2];
  option4.innerHTML = currentQuestion.options[3];

  // ansParent.innerHTML = "";

  // for (var i = 0; i < currentQuestion.options.length; i++) {
  //   console.log(currentQuestion.options[i]);
  //   ansParent.innerHTML += `
  //   <button name="option" class="fs-4 py-3 bg-danger bg-opacity-50 rounded my-2 text-start" id="option1" onclick="()=>{checkQuestion(${currentQuestion.options[i]}, ${currentQuestion.correctAnswer})}">${currentQuestion.options[i]}</button>`;
  // } // use button as well instead of radio button
}

renderQuestion();



function nextQuestion() {
  indexNum++;
  renderQuestion();
}

function checkQuestion(userValue) {
  var currentQuestion = questions[indexNum];
  var mark = 0;
  if (userValue === currentQuestion.correctAnswer) {
    mark++;
    marks.innerHTML = mark;
    percentage.innerHTML += (mark / questions.length * 100).toFixed(0) + "%";
  }
  if (indexNum + 1 == questions.length) {
    console.log(indexNum);
    displayQuestion.style.display = "none";
  }
  else {
    nextQuestion();
  }
}

// progress bar include and (marks and percentage at the end of the quiz)