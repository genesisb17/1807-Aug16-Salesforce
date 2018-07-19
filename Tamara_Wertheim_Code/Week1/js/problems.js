window.onload = function(e){
    //this.alert("js works!");
    document.getElementById("runFib").addEventListener("click", runFib, true);
    document.getElementById("runBubbleSort").addEventListener("click", runBubbleSort, true);
}

/*
1. Fibonacci 
Define function: fib(n)
Return the nth number in the fibonacci sequence
0 1 1 2 3 5 8
*/

function fib(n){
    if(n == 0) return 0; 
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

function bubbleSort(numArray){
    for(var i = 0; i < numArray.length; i++) {
        for(var j = 1; j < numArray.length; j++) {
            if(numArray[j - 1] > numArray[j]) {
                var temp = numArray[j - 1];                   
                numArray[j- 1] = numArray[j];
                numArray[j] = temp;               
             }
         }
     }
     return numArray;
 }

function runFib(){
    let n = document.getElementById("fibN").value;
    //console.log(fib(n));
    document.getElementById("fibOut").innerHTML = "= " + fib(n);
}

 function runBubbleSort(){
    let n = document.getElementById("bubbleInput").value;
    numArray = "["+n+"]";
    console.log(bubbleSort(numArray));
    //document.getElementById("fibOut").innerHTML = "= " + fib(n);
}