window.onload = (e) => {
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click", runFib, true);
    $('#runBubble').on("click", bubbleSort);
    $('#runReverse').on("click", reverseStr);
    $('#runFactorial').on("click", factorial);
    $('#runEven').on("click", isEven);
    $('#runPal').on("click", isPalindrome);
    $('#runShape').on("click", printShape);
    $('#runPerson').on("click", getPerson);
}

// 1. Fibonacci

function fib(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

function runFib() {
    let n = document.getElementById('fibN').value;
    document.getElementById('fibOut').innerHTML = ' = ' + fib(n);
}

/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

function bubbleSort() {
    let numArray = $('#bubbleList').val().split(',');
    let bubbles = numArray.length;
    let swapVal = 1;
    while (swapVal != 0) {
        swapVal = 0;
        for (let i=1; i<=bubbles; i++) {
            if (numArray[i-1] > numArray[i]) {
                let bigger = numArray[i-1];
                numArray[i-1] = numArray[i];
                numArray[i] = bigger;
                swapVal = i;
            }
        }
        bubbles = swapVal;
    }
    $('#bubbleOut').text(numArray.join(','));
}

/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr() {
    let result = [];
    let someStrArr = $('#revString').val().split('');
    for (let i=0; i<=someStrArr.length; i++) {
        result.unshift(someStrArr[i]);
    }
    $('#revOut').text(result.join(''));
}

/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum. */

function factorial() {
    let product = 1;
    let someNum = $('#factorialIn').val();
    for (i = someNum; i > 1; i--) {
        product *= i;
    }
    $('#factorialOut').text(product);
}

/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven() {
   let someNum = $('#evenIn').val();
   if ((someNum & 1) == 0)
    $('#evenOut').text("True");
   else
    $('#evenOut').text("False");
}

/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome() {
    let someStr = $('#palIn').val().split('');
    let length = someStr.length;
    let count = 0;

    while (count <= length/2) {
        if (someStr[count] != someStr[length - 1 - count]) {
             $('#palOut').text("False");
             return false;
        }
        count++;
    }
    $('#palOut').text("True");
    return true;
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

function printShape() {
    let string = '';
    let input = $('#shapeIn').val().split(',');
    let shape = input[0];
    let height = input[1];
    let character = input[2];
    switch (shape) {
        case "square":
            $('#shapeOut li').remove('');
            string = '';
            for (let i=0; i < height; i++) {
                for (let c=0; c < height; c++) {
                    string = string.concat(character);
                }
                let item = document.createElement('li');
                item.innerHTML = string;
                $('#shapeOut').append(item);
                string = '';
            }
            break;
        case "triangle":
            $('#shapeOut li').remove('');
            string = '';
            for (let i=1; i <= height; i++) {
                for (let c=0; c < i; c++) {
                    string = string.concat(character);
                }
                let item = document.createElement('li');
                item.innerHTML = string;
                $('#shapeOut').append(item);
                string = '';
            }
            break;
        case "diamond":
            $('#shapeOut li').remove('');
            string ='';
            let count = 1;
            for (count; count <= height; count += 2) {
                for (let i=0; i < count; i++) {
                    string = string.concat(character);
                }
                let item = document.createElement('li');
                item.innerHTML = string;
                $('#shapeOut').append(item);
                string = '';
            }
            count -= 2
            for (count; count >= 1; count -= 2) {
                for (let i=1; i <= count-2; i++) {
                    string = string.concat(character);
                }
                let item = document.createElement('li');
                item.innerHTML = string;
                $('#shapeOut').append(item);
                string = '';
            }
            break;
        default:
            alert("please enter 'triangle', 'square', or 'diamond' as your shape input");

    }
}


 /* 13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30); */

function getPerson() {
    let name = $('#personName').val();
    let age = $('#yearsOld').val();
    let person = {
        personName: name,
        yearsOld: age
    };
    $('#personOut').text(`Name: ${person.personName}, Age: ${person.yearsOld}`);
}
