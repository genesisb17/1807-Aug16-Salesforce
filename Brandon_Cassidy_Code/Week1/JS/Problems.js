//1.
window.onload = function(e)
{
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib, true);
    console.log("stuff");
}

function fib (n){
    if(n==0)
    return 0;
    if (n==1)
    return 1;
    return fib(n-1) +fib(n-2);
}
function runFib(){
    let n = document.getElementById("fibN").value;
    document.getElementById("fibout").innerHTML=+fib(n);
    console.log("hi");
    
}