const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hour = document.getElementById("hour");
const startBtn = document.getElementById("startBtn");
const selectMenu = document.querySelectorAll("select");
const option = document.querySelectorAll("option");
const secMenu = document.getElementById("secMenu");
const minMenu = document.getElementById("minMenu");
const hourMenu = document.getElementById("hourMenu");

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

function onchanges() {
  var value = secMenu.value;
  var value1 = minMenu.value;
  var value2 = hourMenu.value;

  if (value==="Seconds" && value1==="Minutes" && value2==="Hours") {
    alert("Please select number");
  } else if(value==="Seconds" && value1==="Minutes"){
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hour.innerHTML = value2;
  } else if(value1==="Minutes" && value2==="Hours"){
    sec.innerHTML = value;
    min.innerHTML = "00";
    hour.innerHTML = "00";
  }
   else if(value2==="Hours" && value==="Seconds"){
    sec.innerHTML = "00";
    min.innerHTML = value1;
    hour.innerHTML = "00";
  } else if(value==="Seconds"){
    sec.innerHTML = "00";
    min.innerHTML = value1;
    hour.innerHTML = value2;
  } else if(value1==="Minutes"){
    sec.innerHTML = value;
    min.innerHTML = "00";
    hour.innerHTML = value2;
  }
   else if(value2==="Hours"){
    sec.innerHTML = value;
    min.innerHTML = value1;
    hour.innerHTML = "00";
  } else{
    sec.innerHTML = value;
    min.innerHTML = value1;
    hour.innerHTML = value2;
  }
}