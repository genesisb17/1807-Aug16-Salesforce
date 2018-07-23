//Sunny Trivedi
window.onload = function(e){
    // alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib,true);//fibonnaci
    document.getElementById("runBub").addEventListener("click",runBub,true);//bubblesort
    document.getElementById("runRev").addEventListener("click",runRev,true);//reversestr
    document.getElementById("runFact").addEventListener("click",runFact,true);//factorial
    document.getElementById("runEven").addEventListener("click",runEven,true);//iseven
    document.getElementById("runSplice").addEventListener("click",runSplice,true);//spliceelement
    document.getElementById("runPer").addEventListener("click",runPer,true);//person constructor
    document.getElementById("runDes").addEventListener("click",runDes,true);//descend order
    document.getElementById("runTime");//time
}

 /*1. Fibonacci
 define function: fib(n)
 Return the nth number in the sequence
 0 1 1 2 3 5 8
 */
 
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

 /*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/

function bubbleSort(numArray){
    var x = numArray.length; //set length
    for (var i = x-1; i>=0; i--){//outer for loop for deincrement, going backwards
        for (var j = 1; j<=i; j++){//inner for loop for increment, going forward
            if (numArray[j-1]>numArray[j]){//swapping of numbers
                var temp = numArray[j-1];
                numArray[j-1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    return numArray;
}
function runBub(){
    let numArray = document.getElementById('bubN').value;
    document.getElementById("bubOut").innerHTML = '=' +bubbleSort(numArray);
}
/*function print(numArray){
    var n = new [numArray];
    for (i =0; i<n; ++i){
        console.log(n[i] + " ");
    }*/
  /*  let n = document.getElementById('bubN').value;
    //console.log(fib(n));
    document.getElementById('bubOut').innerHTML = '= ' + bubbleSort(numArray);
}/*

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/

function reverseStr(someStr){
    var sp = '';
    for( i = someStr.length -1; i>=0; i--){
        sp += someStr[i];
    }
        return sp;
}
function runRev(){
    let someStr = document.getElementById('rev').value;
    document.getElementById("revOut").innerHTML = '=' + reverseStr(someStr);
}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/
function factorial(someNum){
if(someNum == 0 || someNum == 1){
    return 1;
}
return someNum * factorial(someNum-1);
}

function runFact(){
    let someNum = document.getElementById('fact').value;
    document.getElementById("factOut").innerHTML = '=' +factorial(someNum);
}
/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/
function substring (someStr, length, offset){
    
}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum){
    var x = someNum &1;
   if (x == 0){
    return "is even";
   }
   else{ 
       return "is odd";
}
function runEven(){
    let someNum = document.getElementById('even').value;
    document.getElementById("evenOut").innerHTML = '=' +isEven(someNum);
}
}

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/

/*8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  *

/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.*/

/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/
function spliceElement(someArr){
    console.log(someArr);
    console.log(someArr.length);
    someArr.splice(2,1,"");
    console.log(someArr);
    console.log(someArr.length);
}

function runSplice(someArr){
    let someArr=document.getElementById('splice').value;
    document.getElementById('spliceOut').innerHTML='=' +spliceElement(someArr);
}
/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
    var john = new Person("John", 30);*/
    
   function Person(name, age){
       this.name = name;
       this.age = age;
   } 
function runPer(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    document.getElementById('personOut').innerHTML = '= ' +Person(name,age);
}
/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30);*/

/*14. Display the current time on the top right of your HTML page, 
updating every second*/
function time(d) {
    var d = new Date().toString;
    document.getElementById('txt').innerHTML = '= ' +time(d);
    var timed = setTimeout(time, 500);
}

/*15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/
function desendOrder(num){
    var y = (""+num).split("");
    for(a = y.length-1; a >=0; a--){
        for (b = 1; b <= a; b++){
            if (y[b-1]<y[b]){
                var temp = y[b-1];
                y[b-1] = y[b];
                y[b]= temp;
            }
        }
    }
    return y.join("");
}

function runDes(){
    let n = document.getElementById('des').value;
    //console.log(fib(n));
    document.getElementById('desOut').innerHTML = '= ' + desendOrder(num);
}