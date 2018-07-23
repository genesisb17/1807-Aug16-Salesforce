// Javascript Homework
// Due Monday 7/23 -- to be pushed by 9AM in your branch

// -----------------------------------------------------------------------------------
// Create a single Javascript file to answer at least 8 of these questions.
// (Can include #1, though we've completed it together in class)
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
window.onload = option;



function setToolTip(){
    $('#1').parent().attr('title', "Enter n in the input box to calculate Fib(n).");
    $('#2').parent().attr('title', "Enter an array in separated by comma (,) to sort the array using bubble sorting method.");
    $('#3').parent().attr('title', "Enter a string to get the reversed of it.");
    $('#4').parent().attr('title', "Enter n in the input box to calculate Factorial(n).");
    $('#5').parent().attr('title', "Enter a string and an offset separated by (,) and get the substring contained between offset + length, inclusively in return.");
    $('#6').parent().attr('title', "Enter a number to check if its odd or even.");
    $('#7').parent().attr('title', "Enter a string to see if it's a palindrome.");
    $('#8').parent().attr('title', "Draw one out of three shapes, from square, triangle, diamond. Enter the name of the shape, size in int and the character, separated by (,).");
    $('#9').parent().attr('title', "This function will print out an object, every property and their values. [No input needed]");
    $('#10').parent().attr('title', "This function will delete 3rd element of an array and print it. [No input needed]");
    $('#11').parent().attr('title', "This function will splice 3rd element of an array and print it. [No input needed]");
    $('#12').parent().attr('title', "Define Object using constructor.");
    $('#13').parent().attr('title', "Define Object using an object literal.");
    $('#14').parent().attr('title', "Display Current time.[Already shown]");
    $('#15').parent().attr('title', "This function will rearrange digits of a given number to form the biggest number with those digits.");
    
    $(":radio").parent().tooltip();

}


function option(){
    $(document).ready(setToolTip());
    $(document).ready(clock());
    let rad = document.getElementsByName("myRad");
    for (var i = 0; i < rad.length; i++) {
        rad[i].addEventListener('click', function() {
            console.log(typeof(this.id));
            switch(parseInt(this.id)){
                case 1: $('#submit').on('click', fib);
                break;
                case 2: $('#submit').on('click', bubbleSort);
                break;
                case 3: $('#submit').on('click', reverseStr);
                break;
                case 4: $('#submit').on('click', ShowFactorial);
                break;
                case 5: $('#submit').on('click', returnSubstring);
                break;
                case 6: $('#submit').on('click', calEvenOdd);
                break;
                case 7: $('#submit').on('click', palindrome);
                break;
                case 8: $('#submit').on('click', shapes);
                break;
                case 9: $('#submit').on('click', objectLiteral());
                break;
                case 10: $('#submit').on('click', delEmlt());
                break;
                case 11: $('#submit').on('click', spEl());
                break;
                case 12: $('#submit').on('click', objCon);
                break;
                case 13: $('#submit').on('click', objLit);
                break;
                case 15: $('#submit').on('click', largestNum);
                break;
                default: console.log("Switch Default ran.")
                
            }

        }, false);
    }
}


//==========================================================================

// 1. Fibonacci 
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(){
    let n = $('#iBox').val();
    console.log("Fib() ran with n= "+ n);
    let nth = 0;
    if (n==0) nth = 1;
	if (n==1) nth = 1;
    else {
        let first = 1;
        let second = 1;
		for (let x = 2; x <=n; x++){
			nth = first + second;
			first = second;
			second = nth;
        }
    }
    $('#answer').text(" = " + nth);
}
	
// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
 
function bubbleSort()
{
    let arr = ($('#iBox').val()).split(",").map(Number);;
    var sorted;
    do {
        sorted = true;
        for (var i=0; i < arr.length-1; i++) {
            if (arr[i] > arr[i+1]) {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                sorted = false;
            }
        }
    } while (!sorted);
    $('#answer').text(" Sorted Array: [" + arr + " ]");
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(){
    let str = $('#iBox').val()
    let revStr = "";
    for (i in str){
        revStr = revStr + (str[(str.length-1)-i])
    }
    $('#answer').text(' Reversed String: "' + revStr + '"' );
}
// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

function ShowFactorial(){
    let n = $('#iBox').val();
    function fact(n){
        if (n==0) return 1;
        else {
            return (n* fact(n-1));
        }

    }
    $('#answer').text(' Factorial of ' + n + " : " + fact(n) );
}

// 5. Substring (str[offset]...str[offset+length])
// Define function substring(someStr, length, offset) 
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function returnSubstring(){
    let input = $('#iBox').val();
    input = input.split(',');
    let str = input[0];
    let offset = input[1];
    if (offset>str.length) alert("Offset value has to be less than length.")
    let length = str.length;
    function substring(str, length, offset){
        return str.substring(offset-1, length);
    } 
    $('#answer').text(' New Substring is: ' + substring(str, length, offset));
}
// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function calEvenOdd(){
    let n = $('#iBox').val();
    function isEven(n){
        return (n%2==0) ? true: false;
    }
    $('#answer').text(' isEven( ' + n + ') : ' + isEven(n));
}
// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function palindrome(){
    let str = $('#iBox').val();
    function isPalindrome(str){
        let rev = ((str.split("")).reverse()).join(""); //1.Creating array from str suing split() 2. reversing the array using .reverse() 3. Joining the reversed array into a string using .join()
        return (str == rev);
        
    } 
    $('#answer').text("Above string is a palindrome - " + isPalindrome(str));
}
// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

