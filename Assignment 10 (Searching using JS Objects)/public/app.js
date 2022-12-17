var student1 = {
  name: "a",
  fatherName: "k",
  rollNo: 'sm-1',
  CNIC: 1453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student2 = {
  name: "b",
  fatherName: "l",
  rollNo: 'sm-2',
  CNIC: 2453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student3 = {
  name: "c",
  fatherName: "m",
  rollNo: 'sm-3',
  CNIC: 3453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student4 = {
  name: "d",
  fatherName: "n",
  rollNo: 'sm-4',
  CNIC: 4453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student5 = {
  name: "e",
  fatherName: "o",
  rollNo: 'sm-5',
  CNIC: 5453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student6 = {
  name: "f",
  fatherName: "p",
  rollNo: 'sm-6',
  CNIC: 6453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student7 = {
  name: "g",
  fatherName: "q",
  rollNo: 'sm-7',
  CNIC: 7453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student8 = {
  name: "h",
  fatherName: "r",
  rollNo: 'sm-8',
  CNIC: 8453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student9 = {
  name: "i",
  fatherName: "s",
  rollNo: 'sm-9',
  CNIC: 9453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var student10 = {
  name: "j",
  fatherName: "t",
  rollNo: 'sm-10',
  CNIC: 10453534643,
  email: 'a@gmail.com',
  password: "&#x2022&#x2022&#x2022&#x2022&#x2022&#x2022"
}

var arr = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10]
// console.log(arr)

var info = document.getElementById("info")
var input = document.getElementById("input");
var notFound = document.getElementById("notFound")
var sName = document.getElementById("sName")
var fName = document.getElementById("fName")
var outputRollNo = document.getElementById("outputRollNo")
var cnic = document.getElementById("cnic")
var email = document.getElementById("email")
var password = document.getElementById("password")

function Search() {
  for (i = 0; i < arr.length; i++) {
    if (input.value == arr[i].rollNo) {
      info.classList.remove("hide");
      sName.innerHTML = arr[i].name;
      fName.innerHTML = arr[i].fatherName;
      outputRollNo.innerHTML = arr[i].rollNo;
      cnic.innerHTML = arr[i].CNIC;
      email.innerHTML = arr[i].email;
      password.innerHTML = arr[i].password;
    }
  }
  if (input.value === "sm-1" || input.value === "sm-2" || input.value === "sm-3" || input.value === "sm-4" || input.value === "sm-5" || input.value === "sm-6" || input.value === "sm-7" || input.value === "sm-8" || input.value === "sm-9" || input.value === "sm-10") {
    notFound.style.display = 'none'
  }
  else {
    info.classList.add("hide");
    notFound.style.display = 'block'
  }

}
