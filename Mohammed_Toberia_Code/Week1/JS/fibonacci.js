window.onload = function(e){
    // alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib,true);  
}
function fib(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1) + fib(n-2);
}
function runFib(){
    let n = document.getElementById('fibN').value;
    //console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}