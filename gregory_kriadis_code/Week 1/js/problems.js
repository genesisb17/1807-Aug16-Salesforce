window.onload = function(e) {
    // alert('js works!'); // Is simply a popup that shows the windows.onload function
    document.getElementById("runFib").addEventListener("click", runFib, true); // Will run runFib once button is clicked
}

/* 1. Fibonacci Sequence
Define function: fib(n)
Return the nth number in the Fibonacci Sequence
0 1 1 2 3 5 8
*/

function fib(n) { 
    console.log(n); // Remove console.log(n) if you don't want to see every recursion (i.e to see just the final number)
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}
function runFib() {
    let n = document.getElementById('fibN').value;
    //console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}
