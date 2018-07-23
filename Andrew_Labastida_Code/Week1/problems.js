window.onload = function(e){
//    alert('js works!');
    document.getElementById("runFib").addEventListener("click", runFib, true);
    document.getElementById("addtodo").addEventListener("click", addtodo, true);
}
/* 1. Fibonacci
Define function: fib(n)
reutn the nth number in the fionacci sequence
0 1 1 2 3 5 8
*/

function fib(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}
function runFib(){
    let n = document.getElementById('fibN').value;
    console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}

function addtodo(){
    let n = document.getElementById('todoinput').value;
    let newitem = document.createElement("li");
    newitem.innerText = n;
    document.getElementById("updatedlist").appendChild(newitem);
}