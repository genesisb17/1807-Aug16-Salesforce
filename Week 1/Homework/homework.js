//Homework set
//Matthew Smart
window.onload = function(){
    dispTime();
    document.getElementById("btn1").addEventListener("click", fibn, true);
    document.getElementById("btn2").addEventListener("click", bubsort, true);
    document.getElementById("btn3").addEventListener("click", revStr, true);
    document.getElementById("btn4").addEventListener("click", fact, true);
    document.getElementById("btn5").addEventListener("click", ss, true);
    document.getElementById("btn6").addEventListener("click", even, true);
    document.getElementById("btn7").addEventListener("click", palindrome, true);
    document.getElementById("btn9").addEventListener("click", obj, true);
    
};
/*
1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
*/
function fib(n)  {
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1) + fib(n-2);
}

/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/
function bubbleSort(numArray) {
    var isSorted = false;
    while(isSorted == false) {
        isSorted = true;
        for(i=0; i < numArray.length; i++) {
            if(numArray[i] > numArray[i+1]){
                let temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                isSorted = false;
            }
        }
    }
    return numArray;
}

/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/
function reverseStr(someStr) {
    var reverse = "";
    for(i=0; i < someStr.length; i++) {
        reverse = someStr[i] + reverse;
    }
    return reverse;
}

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/
function factorial(someNum) {
    if(someNum > 1) {
        let next = someNum - 1;
        return someNum * factorial(next);
    }
    return 1;
}

/*
5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/
function substring(someStr, length, offset) {
    //check for errors
    var len = someStr.length;
    if(offset > len) {
        alert("Offset is larger than given string!");
    }
    if(offset+length > len) {
        alert("Desired substring is outside the scope of the given string")
    }
    if(length < 0 || offset < 0) {
        alert("Passed values are less than zero");
    }
    if(someStr == null) {
        alert("String is empty");
    }
    return someStr.substring(offset, offset+length);
}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/
function isEven(someNum) {
    var soln= "true";
    /*
    Uses bitwise operation to determine if the last bit is 1 or 0
      XXXX
    & 0001
      ----
      000?
    */
    if(someNum & 1) {
        soln= "false";
    }
    return soln;
}

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/

function isPalindrome(someStr) {
    var reverse = reverseStr(someStr);
    var soln = false;
    if(reverse === someStr) {
        soln = true;
    }
    return soln;
}

/*
9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.

*/

function traverseObject(someObj) {
    for(property in someObj) {
        console.log(`${property}: ${someObj[property]}`);
    }
}
/*
14. Display the current time on the top right of your HTML page, 
updating every second
*/
function dispTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = format(m);
    s = format(s);

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      dispTime();
    }, 500);
    function format(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
}

/*****************************************************************/
/********************Webpage Display Functions********************/
/*****************************************************************/
function fibn() {
    var n = document.getElementById("input1").value;
    var result = fib(n);
    var output = document.getElementById("output1");
    output.innerHTML = result;
}
function bubsort() {
    var string = document.getElementById("input2").value;
    array = string.split(",");
    var result = bubbleSort(array);
    ans = result.toString();
    var output = document.getElementById("output2");
    output.innerHTML = ans;
}
function revStr() {
    var string = document.getElementById("input3").value;
    var result = reverseStr(string);
    var output = document.getElementById("output3");
    output.innerHTML = result;
}
function fact() {
    var n = document.getElementById("input4").value;
    var result = factorial(n);
    var output = document.getElementById("output4");
    output.innerHTML = result;
}
function ss() {
    var string = document.getElementById("input5").value;
    array = string.split(",");
    var result = substring(array[0], array[1], array[2]);
    var output = document.getElementById("output5");
    output.innerHTML = result;
}
function even() {
    var n = document.getElementById("input6").value;
    var result = isEven(n);
    var output = document.getElementById("output6");
    output.innerHTML = result;    
}
function palindrome() {
    var string = document.getElementById("input7").value;
    var result = isPalindrome(string);
    var output = document.getElementById("output7");
    output.innerHTML = result;
}
function obj() {
    var person2 = {fname:"Larry", lname:"Herman", age:45};
    var result = traverseObject(person2);
    var output = document.getElementById("output7");
    output.innerHTML = result;
}