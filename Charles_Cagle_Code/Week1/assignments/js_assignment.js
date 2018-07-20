//Javascript Homework
//Due Monday 7/23 -- to be pushed by 9AM in your branch
//-----------------------------------------------------------------------------------
//Create a single Javascript file to answer at least 8 of these questions.
//(Can include #1, though we've completed it together in class)
//Please put the question itself as a comment above each answer.
//-----------------------------------------------------------------------------------
//

//1. Fibonacci 
//Define function: fib(n) 
//Return the nth number in the fibonacci sequence.
function fib(n) {
  const rt5 = Math.sqrt(5);
  const phi = (1 + rt5) / 2;
  return Math.round((phi ** n) / rt5);
}
const fibHTML = (s) => fib(Number(s));

//2. Bubble Sort
//Define function: bubbleSort(numArray)
//Use the bubble sort algorithm to sort the array.
//Return the sorted array.
function bubbleSort(numArray) {
  for (let i = 0; i < numArray.length; ++i)
    for (let j = 0; j < numArray.length - 1; ++j)
      if (numArray[j] > numArray[j+1])
        numArray.splice(j, 2, numArray[j+1], numArray[j]);
  return numArray;
}
const bubbleSortHTML = (s) => bubbleSort(s.split(' ').map(Number)).join(' ');

//3. Reverse String
//Define function: reverseStr(someStr)
//Reverse and return the String.
function reverseStr(someStr) {
  return someStr.split('').reverse().join('');
}

//4. Factorial
//Define function: factorial(someNum)
//Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
  return someNum <= 1 ? 1 : someNum * factorial(someNum - 1);
}
const factorialHTML = (s) => factorial(Number(s));

//5. Substring
//Define function substring(someStr, length, offset)
//Return the substring contained between offset and (offset + length) inclusively.
//If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
  if (offset < 0 || offset > someStr.length)
    alert(`invalid offset: ${offset} for string: ${someStr}`);
  else if (length < 0 || offset + length > someStr.length)
    alert(`invalid length: ${length} for string: ${someStr} and offset: ${offset}`);
  else
    return someStr.slice(offset, offset + length);
}

//6. Even Number
//Define function: isEven(someNum)
//Return true if even, false if odd.
//Do not use % operator.
function isEven(someNum) {
  return !(someNum & 1);
}
const isEvenHTML = (s) => String(isEven(Number(s)));

//7. Palindrome
//Define function isPalindrome(someStr)
//Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
  return someStr == reverseStr(someStr);
}
const isPalindromeHTML = (s) => String(isPalindrome(s));

//8. Shapes
//Define function: printShape(shape, height, character)
//shape is a String and is either "Square", "Triangle", "Diamond".
//height is a Number and is the height of the shape. Assume the number is odd.
//character is a String that represents the contents of the shape. Assume this String contains just one character.
//Use a switch statement to determine which shape was passed in.
//Use the console.log function to print the desired shape.
//Example for printShape("Square", 3, "%");
//%%%
//%%%
//%%%
//Example for printShape("Triangle", 3, "$");
//$
//$$
//$$$
//Example for printShape("Diamond", 5, "*");
//  *
// ***
//*****
// ***
//  *
function printShape(shape, height, character) {
  let outStr = '';
  const putLine = (len, char, pad) => outStr += ' '.repeat(pad || 0) + char.repeat(len) + '\n';
  switch (shape) {
    case "Square":
      for (let i = 0; i < height; ++i)
        putLine(height, character);
      break;
    case "Triangle":
      for (let i = 0; i < height; ++i)
        putLine(i + 1, character);
      break;
    case "Diamond":
      for (let i = 0; i < height; ++i) {
        const offset = Math.abs(Math.floor(height / 2) - i);
        putLine(height - offset - offset, character, offset);
      }
      break;
  }
  return outStr;
}

function printShapeHTML(s) {
  let args = s.split(' ');
  return `<pre>${printShape(args[0], args[1], args[2])}</pre>`;
}

//9. Object literal
//Define function traverseObject(someObj)
//Print every property and it's value.
function traverseObject(someObj) {
  for (const prop in someObj) {
    console.log(`${prop} => ${JSON.stringify(someObj[prop])},`);
  }
}

//10. Delete Element
//Define function deleteElement(someArr)
//Print length
//Delete the third element in the array.
//Print length
//The lengths should be the same.
function deleteElement(someArr) {
  console.log(someArr.length);
  delete someArr[2];
  console.log(someArr.length);
}

//11. Splice Element
//Define function spliceElement(someArr)
//Print length
//Splice the third element in the array.
//Print length
//The lengths should be one less than the original length.
function spliceElement(someArr) {
  console.log(someArr.length);
  someArr.splice(2, 1);
  console.log(someArr.length);
}

//12. Defining an object using a constructor
//Define a function Person(name, age)
//The following line should set a Person object to the variable john:
//var john = new Person("John", 30);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//13. Defining an object using an object literal
//Define function getPerson(name, age)
//The following line should set a Person object to the variable john:
//var john = getPerson("John", 30);
function getPerson(name, age) {
  return {
    name: name,
    age: age
  };
}

//14. Display the current time on the top right of your HTML page, 
//updating every second
// See js_assignment_clock.js

//15.  Descending order
//Your task is to make a function that can take any non-negative 
//integer as a argument and return it with its digits in descending 
//order. Essentially, rearrange the digits to create the highest possible number.
function descendingDigits(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}
