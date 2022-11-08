// Chapter: 15 - Arrays
var fruits = ["Orange", "Banana", "Apple", "Grapes", "Mango"];
var mixedArray = [1, "Bob", "Now is", true];
alert(fruits[1]);


// Chapter: 16 - Arrays: Adding and removing elements
var fruits = ["Orange", "Banana", "Apple", "Grapes", "Mango"];
fruits.push("Pomegranate", "Pineapple")
fruits.pop()


// Chapter: 17 - Arrays: Removing, inserting, and extracting elements
var fruits = ["Orange", "Banana", "Apple", "Grapes", "Mango"];
fruits.unshift("Strawberries")
fruits.shift()

var store = fruits.slice(0,3)
console.log(store)

fruits.splice(1,2);
console.log(fruits);

fruits.splice(3,0,"Guava","Papaya", "Watermelon ")
console.log(fruits);


// Chapter: 18 - for loops
var cityToCheck = prompt("Enter City: ");
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities[i]) {
   alert("It's one of the cleanest cities");
  }
}
  

// Chapter: 19 - for loops: Flags, Booleans, array length, and loopus interruptus
var matchFound = false;
for (var i = 0; i <= cleanestCities.length; i++){
  if (cityToCheck === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
    break;
  }
}
if (matchFound === false) {
  alert("It's not on the list");
}


// Chapter: 20 - for loops nested
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
  }
}
console.log(fullNames);