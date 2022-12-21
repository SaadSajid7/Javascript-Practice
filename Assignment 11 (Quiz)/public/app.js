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
}, {
  question: "The valid format of MS Word is __",
  correctAnswer: ".doc",
  options: [".exe", ".doc", ".png", " .jpeg"],
},
{
  question: "What program is used in MS-Word to check the spelling?",
  correctAnswer: "Spelling & Grammar",
  options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
},
{
  question: "A word gets selected by clicking it",
  correctAnswer: "Twice",
  options: [" Once", "Twice", "Three times", "Four times"],
},
{
  question: "The center the selected text, the shortcut key is",
  correctAnswer: "Ctrl + E",
  options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
},
{
  question: "Which option is not available in Microsoft office button?",
  correctAnswer: "Bold",
  options: ["Bold", "New", "Save", "Open"],
}
]

var indexNum = 0;
var questionNo = document.getElementById("questionNo")
var ansParent = document.getElementById("ansParent")
var quest = document.getElementById("quest")
var marks = document.getElementById("marks")
var percentage = document.getElementById("percentage")
var displayQuestion = document.getElementById("displayQuestion")
var nxtBtn = document.getElementById("nxtBtn")
var mark = 0
var percent = 0

function renderQuestion(){
  var currentQuestion = questions[indexNum];
  questionNo.innerHTML = `Question: ${indexNum + 1} out of ${questions.length}`;
  quest.innerHTML = currentQuestion.question;
  ansParent.innerHTML = ""

  for(var i = 0 ; i<currentQuestion.options.length; i++){
    console.log(currentQuestion.options[i]);

    ansParent.innerHTML += `<div class="fs-4 py-3 bg-danger bg-opacity-50 rounded my-2">
    <input required type="radio" name="option" id="option1" onClick="checkQuestion(${currentQuestion.options[i]},${currentQuestion.correctAnswer})">
    <label for="option1" style="--clr: #f00">${currentQuestion.options[i]}</label>
  </div>`
  } // use button as well instead of radio button
}

renderQuestion();



function nextQuestion(){
  indexNum++
  renderQuestion();
}

function checkQuestion(userValue,correctValue){
  if(userValue==correctValue){
    mark++;
    marks.innerHTML = mark;
    percentage.innerHTML = (mark / questions.length * 100).toFixed(0)+"%";
  }
  if(indexNum+1 == questions.length){
    console.log(indexNum)
    displayQuestion.style.display = "none";
  }
  else{
    nextQuestion();
  }
}

// progress bar include and (marks and percentage at the end of the quiz)