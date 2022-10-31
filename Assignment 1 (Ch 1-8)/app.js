// Chapter: 1 - Alert
alert("Thanks for your input!");

// Chapter: 2 - Variable for Strings
var name = "Mark";
console.log(name);

var nationality;
nationality = "U.S.";
console.log(nationality);

var thanx = "Thanks You!"
alert(thanx);

// Chapter: 3 - Variable for Numbers
var originalNum = 25;
var newNum = originalNum + 7;
console.log(newNum);

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;
console.log(newNum);

var originalNum = "23"; // 23 is a string
var newNum = originalNum + 7;
console.log(newNum);  // Result = 237

// Chapter: 4 - Variable Names Legal and Illegal
// var abc         // legal
// var ab12        // legal
// var a_b         // legal
// var @abc/ab@    // illegal because of special character
// var var         // illegal because of keywords
// var 12abc       // illegal because of number start
// var a+-*/b      // illegal because of arithmetic operators
// var 123         // illegal because of numbers

// Chapter: 5 - Math expressions: Familiar operators
var popularNumber = 2 + 2;
console.log(popularNumber);

var popularNumber = 4 - 2;
console.log(popularNumber);

var popularNumber = 3 * 12;
console.log(popularNumber);

var popularNumber = 27 / 3;
console.log(popularNumber);

var popularNumber = 10 % 3;
console.log(popularNumber);

// Chapter: 6 - Math expressions: Unfamiliar operators
var num = 1;
var newNum = num++;
console.log(newNum);

var num = 1;
var newNum = ++num;
console.log(newNum);

var num = 1;
var newNum = num--;
console.log(newNum);

var num = 1;
var newNum = --num;
console.log(newNum);

// Chapter: 7 - Math expressions: Eliminating ambiguity
var totalCost = 1 + (3 * 4);
console.log(totalCost);

var resultOfComputation = (2 * 4) * 4 + 2;
console.log(resultOfComputation);

var resultOfComputation = (2 * 4) * (4 + 2);
console.log(resultOfComputation);

// Chapter: 8 - Concatenating text strings
var userName = "Mark";
alert("Thanks, " + userName + "!");

var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMessage = message + userName + banger;
alert(customMessage);

alert("2 plus 2 equals " + 2 + 2);