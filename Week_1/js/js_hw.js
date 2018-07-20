//1. Fibonacci

function fib(n) {
    //recursively call Fibonacci series
    if (n==0) return 0;
    if (n==1) return 1;
    return fib(n-1) + fib(n-2);
};

//2. Bubble Sort

function bubbleSort(someArray) {
    let n = someArray.length;
    let sorted = false;
    //sort if not sorted
    while (sorted == false) {
        for (i=1; i<n; i++) {
            //assume the array is sorted
            sorted = true;
            //if unsorted elements detected, repeat sort
            if (someArray[i] < someArray[i-1]) {
                let a = someArray[i];
                someArray[i] = someArray[i-1];
                someArray[i-1] = a;
                sorted = false;
            }
        }
    }
    return someArray;
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

//4. Factorial

function factorial(num) {
    //recursively multiply the input number by decreasing factorials
    if (num == 1) {
        return 1;
    };
    return num*factorial(num-1);
};

//5. Substring

function subString(someStr, length, offset) {
    //check for impossible inputs
    if (length+offset>someStr.length | offset<0 | offset>someStr.length | length>someStr.length) {
        alert("Desired substring length not possible for input string.");
        return;
    };
    let newStr = "";
    for (i=offset-1; i<length; i++) {
        newStr = newStr.concat(someStr.charAt(i));
    };
    return newStr;
};

//6. Even Number

function isEven(num) {
    //use built in isInteger() function to detect 0.5 results
    if (Number.isInteger(num/2) == true) {
        return true;
    }
    else {
        return false;
    };
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

//8. Shapes

function shapes(shape, height, character) {
    switch ((shape)) {
        case "square":
            //print string for each row
            for (i=0; i<height; i++) {
                let printStr = "";
                for(j=0; j<height; j++) {
                    printStr = printStr.concat(character);
                };
                console.log(printStr);
            };
            break;
        case "diamond":
            //print strings for each row
            //print top rows and middle row
            let counter = 1;
            let spaces = (height-1)/2;
            while (counter <= (height-1)/2 + 1) {
                let printStr = "";
                for(i=0; i<spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                for (i=0; i<height-(spaces*2); i++) {
                    printStr = printStr.concat(character);
                };
                for(i=0; i<spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                console.log(printStr);
                counter++;
                spaces--;
            };
            //print bottom rows
            counter = (height-1)/2 + 1;
            spaces = 1;
            while (counter < height) {
                let printStr = "";
                for(i=0; i<spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                for (i=0; i<height-(spaces*2); i++) {
                    printStr = printStr.concat(character);
                };
                for(i=0; i<spaces; i++) {
                    printStr = printStr.concat(" ");
                };
                console.log(printStr);
                counter++;
                spaces++;
            };
            break;
        case "triangle":
            //print string for each row
            for (i=0; i<height; i++) {
                let printStr = "";
                for (j=0; j<height; j++) {
                    //more chars for bottom rows
                    if (j <= i) {
                        printStr = printStr.concat(character);
                    };
                };
                console.log(printStr);
            };
    };
};