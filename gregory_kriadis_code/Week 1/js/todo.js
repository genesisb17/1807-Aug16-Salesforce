window.onload = function(e) {
    document.getElementById("updateToDo").addEventListener("click", updateToDo, true);
}

function updateToDo() {
    let toDoList = document.getElementById('toDoIn').value;
    console.log(toDoList); // Not necessary
    document.getElementById('toDoOut').innerHTML = toDoList ;
}