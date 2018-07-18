window.onload = function(e){
    //alert('Js works!')
    document.getElementById('runFib').addEventListener('click', runFib, true);

}
/* 1. Fibonacci 
    Define function fib(n)
    Return the nth number in the sequence

    0 1 1 2 3 5 8 
    */


    function fib(n){
        if ( n==0){return 0;}
        if (n==1){return 1;}
        return fib(n-1) + fib(n-2)
    }

    function runFib(){
        let n = document.getElementById('fibN').value;
        console.log(fib(n));
        //document.write(fib(n));
        //$('#fibValue').val(fib(n));
        document.getElementById('fibOut').innerHTML = " = " + fib(n);

    }