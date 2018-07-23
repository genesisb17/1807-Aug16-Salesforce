window.onload = function(e){
    //this.alert("js works!");
    document.getElementById("runFib").addEventListener("click", runFib, true);
    document.getElementById("runBubbleSort").addEventListener("click", runBubbleSort, true);
    document.getElementById("runReverse").addEventListener("click", runReverseStr, true);
    document.getElementById("runFactorial").addEventListener("click", runFactorial, true);
    document.getElementById("runSubstring").addEventListener("click", runSubstring, true);
    document.getElementById("runIsEven").addEventListener("click", runIsEven, true);
    document.getElementById("runIsPalindrome").addEventListener("click", runIsPalindrome, true);
    document.getElementById("runPrintShape").addEventListener("click", runPrintShape, true);
    document.getElementById("runDeleteElement").addEventListener("click", runDeleteElement, true);
    document.getElementById("runSpliceElement").addEventListener("click", runSpliceElement, true);
}

function runSelection(){
    let n = document.getElementById("onSelect").value;
    $('.jumbotron').attr("hidden", true);            

    switch(n){
        case "fibOption":
            $('#fibSelection').attr("hidden", false);            
            break;
        case "bsOption":
            $('#bsSelection').attr("hidden", false);            
            break;
        case "reverseOption":
            $('#reverseSelection').attr("hidden", false);            
            break;
        case "factorialOption":
            $('#factorialSelection').attr("hidden", false);            
            break;
        case "substringOption":
            $('#substringSelection').attr("hidden", false);            
            break;
        case "evenOption":
            $('#evenSelection').attr("hidden", false);            
            break;
        case "paliOption":
            $('#paliSelection').attr("hidden", false);            
            break;
        case "shapeOption":
            $('#shapeSelection').attr("hidden", false);            
            break;  
        case "deleteOption":
            $('#deleteSelection').attr("hidden", false);            
            break;
        case "spliceOption":
            $('#spliceSelection').attr("hidden", false);            
            break;

        default:
    }
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


function runFib(){
    let n = document.getElementById("fibN").value;
    //console.log(fib(n));
    document.getElementById("fibOut").innerHTML = "= " + fib(n);
}

/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/

function bubbleSort(numArray){
    for(var i = 0; i < numArray.length; i++) {
        for(var j = 1; j < numArray.length; j++) {
            if(parseInt(numArray[j - 1]) > parseInt(numArray[j])) {
                var temp = numArray[j - 1];                   
                numArray[j- 1] = numArray[j];
                numArray[j] = temp;               
             }
         }
     }
     return numArray;
 }

 function runBubbleSort(){
    let n = document.getElementById("bubbleInput").value;
    numArray = n.split(", ");
    //console.log(bubbleSort(numArray));
    document.getElementById("bubbleOut").innerHTML = "= " + bubbleSort(numArray);
}

/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/

function reverseStr(someStr){
    someStr = someStr.split('').reverse().join('');
    return someStr;
}

function runReverseStr(){
    let someStr = document.getElementById("reverseInput").value;
    document.getElementById("reverseOut").innerHTML = "= " + reverseStr(someStr);
}

/* 4. Factorial
    Define function: factorial(someNum)
    Use recursion to compute and return the factorial of someNum.
    */
function factorial(someNum){
    if(someNum == 0) return 1;
    return someNum * factorial(someNum - 1);
}
    
function runFactorial(){
    let someNum = document.getElementById("factorialInput").value;
    document.getElementById("factorialOut").innerHTML = "= " + factorial(someNum);
}

 /* 5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/
function substring(someStr, length, offset){
    return someStr.substring(length, offset);
}

function runSubstring(){
    let someStr = document.getElementById("strInput").value;
    let length = document.getElementById("lengthInput").value;
    let offset = document.getElementById("offsetInput").value;
    document.getElementById("subOut").innerHTML = "= " + substring(someStr, length, offset);
}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/
function isEven(someNum){
    if (someNum & 1) return false;
    return true;
}

function runIsEven(){
    let someNum = document.getElementById("evenInput").value;
    document.getElementById("evenOut").innerHTML = "= " + isEven(someNum);
}

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/   
function isPalindrome(someStr){
   someStr = someStr.replace(/[^a-zA-Z]+/g,"").toLowerCase();
   anotherStr = someStr.split('').reverse().join('');
   if(anotherStr == someStr) return true
   return false;
 }

function runIsPalindrome(){
    let someStr = document.getElementById("paliInput").value;
    document.getElementById("paliOut").innerHTML = "= " + isPalindrome(someStr);
}

/*
8. Shapes
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

*/

function printShape(shape, height, character){
    shape = shape.toLowerCase();
    let arr = [];

    switch(shape){
      case "triangle":
          for(i = 1; i <= height; i++){
              arr[i] = character.repeat(i);
          }
          break;
      case "square":
          for(i = 1; i <= height; i++){
              arr[i] = character.repeat(height);
          } 
          break;
      case "diamond":
        var n = 1;
        var space = height-1/2;
        for(i = 1; i < height; i++){
            if(i <= (height - 1)/2){
                arr[i] = (" ".repeat(space) + character.repeat(n));
                n += 2;
                space--;
            }else{
                arr[i] = (" ".repeat(space) + character.repeat(n));
                n -= 2;
                space++;
            }
          }
          arr[arr.length] = " ".repeat(height - 1/2) + character;
          break;
      default:
    }
    return arr;
}

function runPrintShape(){
    let shape = document.getElementById("shapeInput").value;
    let height = document.getElementById("heightInput").value;
    let character = document.getElementById("characterInput").value;
    document.getElementById("shapeOut").innerHTML = printShape(shape, height, character).join("<br>");
}


 /*
9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.
*/


/*
10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.
*/
 function deleteElement(someArr){
     let originalArr = someArr.length;
     delete someArr[2];
     return(`original: ${originalArr}, new: ${someArr.length}`);
 }

 function runDeleteElement(){
    let n = document.getElementById("deleteInput").value;
    numArray = n.split(", ");
    document.getElementById("deleteOut").innerHTML = "= " + deleteElement(numArray);
}

/*
11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.
*/
function spliceElement(someArr){
    let originalArr = someArr.length;
    someArr.splice(2, 1);
    return(`original: ${originalArr}, new: ${someArr.length}`);
}

function runSpliceElement(){
   let n = document.getElementById("spliceInput").value;
   numArray = n.split(", ");
   document.getElementById("spliceOut").innerHTML = "= " + spliceElement(numArray);
}

/*
12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
    var john = new Person("John", 30);
*/

/*
13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);
*/

/*
14. Display the current time on the top right of your HTML page, 
updating every second
*/

function currentTime(){
    let currentTime = new Date()
    let hr = currentTime.getHours()
    let min = currentTime.getMinutes()
    let sec = currentTime.getSeconds()
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }
    let time = `\xa0\xa0\xa0\xa0${hr}:${min}:${sec}`;

    document.getElementById('runTime').innerHTML = time;
}
setInterval(currentTime, 1000);

/*
15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.
 */
