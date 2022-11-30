var display  = document.getElementById("display");
var getBtn = document.querySelectorAll(".customBtn")

function getBtnValue(a){
    display.value += a;
}

function calculateValue() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error!";
    }
}

function clearValue(){
    display.value = "";
}

function backspace(){  
    var exp = display.value;  
    display.value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */  
}  