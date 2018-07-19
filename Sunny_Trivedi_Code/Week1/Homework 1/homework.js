//Sunny Trivedi
/*window.onload = function(e){
    // alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib,true);
 }*/
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
var n = numArray;
for (i = 0; i <n-1; i++){
    for (j = 0; j < n -i-1; j++){
        if(arr[j] > arr[j+1]){
            t = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]=t;
            return t;
        }
    }
}
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
    var str  = someStr;
    str.split('');
    str.
    str.join('');
}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/
function factorial(someNum){

}

/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

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

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/

/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
	var john = getPerson("John", 30);*/
 
/*14. Display the current time on the top right of your HTML page, 
updating every second*/

/*15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/