function shapes(){
    $('#submit').prop("onclick", null);
    let str = $('#iBox').val().split(",");
    let shape = str[0];
    let height = str[1];
    let character = str[2];
    function printShape(shape,height,character){
        let canvas = "";
        if (shape.toUpperCase()=="SQUARE"){
            for (let x = 0; x< height; x++)
                canvas = canvas + character.repeat(height) + "\n";
        }
        else if (shape.toUpperCase()=="TRIANGLE")
            for (let x = 1; x <= height; x++)
                canvas = canvas + character.repeat(x) + "\n";
        else if(shape.toUpperCase()=="DIAMOND"){
            canvas = ""
            n = height/2;
            space = n - 1;
            
            for (k = 1; k<=n; k++)
            {
                for (c = 1; c<=space; c++)
                    canvas = canvas + " ";

                space--;

                for (c = 1; c<= 2*k-1; c++)
                    canvas = canvas + character;

                canvas = canvas + "\n";
            }

            space = 1;
            
            for (k = 1; k<= n - 1; k++)
            {
                for (c = 1; c<= space; c++)
                    canvas = canvas + " ";

                space++;

                for (c = 1 ; c<= 2*(n-k)-1; c++)
                    canvas = canvas + character;

                canvas = canvas + "\n";
            }
        }
        return canvas;
    }
    //$('#answer').text(printShape(shape,height,character)); 
    alert(printShape(shape,height,character));
}


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

function objectLiteral(){
    $('#submit').prop("onclick", null);
    let sampleUser = {     // an object
        fname: "John",  
        lname: "Doe",
        age: 30,
        city: "New York",
        zip: "11208"
      };
    let str = $('#iBox').val();
    let output = "";
    function traverseObject(obj){
        for (let prop in obj)
            output = output + prop + ": " + obj[prop] + "\n";
        return output;
    }
    alert(traverseObject(sampleUser)); 
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

function delEmlt(){
    $('#submit').prop("onclick", null);
    let sampleArray = [6,9,3,7,2,44,0,6];
    function deleteElement(arr){
        let output = "Sample Array: " + arr + "\n";
        output = output + "Length before deletion: " + arr.length + "\n";
        delete arr[3];
        output = output + "Sample Array: " + arr + "\n";
        output = output + "Length after deletion: " + arr.length + "\n";
        return output;
    }
    alert(deleteElement(sampleArray));
}



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spEl(){
    $('#submit').prop("onclick", null);
    let sampleArray = ["apple", "orange", "peach", "pears", "banana"];
    let output = "Array before splicing: [ " + sampleArray + " ]\n";
    function spliceElement(arr){
        arr.splice(3,1);
        output = output + "Array after splicing: [ " + arr + " ]\n";
        return output;
    }
    alert(spliceElement(sampleArray));

}


//  constructor function
// function Website() {};

// literal notation
// var Website = {};

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function objCon(){
    //$('#submit').on("onclick", null);
    function Person(name,age){
        this.name = name;
        this.age = age;
    }
    let carl = new Person("Carl", 29);

    $('#answer').text("Obj 'Carl' created with using constructor [ var carl = new Person('Carl', 29);]. \n JSON string of that object is -> " + JSON.stringify(carl));

    console.log(john);
    //alert("Check console.");
}


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function  objLit(){
    //$('#submit').prop("onclick", null);
    function getPerson(name,age){
        this.name = name;
        this.age = age;
        return this;
    }
    let john = getPerson("John", 30);
    $('#answer').text("Obj 'John' created with using object literal [ var john = getPerson('John', 30);]. \n ->" + 'name :' + john.name + ' age: ' + john.age);

    console.log(john);
    //alert("Check console.");

}

// 14. Display the current time on the top right of your HTML page, 
// updating every second
function clock(){
    let dt = new Date()
    $('#clock').text(dt.toLocaleTimeString());
    setTimeout(clock, 500);
}
// 15.  Descending order
// Your task is to make a function that can take any non-negative 
// integer as a argument and return it with its digits in descending 
// order. Essentially, rearrange the digits to create the highest possible number.
//------> We can solve this by creating an int[] from each digit and sorting them from large to small.
//------> A quicker method is to use String.sort() and than String.reverse() method. Steps are following
//------> String('897') > String[8','9','7'] > string.sort() - ['7','8','9'] > string.reverse() - ['9','8','7'] 

 function largestNum(){
    let largestNum = $('#iBox').val().split("").sort().reverse().join("");
    //String('897') > String[8','9','7'] > string.sort() - ['7','8','9'] > string.reverse() - ['9','8','7'] > str.join() - [987]
    $('#answer').text("Largest number after rearranging the digits: " + largestNum);
}
