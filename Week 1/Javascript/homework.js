//Homework set
//Matthew Smart

/*
1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
*/
function fib(n)  {
    if(n==0){return 0};
    if(n==1){return 1};
    return ans(n-1) + ans(n-2);
}

/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/
function bubbleSort(numArray) {
    var isSorted = false;
    var iterations = 1;
    while(isSorted == false) {
        isSorted = true;
        for(i=0; i < numArray.length - iterations; i++) {
            if(numArray[i] > numArray[i+1]){
                let temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                isSorted = false;
            }
            iterations++;
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
    var reverse = [];
    for(i=0; i < someStr.length; i++) {
        reverse.push(someStr.charAt(someStr.length - i));
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
        return someNum * factorial(someNum);
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