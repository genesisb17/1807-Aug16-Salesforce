//1.
window.onload = function(e)
{
    //alert('js works!');
    document.getElementById("runFib").addEventListener("click",runFib, true);
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
    let userString=$('#string').val();
    $('#stringout').html(reverseStr(userString));
}
function factorialCaller(){
    let userNum=$('#facNum').val();
    console.log(userNum);
    console.log(factorial(userNum))
    $('#facNumOut').html(factorial(userNum));
}
function subStringCaller(){
    //Substring figure out parsing 3 args from single input? or just make 3 inputs...
    let usrString=$('#subString').val();
    let usrLen=$('#subLen').val();
    let usrOffset=$('#subOff').val();
    // console.log(usrString);
    // console.log(usrLen);
    // console.log(usrOffset);
    // console.log('offset length sum' + +usrLen + +usrOffset);
    // console.log(usrString.length);
    $('#subStringOut').html(subString(usrString,usrLen,usrOffset));

}
function isEvenCaller(){
    let usrNumber=$('#evenNum').val();
    // console.log(usrNumber);
    // console.log(isEven(usrNumber));
    let result = '';
    if(isEven(usrNumber)){ result = 'true';}
    else{ result = 'false';}
    $('#evenOrOdd').html(result);

}
function isPalindromeCaller(){
    let usrString=$('#palStr').val();
    let result = '';
    if(isPalindrome(usrString)){ result = 'true';}
    else{ result = 'false';}
    $('#palStrResult').html(result);
    isPalindrome(usrString);
}
function traverseObjectCaller(){
    let objIn=$('#object').val();
    console.log(JSON.parse(objIn));
    let sampleObj = JSON.parse(objIn);
    $('#objectLiteralOut').html(traverseObject(sampleObj));
}



//-------------------------------------------------------------
//Function implementation below, display and interface to implementation above
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
        return someNum*factorial(someNum-1);
    }//else
}//factorial

//5. Substring
function subString(someStr,length,offset){
    if( +offset + +length > someStr.length | offset<0 | offset>someStr.length | length>someStr.length){
    alert("Substring extends beyond bounds of string");
    return;
    }//if
    let subStr=''
    let pos=offset;
    for (let i=1; i<=length;i++){
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
/*
loop logic to build the appropriate strings, again to make elements of them? 
just build elements directly and don't worry about the strings?
:thinking:
*/
// }
//TODO
//switch syntax ref
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


//9. Object literal
function traverseObject(someObj){
    let results= '';
    for( var property in someObj)
    {
        let propValue=someObj[property]
        results = results + "Property:  " + property + "  Value:  " + propValue +"<br>";
        console.log("Property: ",property, "Value: ",propValue);
    }//for
    return results;
}
testObj={
    name:"Bob",
    Loc:"Florida"
}