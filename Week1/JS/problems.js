// JS allows semicolons to be optional, but it's not good practice
// Once the page loads, run this:
window.onload = (e) => {
    //alert('js works!');
    // Add an event listener:
    document.getElementById("runFib").addEventListener('click', runFib, true);
}

/* 1) Fibonocci
Define function: fib(m)
Return the nth number in the fibonacci sequence
0 1 1 2 3 5 8
*/

function fib(n) {
    // Recursion: calling itself over and over
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n-1) + fib(n-2);
}
function runFinb() {
    let n = document.getElementById('fibN').value;    // Model DOM. Also JS is case-sensitive!
    console.log(fib(n));
    // Get the inner portion of the HTML element fibOut
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}