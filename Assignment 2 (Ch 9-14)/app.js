// Chapter: 9 - Prompt
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec);

var numberOfCats = +prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats)


// Chapter: 10 - if statements
var x = prompt("Where does the Pope live?", "Vatican");
if (x === "Vatican") {
   alert("Correct!");
}

var x = prompt("Where does the Pope live?");
var correctAnswer = "Vatican";
if (x === correctAnswer) {
  alert("Correct!");
}


// Chapter: 11 - Comparison operators
var firstName = prompt('Enter first Name');
var lastName = prompt('Enter last Name');

var subject1 = +prompt("Enter English number: " + " /100");
var subject2 = +prompt("Enter Math number: " + " /100");
var subject3 = +prompt("Enter Physics number: " + " /100");
var subject4 = +prompt("Enter Computer number: " + " /100");
var subject5 = +prompt("Enter Urdu number: " + " /100");
console.log("English number: " + subject1 + " /100");
console.log("Math number: "+ subject2 + " /100");
console.log("Physics number: "+ subject3 + " /100");
console.log("Computer number: "+ subject4 + " /100");
console.log("Urdu number: " + subject5 + " /100");
var total = subject1 + subject2 + subject3 + subject4 + subject5;
var percentage = (total / 500) * 100

alert("Total obtained marks are : " + total + "/500")
console.log("Total obtained marks are : " +total + "/500")
alert("Your percentage is : " + percentage.toFixed(2) + "%")
console.log("Your percentage is : " + percentage.toFixed(2) + "%")

if(percentage > 100){
    alert("Something went Wrong");
    console.log("Something went Wrong");
}
else if (percentage >= 80 && percentage <100) {
    alert("Your Grade: A+");
    console.log("Your Grade: A+")
} else if (percentage >= 70 && percentage <80) {
    alert("Your Grade: A");
    console.log("Your Grade: A")
} else if (percentage >= 60 && percentage <70) {
    alert("Your Grade: B");
    console.log("Your Grade: B")
} else if (percentage >= 50 && percentage <60) {
    alert("Your Grade: C");
    console.log("Your Grade: C")
} else if (percentage >= 40 && percentage <50) {
    alert("Your Grade: D");
    console.log("Your Grade: D")
} else {
    alert("Your Grade: Fail");
console.log("Your Grade: Fail")
}


// Chapter: 12 - if...else and else if statements
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
  alert("Correct!");
}
else {
  alert("Wrong answer");
}

var x = prompt("Where does the Pope live?");
if (x === "Vatican"){
  alert("Correct!");
}
else if (x === "Rome") {
  alert("Incorrect but close");
} else {
  alert("Incorrect");
}


// Chapter: 13 - Testing sets of conditions
var weight = +prompt("Enter your Weight:")
var time = +prompt("Enter your time:")
var age = +prompt("Enter your Age:")
var gender = prompt("Enter your Gender:")
if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our tryout!");
}
else {
  alert("Come to our cookout!");
}

var weight = +prompt("Enter your Weight:")
var time = +prompt("Enter your time:")
var age = +prompt("Enter your Age:")
var gender = prompt("Enter your Gender:")
if (weight > 300 || time < 6 || age > 17 || gender === "male") {
  alert("Come to our tryout!");
}
else {
  alert("Come to our cookout!");
}
  

// Chapter: 14 - if statements nested
var age = prompt("enter your age")
var studentcard = false;
if (age >= 18){
    console.log("Allow")
}else {
     if (studentcard == true) {
            console.log("Allow on Student Card")
        } 
        else{
            console.log("Not Allow")
        }
}