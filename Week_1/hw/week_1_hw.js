window.onload = function () {
    $('#fibButton').on('click', runFib);
    $('#sortButton').on('click', runSort);
    $('#reverseButton').on('click', runReverse);
    $('#factorialButton').on('click', runFactorial);
    $('#subButton').on('click', runSub);
    $('#evenButton').on('click', runEven);
    $('#palButton').on('click', runPal);
    $('#shapeButton').on('click', runShape);
};

//1. Fibonacci

function fib(n) {
    //recursively call Fibonacci series
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

function runFib() {
    let n = Number($('#fib').val());
    //check for proper input
    if (Number.isInteger(n) == false || n < 0) {
        alert("Invalid input. Please input a positive integer.");
        return;
    };
    //run series, print output
    $('#fibOut').text("= " + fib(n));
};

//2. Bubble Sort

function bubbleSort(someArray) {
    let n = someArray.length;
    let sorted = false;
    //sort if not sorted
    while (sorted == false) {
        //assume the array is sorted
        sorted = true;
        for (i = 1; i < n; i++) {
            //if unsorted elements detected, repeat sort
            if (someArray[i] < someArray[i - 1]) {
                let a = someArray[i];
                someArray[i] = someArray[i - 1];
                someArray[i - 1] = a;
                sorted = false;
            }
        }
    }
    return someArray;
};

function runSort() {
    let input = $('#sort').val();
    //run sort function, print output
    let someArray = [];
    for (i = 0; i < input.length; i++) {
        someArray.push(input.charAt(i));
    };
    $('#sortOut').text("= " + bubbleSort(someArray));
};

//3. Reverse String

function reverseStr(someStr) {
    //concatonate the string to a new string in reversed order
    let n = someStr.length;
    let reversed = '';
    while (n--) {
        reversed = reversed.concat(someStr.charAt(n));
    };
    return reversed;
};

function runReverse() {
    //run reverseStr function
    let someStr = $('#reverse').val();
    $('#reverseOut').text("= " + reverseStr(someStr));
};

//4. Factorial

function factorial(num) {
    //recursively multiply the input number by decreasing factorials
    if (num == 1) {
        return 1;
    };
    return num * factorial(num - 1);
};

function runFactorial() {
    let num = Number($('#factorial').val());
    //check for positive int input
    if (Number.isInteger(num) == false || num < 0) {
        alert("Please input a positive integer.");
        return;
    }
    //run factorial function
    $('#factorialOut').text("= " + factorial(num));
};

//5. Substring

function subString(someStr, length, offset) {
    //check for impossible inputs
    if (length + offset > someStr.length | offset < 0 | offset > someStr.length | length > someStr.length) {
        alert("Desired substring length not possible for input string.");
        return;
    };
    let newStr = "";
    for (i = offset; i < offset + length; i++) {
        newStr = newStr.concat(someStr.charAt(i));
    };
    return newStr;
};

function runSub() {
    //run subString function
    let someStr = $('#sub').val();
    let length = parseInt($('#length').val());
    let offset = parseInt($('#offset').val());
    $('#subOut').text("= " + subString(someStr, length, offset));
};

//6. Even Number

function isEven(num) {
    //use built in isInteger() function to detect 0.5 results
    if (Number.isInteger(num / 2) == true) {
        return true;
    }
    else {
        return false;
    };
};

function runEven() {
    let num = Number($('#even').val());
    //check for integer input
    if (Number.isInteger(num) == false) {
        alert("Please input an integer.");
        return;
    }
    //run isEven function
    $('#evenOut').text("= " + isEven(num));
};

//7. Palindrome

function isPalindrome(someStr) {
    //use reverseStr function defined earlier to check for palindrome
    let reversed = reverseStr(someStr);
    if (someStr == reversed) {
        return true;
    };
    return false;
};

function runPal() {
    //run isPalindrome function
    let someStr = $('#palindrome').val();
    $('#palOut').text("= " + isPalindrome(someStr));
};

//8. Shapes

function shapes(shape, height, character) {
    switch ((shape)) {
        case "square":
            //print string for each row
            for (i = 0; i < height; i++) {
                let printStr = "";
                for (j = 0; j < height; j++) {
                    printStr = printStr.concat(character);
                };
                $('#shapeOut').append("<li>" + printStr + "\n" + "</li>");
            };
            break;
        case "diamond":
            //print strings for each row
            //print top rows and middle row
            let counter = 1;
            let spaces = (height - 1) / 2;
            while (counter <= (height - 1) / 2 + 1) {
                let printStr = "";
                for (i = 0; i < spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                for (i = 0; i < height - (spaces * 2); i++) {
                    printStr = printStr.concat(character);
                };
                for (i = 0; i < spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                $('#shapeOut').append("<li>" + printStr + "\n" + "</li>");
                counter++;
                spaces--;
            };
            //print bottom rows
            counter = (height - 1) / 2 + 1;
            spaces = 1;
            while (counter < height) {
                let printStr = "";
                for (i = 0; i < spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                for (i = 0; i < height - (spaces * 2); i++) {
                    printStr = printStr.concat(character);
                };
                for (i = 0; i < spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                $('#shapeOut').append("<li>" + printStr + "\n" + "</li>");
                counter++;
                spaces++;
            };
            break;
        case "triangle":
            //print string for each row
            for (i = 0; i < height; i++) {
                let printStr = "";
                for (j = 0; j < height; j++) {
                    //more chars for bottom rows
                    if (j <= i) {
                        printStr = printStr.concat(character);
                    };
                };
                $('#shapeOut').append("<li>" + printStr + "\n" + "</li>");
            };
    };
};

function runShape() {
    //wipe previous output
    $('#shapeOut').text("");
    //check input fields
    let shape = $('#shape').val();
    let height = parseInt($('#height').val());
    let character = $('#character').val();
    if (shape != "triangle" && shape != "diamond" && shape != "square") {
        alert("Please specify an allowed shape.");
        return;
    }
    if (isEven(height) == true) {
        alert("Please specify an odd number for height.")
        return;
    }
    shapes(shape, height, character);
};