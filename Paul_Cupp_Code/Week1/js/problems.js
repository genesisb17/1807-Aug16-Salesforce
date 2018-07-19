window.onload = function(e){
    // alert('js works!');
    document.getElementById("runFib").addEventListener("click", runFib, true);
    document.getElementById("showList").addEventListener("click", showList, true);
}

/*
Define function: fib(n)
Return the nth number in the Fibonacci sequence
0 1 1 2 3 5 8
*/

function fib(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function runFib() {
    let n = document.getElementById('fibN').value;
    console.log(fib(n));
    
}

var num = 0;
let list = [];

function addTask(newTask) {
    list[num] = newTask;
    num++;
}
function showList() {
    document.getElementById('toDoList').innerHTML = document.getElementById('toDoList').innerHTML + "<li>" + document.getElementById('task').value + "</li>";
}