//Fibonacchi 

window.onload = function(e){
    document.getElementById("runFib").addEventListener("click", runFib, true);
    document.getElementById("todoBtn").addEventListener("click", addList, true);

}

function fib (n){
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n-1) + fib(n-2);
}



function runFib(){
    let n  = document.getElementById("fibN").value;
    if (n>20) {alert("input is too large to compute.");}
    else {
        document.getElementById('fibOut').innerHTML = "= "+fib(n);
    }
}
//============================TO DO LIST=============================================

function addList(){
    // alert("todo func runing");
    // var newTodo = document.getElementById("toDoBox").value;
    // var existingTodo = document.getElementById('toDoOl').innerHTML;
    if (document.getElementById("toDoBox").value != "") 
    {
        document.getElementById('toDoOl').innerHTML = document.getElementById('toDoOl').innerHTML + "<li>" + document.getElementById("toDoBox").value + "</li>";
        document.getElementById("toDoBox").value = "";
    }
}