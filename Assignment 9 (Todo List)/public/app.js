var input = document.getElementById("input");
var mainList = document.getElementById("mainList");

function addElem(){
    if(input.value == ""){
        alert("Enter Something")
    }
    else{
        // Add Individual
        var li= document.createElement("Li");   
        li.className = "mt-3"
        var liText = document.createTextNode(input.value)
        console.log(liText)      // a.innerHTML b ho skta hai 
        li.appendChild(liText)
        mainList.appendChild(li)
        
        // Delete individual 
        var dltBtn= document.createElement("Button");   
        dltBtn.className = "btn btn-danger ms-5 gap-5"  // set Attribute se b ye hoskta h setAttribute("class" , "value")
        dltBtn.setAttribute("onclick", "deleteElem(this)")
        var dltText = document.createTextNode("Delete"); 
        dltBtn.appendChild(dltText)
        li.appendChild(dltBtn)

        // Edit individual 
        var editBtn= document.createElement("Button"); 
        editBtn.className = "btn btn-primary ms-2 gap-5"
        editBtn.setAttribute("onclick","editElem(this)")
        var editText = document.createTextNode("Edit"); 
        editBtn.appendChild(editText)
        li.appendChild(editBtn)
}
    input.value = ""    
}


function deleteElem(element){
   element.parentNode.remove();
}

function editElem(element){
    element.parentNode.childNodes[0].nodeValue = prompt("Enter your Edit Text")   // element.parentNode.firstChild().nodeValue  pehla child b ho skta h  // access node value 
}

function deleteAll(){
    mainList.innerHTML = "";
}