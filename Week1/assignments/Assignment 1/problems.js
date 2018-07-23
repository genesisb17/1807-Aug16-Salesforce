window.onload = function (e) {
    this.setInterval(setClock, 1000);

    document.getElementById("runFib").
        addEventListener("click", runFib, true);
    document.getElementById("submit2").
        addEventListener("click", runBubble, true);
    document.getElementById("submit3").
        addEventListener("click", reverseString, true);
    document.getElementById("submit4").
        addEventListener("click", factorial, true);
    document.getElementById("submit5").
        addEventListener("click", subString, true);
    document.getElementById("submit6").
        addEventListener("click", isEven, true);
    document.getElementById("submit7").
        addEventListener("click", isPalin, true);
    /*document.getElementById("submit8").
        addEventListener("click", shapes, true);*/
    document.getElementById("submit15").
        addEventListener("click", descendingSort, true);
}

/* 1. Fibonacci
Define function: fib(n)
Return the nth number in the fibonacci sequence
0 1 1 2 3 5 8
*/
function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function runFib() {
    let n = document.getElementById('fibN').value;
    // console.log(fib(n));
    let x = fib(n);
    document.getElementById('fibOut').innerHTML = '= ' + x;
}


/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/
function runBubble(numArray) {
    let output;

    numArray = $('#input2').val().split(" ");

    for (i = 0; i < numArray.length; i++) {
        for (j = 0; j + 1 < numArray.length; j++) {
            if (parseInt(numArray[j]) > parseInt(numArray[j + 1])) {
                let temporaryVariable = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temporaryVariable;
            }
        }
    }

    output = numArray.join(" ");

    document.getElementById('output2').innerHTML = " = " + output;
}

/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/
function reverseString() {
    let someStr = document.getElementById('input3').value;

    someStr = someStr.split('').reverse().join('');

    document.getElementById('output3').innerHTML = someStr;
}

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/
function factorial(i, total, firstRun) {
    if (firstRun === undefined) {
        let input = $('#input4').val();
        firstRun = true;
        total = 1;
        for (i = 1; i < parseInt(input) + 1; i++) {
            total = factorial(i, total, firstRun);
        }
        console.log(total);
        document.getElementById('output3').innerHTML = total;
        return;
    }

    total *= i;
    i--;

    return total;
}

/*
5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/
function subString() {
    let length = $('#input5b').val();
    let offset = $('#input5c').val();

    let someStr = $('#input5a').val().substr(offset, length);

    alert(someStr);

    document.getElementById("output5").innerHTML = someStr;
}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/
function isEven() {
    let testedValue = $('#input6').val();

    if (testedValue & 1) {
        document.getElementById('output6').innerHTML = "Odd";
    } else {
        document.getElementById('output6').innerHTML = "Even";
    }
}

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/
function isPalin() {
    let someStr = document.getElementById('input7').value;
    let originalString = someStr;

    someStr = someStr.split('').reverse().join('');

    if (originalString.localeCompare(someStr) === 0)
        document.getElementById('output7').innerHTML = "True";
    else
        document.getElementById('output7').innerHTML = "False";

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
/*function shapes() {
    let shape = $('#input8a').val();
    let height = $('#input8b').val();
    let character = $('#input8c').val();
    let shapeLine = "";
    let breakElement = document.createElement("br");

    switch (shape) {
        case "square":
            for (i = 0; i < height; i++)
                shapeLine += character;
            for (i = 0; i < height; i++) {

            }
            break;

        case "triangle":
            alert("you entered a triangle");
            break;

        case "diamond":
            alert("you entered a diamond");
            break;

        default:
            alert("invalid shape");
    }
}*/

/*
14. Display the current time on the top right of your HTML page,
updating every second
*/
function setClock() {
    let dateTime = new Date();
    let timeString;

    if (dateTime.getHours() == 0)
        timeString = "12";
    else
        timeString = dateTime.getHours();

    if (dateTime.getMinutes() < 10)
        timeString += ":" + "0" + dateTime.getMinutes();
    else
        timeString += ":" + dateTime.getMinutes();

    if (parseInt(dateTime.getSeconds()) < 10)
        timeString += ":" + "0" + dateTime.getSeconds();
    else
        timeString += ":" + dateTime.getSeconds();

    if (parseInt(dateTime.getHours()) < 12)
        timeString += "AM";
    else
        timeString += "PM";

    document.getElementById("time").innerHTML = timeString;
}

/*
15.  Descending order
Your task is to make a function that can take any non-negative
integer as a argument and return it with its digits in descending
order. Essentially, rearrange the digits to create the highest possible number.
*/
function descendingSort() {
    let output;

    numArray = $('#input15').val().split(" ");

    for (i = 0; i < numArray.length; i++) {
        if (parseInt(numArray[i]) < 0) {
            //document.getElementById('output15').innerHTML = "No non-negative numbers allowed";
            console.log("No negative numbers allowed");
            return;
        }
    }

    for (i = 0; i < numArray.length; i++) {
        for (j = 0; j + 1 < numArray.length; j++) {
            if (parseInt(numArray[j]) < parseInt(numArray[j + 1])) {
                let temporaryVariable = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temporaryVariable;
            }
        }
    }

    output = numArray.join(" ");
    document.getElementById('output15').innerHTML = " = " + output;

}