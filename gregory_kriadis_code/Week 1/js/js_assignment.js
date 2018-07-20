window.onload = function() 
{
    // Event listeners for each individual button
    document.getElementById("btnFibonacci").addEventListener("click", runFibonacci, true);
    document.getElementById("btnBubbleSort").addEventListener("click", bubbleSort, true);
    document.getElementById("btnReverseStr").addEventListener("click", reverseStr, true);
    document.getElementById("btnFactorial").addEventListener("click", runFactorial, true);
    document.getElementById("btnIsEven").addEventListener("click", printIsEven, true);
    document.getElementById("btnPalindrome").addEventListener("click", printIsPalindrome, true);
    document.getElementById("btnDeleteElement").addEventListener("click", grabArray, true);
};

/*  1. Fibonacci
    Define function: fib(n) 
    Return the nth number in the fibonacci sequence. */
function fibonacci(n)
{
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function runFibonacci() 
{
    let n = document.getElementById('inputBar').value;
    document.getElementById('output').innerHTML = '= ' + fibonacci(n);
}
/* 2. Bubble Sort
    Define function: bubbleSort(numArray)
    Use the bubble sort algorithm to sort the array.
    Return the sorted array.*/
function bubbleSort()
{
    var arr = [9, 18, 7, 2, 4, 11, 1]; // Not bothering with user input on this one
    var n = arr.length;
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n - i - 1; j++) 
      {
        if (arr[j] > arr[j + 1])
        {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }  
      document.getElementById('output').innerHTML = ('Iteration %s  : %s', i, arr.join(' ')); // Iteration count doesn't work outside of console?
    }
}

/* 3. Reverse String
    Define function: reverseStr(someStr)
    Reverse and return the String. */
function reverseStr() 
{
    let str = document.getElementById('inputBar').value;
    let newStr = str.split('').reverse().join('');
    document.getElementById('output').innerHTML = newStr;
}

/* 4. Factorial
    Define function: factorial(someNum)
    Use recursion to compute and return the factorial of someNum. */

function factorial(fact)
{
    if(fact == 0) return 1;
    return fact * factorial(fact - 1);
}
function runFactorial()
{
    let str = document.getElementById('inputBar').value;
    document.getElementById('output').innerHTML = '= ' + factorial(str);
}

/* 6. Even Number
    Define function: isEven(someNum)
    Return true if even, false if odd.
    Do not use % operator. */
function isEven(n)
{    
    return (n & 1) ? false : true;
}
function printIsEven()
{
    let n = document.getElementById('inputBar').value;
    //console.log(n); // Just for testing purposes
    if (isEven(n) == true)
    {
        document.getElementById('output').innerHTML = 'even';
    }
    else
    {
        document.getElementById('output').innerHTML = 'odd';
    }
}

/* 7. Palindrome
    Define function isPalindrome(someStr)
    Return true if someStr is a palindrome, otherwise return false */
 function isPalindrome(pal) 
 {
    var reversePal = pal.split('').reverse().join('');
    return pal === reversePal;
 }
 function printIsPalindrome() 
 {
    let pal = document.getElementById('inputBar').value;
    if (isPalindrome(pal) == true)
    {
        document.getElementById('output').innerHTML = pal + ' is a palindrome!';
    }
    else
    {
        document.getElementById('output').innerHTML = pal + ' is NOT a palindrome!';
    }    
 }

 /* 10. Delete Element
    Define function deleteElement(someArr)
    Print length
    Delete the third element in the array.
    Print length
    The lengths should be the same. */
    function deleteElement(someArr)
    {
        delete someArr[2]; // Will delete the third array element (obviously)
    }
    function grabArray()
    {
        let arr = [2, 5, 11, 1, 9, 4]; // Hard coding the array for ease of assignment
        console.log(arr[2]);
        deleteElement(arr);
        console.log(arr[2]); // Console will print just the 3rd element- before and after deletion
        document.getElementById('output').innerHTML = arr[2]; // Entire modified array visible on page
    }

 /* 14. Display the current time on the top right of your HTML page, 
    updating every second */
    (function () 
    { 
        var clockElement = document.getElementById("clock");      
        function updateClock (clock) 
        {
          clock.innerHTML = new Date().toLocaleTimeString();
        }      
        setInterval(function () 
        {
            updateClock(clockElement);
        }, 1000);
    }());