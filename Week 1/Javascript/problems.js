window.onload = function(e) {
   // alert('js works!');
   document.getElementById("runFib").addEventListener("click", runFib, true);

}

//Fibonacci recursive
function rfib(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return rfib(n-1) + rfib(n-2);
}

function runFib() {
    let n = document.getElementById('fibN').value;
    var result = rfib(n);
    console.log(result);
    var a = document.createTextNode(`Result is : ${result} `);
    var b = document.createElement('br');
    document.getElementById("results").appendChild(a);
    document.getElementById("results").appendChild(b);

}