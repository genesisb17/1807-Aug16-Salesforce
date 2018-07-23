/*
Javascript Homework
Due Monday 7/23 -- to be pushed by 9AM in your branch

-----------------------------------------------------------------------------------
Create a single Javascript file to answer at least 8 of these questions.
(Can include #1, though we've completed it together in class)
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------
*/

window.onload = function(e) {
    // 1. Fibonacci
    document.getElementById("runFib").addEventListener("click", runFib, true);

    // 2. Bubble Sort
    document.getElementById("runBubbleSort").addEventListener("click", runBubbleSort, true);
    document.getElementById("addToArray").addEventListener("click", addToArray, true);

    // 3. Reverse String
    $('#runReverse').on('click', () => {
        let stringToReverse = $('#reverse').val();
        $('#reverseString').text(reverseStr(stringToReverse));
    });

    // 4. Factorial
    $('#runFactorial').on('click', () => {
        let factorialNumber = parseInt($('#factorial').val());
        $('#factorialAnswer').text(factorial(factorialNumber));
    });

    // 6. isEven
    $('#runTest').on('click', () => {
        let n = parseInt($('#testNumber').val());
        if(n == undefined || isNaN(n)){
            $('#testAnswer').text("Number Invalid");
        }
        else{
            $('#testAnswer').text(isEven(n));
        }
    });

    // 7. Palindrome
    $('#runPalindrome').on('click', () => {
        let str = $('#potentialPalindrome').val();
        $('#palindromeAnswer').text(isPalindrome(str));
    });

    // 10. Delete Element
    $('#runDelete').on('click', () => {
        let elementString = $('#delete').val();
        let elementList = elementString.split(',');
        $('#originalList').text(elementList);
        if(elementList.length < 3){
            $('#newList').text("List is too short :(");    
        }
        else
            $('#newList').text(deleteElement(elementList));
    });

    // 15. Descending Order
    $('#runDescend').on('click', () => {
        let n = parseInt($('#numberInput').val());
        if(n == undefined || isNaN(n)){
            $('#numberOutput').text("Number Invalid");
        }
        else{
            $('#numberOutput').text(descendingOrder(n));
        }
    });

   


}



/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
*/

function fib(n){
    if(n == 0) return 0;
    if(n == 1 ) return 1;
    return fib(n-1) + fib(n-2);
}

function runFib(){
    let n = document.getElementById('fibN').value;
    let x = fib(n);
    document.getElementById('fibOut').innerHTML = x;
}

/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/
function bubbleSort(numArray){
    var i = 0, j = 0;
    for(;i < numArray.length; i++){
        for(j = i + 1; j < numArray.length; j++){
            if(numArray[i] > numArray[j]){
                temp = numArray[i];
                numArray[i] = numArray[j];
                numArray[j] = temp;
                   
            }
        }
    }
    return numArray;
}

numArray = [];

function addToArray() {
    numArray.push(document.getElementById('newNumber').value);
}

function runBubbleSort(){
    let x = bubbleSort(numArray);
    document.getElementById('sortedNumbers').innerHTML = x.toString();
}


/*
3. Reverse String
Define function: reverseStr(someStr)
+Reverse and return the String.
*/

function reverseStr(someStr){
    
    var stringArray = someStr.split(''); 
    var answerArray = []; 
    var lastElement = stringArray.length - 1; 

    
    for(let i = lastElement; i>=0; i--) {
        answerArray[lastElement - i] = stringArray[i]; 
    }
    return answerArray.join('');
}

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/
function factorial(someNum) {
    if(someNum < 0 || someNum == undefined || isNaN(someNum)) {
        return -1;
    }
    if(someNum == 1 || someNum == 0){
        return 1;
    }
    return factorial(someNum - 1) * someNum;
}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/

function isEven(numberToTest) {
    return (numberToTest & 1) == 0;
}

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/

function isPalindrome(someStr){
    var palAnswer = true;
    var lastCharacter = someStr.length - 1; 
    for(let i = 0; i<=Math.floor(someStr.length / 2); i++){
        palAnswer = palAnswer && (someStr[i] == someStr[lastCharacter - i]);
    }
    return palAnswer;
}

/*
10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.
*/
//need to test
function deleteElement(someArr){
    someArr[2]=someArr[1];
    someArr[1]=someArr[0];
    someArr.shift();

    return someArr;
}

/*
15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.
*/
function descendingOrder(someNum){

    return parseInt(String(someNum).split('').sort().reverse().join(''));
    
}