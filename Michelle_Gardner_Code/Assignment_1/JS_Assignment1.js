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

    //Fibonacci:
    document.getElementById("runFib").addEventListener("click", runFib, true);
    
    //Bubble Sort:
    document.getElementById("sortArray").addEventListener("click", bubbleSort, true);

    // Reverse Word:
    document.getElementById("reverseWordBTN").addEventListener("click", newWord, true);
    
    // Palindrome: 
    document.getElementById("palindromeBTN").addEventListener("click", newPalindrome, true);

    // Date/Time:
    document.getElementById("getTimeBtn").addEventListener("click", showTime, true);

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
    alert(document.getElementById('sortInput').value);

    // loops through the array until it's at the end
    for (j = 0; j < originalArray.length; j++) {
        // loops through array until the end once
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

}

function showFactorial(){
    let word = document.getElementById('wordIN').value;

    // alert(word)

    document.getElementById('wordOUT').innerHTML = '= ' + reverseWord(word);
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



/**
 * 14. Date 
 * Display the current time on the top right of your HTML page, updating every second
 */

 function getTime(){
     var currTime = new Date();
    // getting the hours and minutes
     hours = currTime.getHours(),
     mins = currTime.getMinutes();
     
     if (mins < 10){
         mins = "0"+currTime.getMinutes();
     }
     var time = hours +":"+ mins;
    return time;
    
 }

 function showTime(){

    document.getElementById('time').innerHTML = getTime();
 }
