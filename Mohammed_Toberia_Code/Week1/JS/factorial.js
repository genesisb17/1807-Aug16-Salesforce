function factorial(someNum){
    if(someNum == 0){
        return 1;
    }
    return someNum * factorial(someNum-1);
}
console.log(factorial(33));

function runFactorial(){
    let someNum = getElementById('facN').value;
    document.getElementById("factorialNum").innerHTML = factorial(someNum);
}
