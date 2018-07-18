window.onload = function(e){
    document.getElementById('runAdd').addEventListener('click', runToDo, true);
}


function runToDo()
{
    let item = document.getElementById(`listAdd`).value;
    let listEntry = document.createElement("li");
    //console.log(item);
    let readyItem = document.createTextNode(item);

    listEntry.appendChild(readyItem);
    document.getElementById(`newList`).appendChild(listEntry);
}