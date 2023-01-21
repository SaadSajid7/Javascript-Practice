// message characters counting
function charCount(){
  var element = document.getElementById('message').value.length;
  document.getElementById('message_count').innerHTML = element+"/150 (Max Characters 150)";
}

// message focus
var message = document.getElementById('message'),
textArea = document.querySelector('.textarea');

message.addEventListener('focus', function() {
  textArea.classList.add('focused');
}, false);

message.addEventListener('blur', function() {
  textArea.classList.remove('focused');
}, false);


const email = document.querySelector('#email');
const FName = document.querySelector('#f-name');
const LName = document.querySelector('#l-name');
const subject = document.querySelector('#subject');

const sendBtn = document.querySelector('#send-btn');

var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const loader = document.querySelector(".loader");

//send email
sendBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  // validations
  if(!FName.value && !LName.value && !email.value && !subject.value && !message.value){
  showAlertMsg("Fill all the fields");
  } else if(FName.value.length < 3 || LName.value.length < 3){
  showAlertMsg("First and last name should be 3 letters long");
  } else if(!regx.test(email.value)){
    showAlertMsg("You have entered an invalid email address");
  } else if(!subject.value){
    showAlertMsg("Please enter a subject");
  } else if(message.value.length < 10){
    showAlertMsg("message should be 10 letters long");
  } else{
    loader.style.display = "block"
    let formData = {
      fullName: FName.value + " " + LName.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/contactus');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function(){
      if(xhr.responseText == 'success'){
        loader.style.display = null;
        showAlert('Email sent');
        setTimeout(location.reload.bind(location), 3000);
        fullName.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
      } else{
        showAlertMsg('Something went wrong');
      }
    }
    xhr.send(JSON.stringify(formData));
  }
})

// enter key
FName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

LName.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

email.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

subject.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});