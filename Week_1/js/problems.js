window.onload = function(e) {
    //no () after runFib so that the function is called, not immediately run
    document.getElementById("runFib").addEventListener("click", runFib, true);
}

function fib(n) {
    if (n==0) return 0;
    if (n==1) return 1;
    return fib(n-1) + fib(n-2);
}

function runFib() {
    let n = document.getElementById("fibN").value;
    document.getElementById("fibOut").innerHTML="= " + fib(n);
    return;
}