window.onload = function(e){
    document.getElementById("runfib").addEventListener("click", runFib, true);
}

function Fib(n)
{
    if(n < 0) return -1;
    if(n == 0) return 0;

    /* intial value for fibonacci sequence, value is defaulted to 1 in case of n == 1*/
    let x = 0; 
    let y = 1;
    let value = 1;
    let temp = 0;

    for(let i = 2; i <= n; ++i)
    {
        value = x + y;
        temp = y;
        y = x + y;
        x = temp;
    }
    return value;
}

function runFib(){
    let n = document.getElementById("fibN").value;
    document.getElementById("output").value = Fib(n);
}