   /* 1. Fibonacci
   Define function: fib(n) 
   Return the nth number in the fibonacci sequence
   0 1 1 2 3 5 8 
   */
   function fib(n){
       if(n == 0) return 0;
       if(n == 1 ) return 1;
       return fib(n-1) + fib(n-2);
   }

   console.log(fib(8));

   /* 2. Bubble Sort
   Define function: bubbleSort(numArray)
   Use the bubble sort algorithm to sort the array.
   Return the sorted array.
    */
   function bubbleSort(numArray){
       for(var i = 0; i < numArray.length; i++) {
           for(var j = 1; j < numArray.length; j++) {
               if(numArray[j - 1] > numArray[j]) {
                   var temp = numArray[j - 1];                   
                   numArray[j- 1] = numArray[j];
                   numArray[j] = temp;               
                }
            }
        }
        return numArray;
    }

   console.log(bubbleSort([10, 7, 3, 4, 8, 3]));

    /* 3. Reverse String
    Define function: reverseStr(someStr)
    Reverse and return the String.
    */
   function reverseStr(someStr){
        someStr = someStr.split('').reverse().join('');
        return someStr;
    }

    console.log(reverseStr("aramat"));

    /* 4. Factorial
    Define function: factorial(someNum)
    Use recursion to compute and return the factorial of someNum.
    */
   function factorial(someNum){
       if(someNum == 0) return 1;
       return someNum * factorial(someNum - 1);
   }

   console.log(factorial(4));
  
    /* 5. Substring
   Define function substring(someStr, length, offset)
   Return the substring contained between offset and (offset + length) inclusively.
   If incorrect input is entered, use the alert function and describe why the input was incorrect.
   */
  function substring(someStr, length, offset){

  }
  
  console.log();

   /*
   6. Even Number
   Define function: isEven(someNum)
   Return true if even, false if odd.
   Do not use % operator.
   */
   function isEven(someNum){
       if (someNum & 1) return false;
       return true;
   }

   console.log(isEven(2));
   console.log(isEven(3));

   /*
   7. Palindrome
   Define function isPalindrome(someStr)
   Return true if someStr is a palindrome, otherwise return false
   */   
  function isPalindrome(someStr){
      someStr = someStr.replace(/[^a-zA-Z]+/g,"").toLowerCase();
      anotherStr = someStr.split('').reverse().join('');
      if(anotherStr == someStr) return true
      return false;
    }
   
    console.log(isPalindrome("Tamara"));
    console.log(isPalindrome("Racecar"));
    console.log(isPalindrome("Sore was I ere I saw Eros."));
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
    shape = shape.toLowerCase();
    switch(shape){
      case "triangle":
          for(i = 1; i <= height; i++) return(character.repeat(i));
          break;
      case "square":
          for(i = 1; i <= height; i++) return(character.repeat(height));
          break;
      case "diamond":
          var n = 1;
          var space = height-1/2;
          for(i = 1; i < height; i++){
              if(i <= (height - 1)/2){
                  return(" ".repeat(space) + character.repeat(n));
                  n += 2;
                  space--;
              }
              if(i >= (height - 1)/2){
                return(" ".repeat(space) + character.repeat(n));
                n -= 2;
                space++;
            }
          }
          break;
      default:
    }
}

    console.log(printShape("Square", 3, "%"));
    console.log(printShape("Triangle", 3, "$"));
    console.log(printShape("Diamond", 5, "*"));

    /*
   9. Object literal
   Define function traverseObject(someObj)
   Print every property and it's value.
   */


   /*
   10. Delete Element
   Define function deleteElement(someArr)
   Print length
   Delete the third element in the array.
   Print length
   The lengths should be the same.
   */
    function deleteElement(someArr){
        console.log(someArr.length);
        delete someArr[2];
        console.log(someArr.length);
        console.log(someArr);
    }

    deleteElement([1, 2, 3, 4, 5]);

   /*
   11. Splice Element
   Define function spliceElement(someArr)
   Print length
   Splice the third element in the array.
   Print length
   The lengths should be one less than the original length.
   */
  function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2, 1);
    console.log(someArr.length);
    console.log(someArr);
}

spliceElement([1, 2, 3, 4, 5]);

   /*
   12. Defining an object using a constructor
   Define a function Person(name, age)
   The following line should set a Person object to the variable john:
       var john = new Person("John", 30);
   */

   /*
   13. Defining an object using an object literal
   Define function getPerson(name, age)
   The following line should set a Person object to the variable john:
       var john = getPerson("John", 30);
   */

   /*
   14. Display the current time on the top right of your HTML page, 
   updating every second
   */

   /*
   15.  Descending order
   Your task is to make a function that can take any non-negative 
   integer as a argument and return it with its digits in descending 
   order. Essentially, rearrange the digits to create the highest possible number.
    */