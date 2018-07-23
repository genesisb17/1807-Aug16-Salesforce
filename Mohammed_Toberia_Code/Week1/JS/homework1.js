/*
MOHAMMED N. TOBERIA



1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
0 1 1 2 3 5 8
*/

window.onload = function(e){
    // alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib,true); 
    document.getElementById("runSort").addEventListener("click", runSort, true); 
    document.getElementById("runReverse").addEventListener("click", runReverse,true);
    document.getElementById("runFactorial").addEventListener("click", runFactorial,true);
    document.getElementById("runEven").addEventListener("click", runEven,true);
    document.getElementById("runSplice").addEventListener("click", runSplice,true);
    document.getElementById("runDescOrder").addEventListener("click", runDescOrder,true);
    document.getElementById("runPerson").addEventListener("click", runPerson,true);

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
///////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/

function bubbleSort(numArray){
    var arrLen = numArray.length;

    for(var i = arrLen - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
            if(numArray[j - 1] > numArray[j]){
                var storeValue = numArray[j - 1];
                numArray[j - 1] = numArray[j];
                numArray[j] = storeValue;
            }
        }
    }
    return numArray;
}
function runSort(){
    let numArray = getElementById('BubbN').value;
    document.getElementById("sorted").innerHTML = bubbleSort(numArray);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/

function reverseStr(someStr){
    return someStr.split("").reverse().join("");
}

function runReverse(){
    let someStr = getElementById('revN').value;
    document.getElementById("reversed").innerHTML = reverseStr(someStr);
}


///////////////////////////////////////////////////////////////////////

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/

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

/////////////////////////////////////////////////////////////////////
/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/

function isEven(someNum){
    var x = someNum & 1;

    if(x == 0){
        return "The entered value is even";
    }
    else
    return "The entered value is odd"; 
}

function runEven(){
    let someNum = getElementById('evenN').value;
    document.getElementById("isEvenN").innerHTML = isEven(someNum);
}
////////////////////////////////////////////////////////////////////////
/*
11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.
*/

function spliceElement(someArr){
    var someArr = [1, 2, 4, 5, 7];
    console.log(someArr);
    someArr.splice(2, 0, 3);
    console.log(someArr);

    someArr.splice(5, 1, 6);
    console.log(someArr);
}

function runSplice(){
    let someArr = getElementById('spliceN').value;
    document.getElementById("splice").innerHTML = spliceElement(someArr);
}



/*
15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(numArray){
    var arrLen = numArray.length;

    for(var i = arrLen - 1; i >= 0; i--){
        for(var j = 1; j <= i; j++){
            if(numArray[j - 1] < numArray[j]){
                var temp = numArray[j - 1];
                numArray[j-1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    return numArray;
}

function runDescOrder(){
    let numArray = getElementById(descOrd).value;
    document.getElementById("descOrder").innerHTML = descendingOrder(numArray);
}

/*
12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
    var john = new Person("John", 30);
    
*/

function Person(name, age){
    this.firstName = name;
    this.age = age;
}

var john = new Person("John", 30);

"My name is " + this.firstName + " and my age is " + this.age;

function runPerson(){
    let name = getElementById(person).value;
    let age = getElementById(person).value;
    document.getElementById("Pers").innerHTML = Person(name,age);
}
