/**
 * Michelle Gardner
 * Assignment 1 : Javascript Homework 
 * 
 */

/**
 * 1. Fibonacci
 * Define function: fib(n) Return the nth number in the fibonacci sequence.
 */
//upon window loading, we can do this function
window.onload = function (e) {

    // 1 Fibonacci:
    document.getElementById("runFib").addEventListener("click", runFib, true);
    
    // 2 Bubble Sort:
    document.getElementById("sortArray").addEventListener("click", bubbleSort, true);

    // 3 Reverse Word:
    document.getElementById("reverseWordBTN").addEventListener("click", newWord, true);
    
    // 4 Factorial:
    document.getElementById("findFactorialBTN").addEventListener("click", showFactorial, true);

    // 6 Even number:
    document.getElementById("evenBTN").addEventListener("click", showEven, true);

    // 7 Palindrome: 
    document.getElementById("palindromeBTN").addEventListener("click", newPalindrome, true);

    // 11. Splice Element
    document.getElementById("spliceBTN").addEventListener("click", showElement, true);
    
    // 14 Date/Time:
    // document.getElementById("getTimeBtn").addEventListener("click", showTime, true);

    // Menu Buttons
    document.getElementById("allProblemsMenu").addEventListener("click", all, true);    document.getElementById("fibMenu").addEventListener("click", showFib, true);
    document.getElementById("bubbleSortMenu").addEventListener("click", showBubbleSort, true);
    document.getElementById("reverseStringMenu").addEventListener("click", showReverseString, true);
    document.getElementById("factorialMenu").addEventListener("click", showFactorialDiv, true);
    document.getElementById("evenNumberMenu").addEventListener("click", showEvenNumber, true);
    document.getElementById("palindromeMenu").addEventListener("click", showPalindrome, true);
    document.getElementById("spliceElementMenu").addEventListener("click", showSpliceElement, true);
    document.getElementById("timeMenu").addEventListener("click", showTimeDiv, true);
}

// Individually show problems
function showFib(){
    var x = document.getElementById("fibMenu");
    // alert("clicked");

    if( document.getElementById("fibonacci").style.display != "none"){
        document.getElementById("fibonacci").style.display = "none";
    }
    else{
        document.getElementById("fibonacci").style.display = "initial";
    };

}

function showBubbleSort(){
    var x = document.getElementById("bubbleSortMenu");
    // alert("clicked");

    if( document.getElementById("bubbleSort").style.display != "none"){
        document.getElementById("bubbleSort").style.display = "none";
    }
    else{
        document.getElementById("bubbleSort").style.display = "initial";
    };
}

function showReverseString(){
    var x = document.getElementById("reverseStringMenu");
    // alert("clicked");

    if( document.getElementById("reverseString").style.display != "none"){
        document.getElementById("reverseString").style.display = "none";
    }
    else{
        document.getElementById("reverseString").style.display = "initial";
    };
}

function showFactorialDiv(){
    var x = document.getElementById("factorialMenu");
    // alert("clicked");

    if( document.getElementById("factorial").style.display != "none"){
        document.getElementById("factorial").style.display = "none";
    }
    else{
        document.getElementById("factorial").style.display = "initial";
    };

}

function showEvenNumber(){
    var x = document.getElementById("evenNumberMenu");

    if(document.getElementById("evenNumberDiv").style.display != "none"){
        document.getElementById("evenNumberDiv").style.display = "none";
    }
    else{
        document.getElementById("evenNumberDiv").style.display = "initial";
    }
}

function showPalindrome(){
    var x = document.getElementById("palindromeMenu");

    if(document.getElementById("palindrome").style.display != "none"){
        document.getElementById("palindrome").style.display = "none";
    }
    else{
        document.getElementById("palindrome").style.display = "initial";
    }
}

function showSpliceElement(){
    var x = document.getElementById("spliceElementMenu");

    if(document.getElementById("spliceElement").style.display != "none"){
        document.getElementById("spliceElement").style.display = "none";
    }
    else{
        document.getElementById("spliceElement").style.display = "initial";
    }
}


function showTimeDiv(){
    var x = document.getElementById("timeMenu");

    if(document.getElementById("time").style.display != "none"){
        document.getElementById("time").style.display = "none";
    }
    else{
        document.getElementById("time").style.display = "initial";
    }
}

// show all problem
// show problems whose display is none
function all(){
    var x = document.getElementById("allProblemsMenu");
    if(document.getElementById("fibonacci").style.display != "none" &&
    document.getElementById("bubbleSort").style.display != "none" &&
    document.getElementById("reverseString").style.display != "none" &&
    document.getElementById("factorial").style.display != "none" &&
    document.getElementById("evenNumberDiv").style.display != "none" &&
    document.getElementById("palindrome").style.display != "none" &&
    document.getElementById("spliceElement").style.display != "none" &&
    document.getElementById("time").style.display != "none"){
        document.getElementById("fibonacci").style.display = "none";
        document.getElementById("bubbleSort").style.display = "none";
        document.getElementById("reverseString").style.display = "none";
        document.getElementById("factorial").style.display = "none";
        document.getElementById("evenNumberDiv").style.display = "none";
        document.getElementById("palindrome").style.display = "none";
        document.getElementById("spliceElement").style.display = "none";
        document.getElementById("time").style.display = "none";
    }
    else{
        document.getElementById("fibonacci").style.display = "initial";
    document.getElementById("bubbleSort").style.display = "initial";
    document.getElementById("reverseString").style.display = "initial";
    document.getElementById("factorial").style.display = "initial";
    document.getElementById("evenNumberDiv").style.display = "initial";
    document.getElementById("palindrome").style.display = "initial";
    document.getElementById("spliceElement").style.display = "initial";
    document.getElementById("time").style.display = "initial";
    }
    

}






