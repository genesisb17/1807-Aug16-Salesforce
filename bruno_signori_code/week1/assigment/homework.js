/*
2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.
*/

var numArray = [5,7,9,6,3] 

function bubbleSort(numArray){
    do {
        var swapp = false;
        for(var i = 0; i < numArray.length -1; i++){
            if(numArray[i] > numArray[i + 1]){
                temp = numArray[i];
                numArray[i] = numArray[i + 1];
                numArray[i + 1] = temp;
                swapp = true;
            } 
        }
    } while( swapp === true )
    return numArray;
}

bubbleSort(numArray);

/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/

var str = "bike";
var newStr = "";
function reverseStr(str){
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}
reverseStr(str);

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/

var num = 5;
function factorial(num){
    if(num === 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
factorial(num);

/*
5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.
*/

var str = "hello world";

function substring(str,length, offset){
    if(length < 1){
        alert("Length cannot be less than 1");
        return str;
    }
    var num = offset + length
    str = str.slice(offset,num);
    return str;
}

substring(str,5,0);

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/

function isEven(num){
    var number = Math.floor(num /2);
   if( number * 2 == num){
       return true;
   } else {
       return false;
   }

}
isEven(11);

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/
var someStr = "madam";

function isPalindrome(someStr){
    var newStr = Math.floor(someStr.length / 2);
    var count = 0;
    
    for(var i = 0; i < newStr; i++){
        if(someStr[i] === someStr[someStr.length - 1 - i]){
            count++;
        } 
    }
    if(count == newStr){
        return true;
    } else {
        return false;
    }
}
isPalindrome(someStr);  