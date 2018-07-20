window.onload = (e) => {
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click", runFib, true);
    $('#runBubble').on("click", bubbleSort);
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
    let bubbleIn = $('#bubbleList').val();
    console.log(bubbleIn);
    let numArray = bubbleIn.split(',');
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
    console.log(numArray.join(','));
    $('#bubbleOut').text(numArray.join(','));
}

/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr) {
    let result = [];
    let someStrArr = someStr.split('');
    for (let i=0; i<=someStrArr.length; i++) {
        result.unshift(someStrArr[i]);
    }
    return result.join('');
}

/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum. */

function factorial(someNum) {
    let product = 1;
    for (i = someNum; i > 1; i--) {
        product *= i; 
    }
    return product;
}

/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {
   if ((someNum & 1) == 0)
    return true;
   else
    return false;
}

/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
    let length = someStr.length;
    let count = 0;

    while (count <= length/2){
        if (someStr[count] != someStr[length - 1 - count])
            return false; 
            count++
    }
    return true;
}

function printShape(shape, height, character) {
    let string = '';
    switch (shape) {
        case "square":
            for (let i=0; i < height; i++) {
                for (let c=0; c < height; c++) {
                    string = string.concat(character);
                }
                console.log(`${string}\n`);
                string = '';
            }
            break;
        case "triangle":
            for (let i=1; i <= height; i++) {
                for (let c=0; c < i; c++) {
                    string = string.concat(character);
                }
                console.log(`${string}\n`);
                string = '';
            }
            break;
        case "diamond":
            let string ='';
            let count = 1;
            for (count; count <= height; count += 2) {
                for (let i=0; i < count; i++) {
                    string = string.concat(character);
                }
                console.log(`${string}\n`);
                string = '';
            }
            count -= 2
            for (count; count >= 1; count -= 2) {
                for (let i=1; i <= count-2; i++) {
                    string = string.concat(character);
                }
                console.log(`${string}\n`);
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
    
function getPerson(name, age) {
    return {
        personName: name,
        yearsOld: age
    };
}