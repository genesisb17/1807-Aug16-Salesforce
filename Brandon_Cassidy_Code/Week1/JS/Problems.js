//1.
window.onload = function(e)
{
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib, true);
    console.log("stuff");
    $('#string').on('click',function(){
        let itemTxt = $('#string').val();
        
    })
    $('#bubbleSort').on('click',bubbleSortCaller);
    $('#runReverse').on('click',reverseStrCaller);
    $('#factorial').on('click',factorialCaller);
    $('#getSubStr').on('click',subStringCaller);
    $('#getEvenNum').on('click',isEvenCaller);
    $('#getPal').on('click',isPalindromeCaller);
    $('#getObject').on('click',traverseObjectCaller);
}
//Caller functions to avoid modifying functionality of methods
//parse the user input into a form the methods can be passed.
function bubbleSortCaller(){
    //parse
    let usrArray=$('#ARay').val().split(' ');//Assume user enters stuff correctly
    //good joke
    console.log('bubbl');
    //process

    $('#bubbleOut').html(bubblesort(usrArray).join(' '));
    //display
}
function reverseStrCaller(){
    let userString=$('#string');
    $('#stringout').html(reverseStr(userString));
}
function factorialCaller(){
    factorial(usrNumber);
}
function subStringCaller(){
    subString(usrString,usrLen,usrOffset);
}
function isEvenCaller(){
    isEven(usrNumber);
}
function isPalindromeCaller(){
    isPalindrome(usrString);
}
function traverseObjectCaller(){
    traverseObject(usrObject);
}

function fib (n){
    if(n==0)
    return 0;
    if (n==1)
    return 1;
    return fib(n-1) +fib(n-2);
}
function runFib(){
    let n = document.getElementById("fibN").value;
    document.getElementById("fibout").innerHTML=+fib(n);
    console.log("hi");
    
}

//2. bubble sort
function switcher(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
function bubblesort(ARay){
    var modified;
    do {
      modified = false;
      for(var i = 0; i < ARay.length; i++) {
        if(ARay[i] && ARay[i + 1] && ARay[i] > ARay[i + 1]) {
          switcher(ARay, i, i + 1);
          modified = true;
        }//if
      }//for
    } while(modified); //do while
    return ARay;
  }//bubblesort

//3. reverse string order

function reverseStr(someStr){
    reversedStr='';
    let i = someStr.length;
    while(i--){
        reversedStr=reversedStr.concat(someStr.charAt(i));
    }//while
    return reversedStr;
}//reverseStr

//4. Factorial

function factorial(someNum){
    if(someNum==0){
        return 1;
    }//if
    else{
        return someNum*Factorial(someNum-1);
    }//else
}//factorial

//5. Substring
function subString(someStr,length,offset){
    if(offset+length > someStr.length | offset<0 | offset>someStr.length | length>someStr.length){
    alert("Substring extends beyond bounds of string");
    return;
    }//if
    let subStr=''
    let pos=offset;
    for (let i=1; i<length;i++){
        subStr=subStr.concat(someStr.charAt(pos));
        pos++;
    }
    return subStr
}//subString
//6. isEven

function isEven(numb){
    if(numb & 1){
        return false;
    }//if
    else {
        return true;
    }//else
}//isEven

//7. Palindrome

function isPalindrome(someStr)
{
    if(reverseStr(someStr)==someStr)
    {
        return true;
    }//if
    else {
        return false;
}//else
}//isPalindrome

//8. Shapes
//TODO
// function Shapes(shape,height,character){
//     let str = '';
//     switch (shape){

//         case Square:

//             break;
//         case Triangle:

//             break;
//         case Diamond:

//             break;
//     }
//     for(let i=n; i>=1; i--){
//         for(let k=n; k>=i; k--){
//             str += "\t";
//         }//for
//         for(let j=i; j>=1; j--){
//             str += j+"\t\t";
//         }//for
//         console.log(str);
//         str = "";
//     }//outerFor
// }
//TODO
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//9. Object literal

function traverseObject(someObj){
    
    for( var property in someObj)
    {
        let propValue=someObj[property]
        console.log("Property: ",property, "Value: ",propValue);
    }//for
}
testObj={
    name:"Bob",
    Loc:"Florida"
}