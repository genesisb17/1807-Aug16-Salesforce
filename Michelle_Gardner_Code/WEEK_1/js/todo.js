window.onload = function(e){
   
    //console.log(addToList);
    document.getElementById("myID").innerHTML = todoList;
    

    // document.getElementById("addButton").addEventListener("click", addToList, true);
}

var todoList = ["study", " make dinner "]; 

// function showList(){
//     var todoList = ["study", "make dinner"]; 
//     // console.log(todoList);
//     document.getElementById("myID").innerHTML = todoList;
// }

function addToList(){

    var btn = document.createElement("addButton");
    var newItem = document.getElementById("item").value;
    var newItemAdd = document.createTextNode("newItem");
    
    btn.appendChild(" " + newItemAdd +" ");

    document.body.appendChild(btn);
    
    
    console.log(todoList);
}
// btn.appendChild(t);                                // Append the text to <button>
// document.body.appendChild(btn); 