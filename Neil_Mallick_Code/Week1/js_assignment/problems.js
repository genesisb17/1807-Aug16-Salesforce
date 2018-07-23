window.onload = function(e){
startTime();
document.getElementById('runFib').addEventListener("click", runFib, true);
document.getElementById('reverseString').addEventListener("click", runreverseStr, true);
document.getElementById('pal').addEventListener("click", runPalindrome, true);
document.getElementById('desc').addEventListener("click", runDescending, true);
$('#eve').on('click', runEven);
document.getElementById('sub').addEventListener("click", runSubString, true);
document.getElementById('runFact').addEventListener("click", runFactorial, true);



//document.getElementById('Update').addEventListener("click", updateList, true);
}


//1. Fibonacci
//Define function: fib(n)
//Return the nth number in the Fibonacci sequence

//0 1 1 2 3 5 8

function fib(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fib(n-1) + fib(n-2);
}

function runFib(){
    let n = document.getElementById('fibN').value;
 //   console.log(fib(n));
 document.getElementById('fibOut').innerHTML = '=' + fib(n);
}


//3. Reverse String

function reverseStr(someStr){
    var revStr = '';
    for(j = someStr.length - 1 ; j >= 0; j--){
        
        revStr = revStr + someStr[j];
    }
    console.log(revStr);
    return revStr;

    
 }

 function runreverseStr(){
     let string = document.getElementById('rString').value;
     document.getElementById('stringOut').innerHTML = reverseStr(string);
 }






//7. Palindrone
 function isPalindrome(someStr){
    var revStr = '';
    for(j = someStr.length - 1 ; j >= 0; j--){
        
        revStr = revStr + someStr[j];
    }
    console.log(revStr);
    if(revStr == someStr){
        return true;
    }
    else{
        return false;
    }

 }

 function runPalindrome(){
    let string = document.getElementById('palindrome').value;
    document.getElementById('palindromeOut').innerHTML = isPalindrome(string);
}

 
//14. Display the current time on the top right of your HTML page, 
//updating every second

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


//13. Defining an object using an object literal

/*Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);*/
    
function getPerson(name, age){
    
   return Person = {
       name: name,
       age: age
    };
   
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

//15.  Descending order

function descending(number){

    var descending = '';
    number = number.toString().split('').sort();

    for (let i in number)
    {
        descending = descending + number[i];
    }

    descending = reverseStr(descending);

    return parseInt(descending);

}

function runDescending(){
    let number = document.getElementById('descending').value;
    document.getElementById('descendingOut').innerHTML = descending(number);
}



/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

function deleteElement(someArr){
    console.log(someArr.length);
    
    delete someArr[2];

    console.log(someArr.length);
}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum){
    return !(someNum & 1);
}

function runEven(){
    let number = document.getElementById('even').value;
    document.getElementById('evenOut').innerHTML = isEven(number);
}

function substring(someStr, length, offset){
    returnStr = '';
    console.log(someStr + length + offset);
    if((offset > someStr.length - 1) || (offset+length > someStr.length - 1)){
        alert("Substring is out of bounds of string!");
        return;
    }
    for (let i = offset; i < offset+length; i++){
        returnStr = returnStr + someStr[i];
        
    }

    return returnStr;
    
}

function runSubString(){
    var str = document.getElementById('sstring').value;
    console.log("String: " + str);
   
    var len = document.getElementById('lengthy').value;
    console.log("Length " + len);

    var off = document.getElementById('offsety').value;
    console.log("Offset is " + off);

    document.getElementById('strOut').innerHTML = substring(str, len, off);

    

}

/*4. Factorial */ 

function factorial(someNum){
    if(someNum == 0) {
        return 1
    } 
    else {
        return someNum * factorial(someNum - 1);
    }
}

function runFactorial(){
    let n = document.getElementById('fact').value;
     document.getElementById('factOut').innerHTML = '=' + factorial(n);
}