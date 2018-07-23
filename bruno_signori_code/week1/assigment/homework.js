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

function printShape(shape, height, character){
    switch (shape) {
        case 'diamond':
        var limit = 5;
        var space = limit;
        for (i = 1; i <= limit; i++) {
            for (j = 1; j <= space; j++) {
                document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
            }
            space--;
            for (j = 1; j <= 2 * i - 1; j++) {
                document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '*');
            }
            document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '<br>');
        }
        space = 2;
        for (i = 1; i <= limit; i++) {
            for (j = 1; j <= space; j++) {
                document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
            }
            space++;
            for (j = 1; j <= 2 * (limit - i) - 1; j++) {
                document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '*');
            }
            document.getElementById("answer_shape").insertAdjacentHTML('beforeend', '<br>');
        }
            break;
        case 'triangle':
        var str = character;
        var string = '';
        for(var i = 1; i <= height; i++){
            string += character;
            document.getElementById(`answer_shape${i}`).innerHTML = string;
        }
            break;
        case 'square':
        var str = '';
        for(var i = 0; i < height; i++){
            str += character+character+character+'\n'
        }
        return (str);
            break;
        default: console.log("wrong entry");
            break;
    }
}
printShape("square",3,"%");


/*
11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.
*/
var arr = [3,6,7,8,9,4];

function spliceElement(arr){
    console.log(arr.length);
    arr.splice(2,1);
    console.log(arr.length);
}

spliceElement(arr);

/*
12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);
*/

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
var john = new Person("John", 30);