// function to find the number
function fib(n) {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    return fib(n - 1) + fib(n - 2);
}


function runFib() {
    let n = document.getElementById('fibN').value;

    // console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}

/**
 * 2. Bubble Sort
 *  Define function: bubbleSort(numArray)
 *  Use the bubble sort algorithm to sort the array.
 *  Return the sorted array.
 */


function bubbleSort(numArray){
    let input = document.getElementById('sortInput').value;
    
    // splits the input by space into an array
    var originalArray = input.split(" ");
    //alert(document.getElementById('sortInput').value);

    // loops through the array until it's at the end
    for (j = 0; j < originalArray.length; j++) {
        // loops through array until the end, once
        for (i = 0; i + 1 < originalArray.length; i++) {
            let tempry;

            // comparing two numbers, storing one in a temp variable and swapping if needed
            if (parseInt(originalArray[i]) > parseInt(originalArray[i + 1])) {
                tempry = originalArray[i + 1];
                originalArray[i + 1] = originalArray[i];
                originalArray[i] = tempry;
            }
        }
    }
    // joins the numbers by spaces
    let output = originalArray.join(" ");

    document.getElementById('newArray').innerHTML = '= ' + output;
}


/**
 *  3. Reverse String
 * Define function: reverseStr(someStr)
 * Reverse and return the String
 */

 // function to reverse entered word
 function reverseWord(word){
     // put string into an array, separate by "" 
    let arr = word.split("");
    // reverse the array
    arr.reverse();
    // rejoin them by ""
    return arr.join("");
    console.log(arr.join(""));
 }

 function newWord(){
    let word = document.getElementById('wordIN').value;

    // alert(word)

    document.getElementById('wordOUT').innerHTML = '= ' + reverseWord(word);

 }

 /** 4. Factorial
  *  Define function: factorial(someNum)
  *  Use recursion to compute adn return the factorial of someNum.
  */

function factorial(someNum){
    
    if(someNum < 0){
        return -1;
    }
    else if(someNum == 0){
        return 1;
    }
    else{
        
        return (someNum * factorial(someNum - 1));
        console.log(someNum);
    }
    
}

function showFactorial(){
    let num = document.getElementById('inputNum').value;

    document.getElementById('outputNum').innerHTML = '= ' + factorial(num);
}

/** 6. Even Number
 *  Define function: isEven(someNum)
 *  Return true if even, false if odd.
 *  Do not use % operator.
 */

 function isEven(someNum){
    // 0 divided by anything is 0, and even
    if(someNum == 0){
        return true;
    }
    // checks positive whole numbers
    else if(someNum > 0){
        newNum = someNum /2 ;
        // takes newNum - rounded to the nearest number and if it doesn't
        // equal 0, then return false
        if(newNum - Math.floor(newNum) != 0 ){
           // alert("Your answer or input is a decimal. Decimals cannot be even or odd according to Google.");
            return false;
        }

        return true;
    }
    else if(someNum < 0){
        newNum = someNum /2;
        if(newNum - Math.floor(newNum) != 0){
            return false;
        }

        return true;
    }
 }

 function showEven(){
    let num = document.getElementById('numIN').value;

    document.getElementById('numOUT').innerHTML = '= ' + isEven(num);
 }


 /**
  * 7. Palindrome
  * Define function isPalindrome(someStr)
  * Return true if someStr is a palindrome, otherwise return false
  */

 function isPalindrome(someStr) {
     // /[\W_]/ : replacing all non-alphanumeric characters: [^A-Za-z0–9_]
     someStr = someStr.replace(/[\W_]/g,"").toLowerCase();

     // created new variable, putting the separated, reversed, and then rejoined array there
     let newStr = someStr.split("").reverse().join("");

     // comparing original string to the new string
     if(newStr == someStr){
         return true;
     }
    return false;
  }
  
 function newPalindrome(){
     let palindrome = document.getElementById('inputWord').value;

     document.getElementById('isPalindrome').innerHTML = '= ' + isPalindrome(palindrome);
 }


/** 11. Splice Element
 *  Define function spliceElement(someArr)
 *  Print Length
 *  Splice the third element in the Array
 *  Print Length
 *  The Lengths should be one less the original Length
 */

 function spliceElement(someArr){
    // splitting array at spaces
    let originalArr = someArr.split(" ");
    
    // original splitted array put in new variable 
   let newArr = someArr.split(" ");

   // check if input box is empty
   if(newArr.length == 1){
       alert("Please enter items.");
       return;
   }

    // splicing array at index 2, and only 1 item
    // expect item at index 2 to be removed
     newArr.splice(2, 1); 

     // return both the length of the orginal array and the new array
     return [originalArr.length, newArr.length];
 }

function showElement(){
    let element = document.getElementById('inWords').value;

    document.getElementById('newLength').innerHTML = '= ' + spliceElement(element);
}

/**
 * 14. Date 
 * Display the current time on the top right of your HTML page, updating every second
 */

myVar = setInterval(getTime, 1000);

 function getTime(){


    var currDate = new Date();
    var h = currDate.getHours();
    var m = currDate.getMinutes();
    var s = currDate.getSeconds();

    if(m < 10 && s < 10)
    {
        m.getMinutes() = "0"+ m;
        s.getSeconds() = "0" +s;
    }

    var time = h + ":" + m + ":" + s;
    document.getElementById("currTime").innerHTML = h+ ":" + m + ":" + s;
    
    return time;
    
     }
 
 function showTime(){

    document.getElementById('currTime').innerHTML = getTime();
}

