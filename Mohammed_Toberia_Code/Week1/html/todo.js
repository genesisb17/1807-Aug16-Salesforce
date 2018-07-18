window.onload = function(e){
    //alert('js works!');

document.getElementById("runList").addEventListener("click", runList, true);
}


function runList(){
    let n = document.getElementById(`listN`).value;
    console.log(n);
    let list= document.createElement("li");
    let addItem= document.createTextNode(n);

    list.appendChild(addItem);
    document.getElementById("toDoList").appendChild(list);
}