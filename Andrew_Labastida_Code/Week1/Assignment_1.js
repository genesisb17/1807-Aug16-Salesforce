window.onload = function(e){
    //    alert('js works!');
        document.getElementById("runFib").addEventListener("click", runFib, true);
        document.getElementById("BubbBtn").addEventListener("click", runBubb, true);
        document.getElementById("ReverseBtn").addEventListener("click", runReverseStr, true);
        document.getElementById("FactorialBtn").addEventListener("click", runFactorial, true);
        document.getElementById("subStrBtn").addEventListener("click", runSubStr, true);
        document.getElementById("evenBtn").addEventListener("click", runisEven, true);
        document.getElementById("palindromeBtn").addEventListener("click", runPalindrome, true);
        document.getElementById("shapeBtn").addEventListener("click", runprintShape, true);
        document.getElementById("literalBtn").addEventListener("click", runtraverseObject, true);
        document.getElementById("deleteBtn").addEventListener("click", runDeleteElement, true);
        document.getElementById("spliceBtn").addEventListener("click", runSpliceElement, true);
        document.getElementById("constructBtn").addEventListener("click", runPerson, true);
        document.getElementById("obLiteralBtn").addEventListener("click", runGetPerson, true);
        document.getElementById("clockBtn").addEventListener("click", runClock, true);
        document.getElementById("descBtn").addEventListener("click", runDesc, true);
}

//--------------------Problem 1------------------------
function fib(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2);
}

function runFib(){
    let n = document.getElementById('fibN').value;
    console.log(fib(n));
    document.getElementById('fibOut').innerHTML = '= ' + fib(n);
}

//--------------------Problem 2------------------------
function bubbleSort(numArray){
    let input_length = numArray.length;
    for (i = 0; i <= input_length; i++){
        for(j = 1; j <=input_length; j++){
            if(numArray[j] < numArray[j-1]){
                let temp = numArray[j-1];
                numArray[j-1] = numArray[j];
                numArray[j] = temp;
            }
        }
    }
    return numArray;
}

function runBubb(){
    let n = document.getElementById('BubbInput').value;
    let str_split = n.split(" ");
    console.log(bubbleSort(str_split));
    document.getElementById('BubbOut').innerHTML = '= ' + bubbleSort(str_split);
}
//--------------------Problem 3------------------------
function reverseStr(someStr){
    let tempArray = someStr.split("");
    tempArray.reverse();
    someStr = tempArray.toString();
    someStr = someStr.replace(/,/g, "");
    return someStr;
}

function runReverseStr(){
    let n = document.getElementById('reverseStrInput').value;
    console.log(reverseStr(n));
    document.getElementById('reverseStrOut').innerHTML = '= ' + reverseStr(n);
}
//--------------------Problem 4------------------------
function factorial(somenum){
    if (somenum == 0){
        return 1;
    }
    return (somenum * factorial(somenum-1));
}

function runFactorial(){
    let n = document.getElementById('factorialInput').value;
    console.log(factorial(n));
    document.getElementById('factorialOut').innerHTML = '= ' + factorial(n);
}
//--------------------Problem 5------------------------
function substring(someStr, length, offset){
    if(typeof someStr != "string"){
        return alert(`Not a string! It is ${typeof someStr}!`);
    }
    /*if(typeof length != "number"){
        return alert(`Length input is not a number! It is ${typeof length}!`);
    }
    if(typeof offset != "number"){
        return alert(`Offset input is not a number! It is ${typeof offset}!`);
    }*/
    return someStr.substr(offset, length);
}

function runSubStr(){
    let input = document.getElementById('substringInput').value;
    let length = document.getElementById('substringLength').value;
    let offset = document.getElementById('substringOffset').value;
    console.log(substring(input, length, offset));
    document.getElementById('subStrOut').innerHTML = '= '+ substring(input,length, offset);
}
//WHAT EXACTLY IS WRONG INPUT? All of the boxes are read as a string!

//--------------------Problem 6------------------------
function isEven(someNum){
    let andTemp = someNum & 1;
    if(andTemp == 0){
        return console.log("It's even!");
    }
    return console.log("It's odd!");
}

function runisEven(){
    let n = document.getElementById('evenInput').value;
    console.log(isEven(n));
    document.getElementById('evenOut').innerHTML = '= ' + isEven(n);
}

//--------------------Problem 7------------------------
function isPalindrome(someStr){
    let tempstring = someStr;
    let tempArray = tempstring.split("");
    tempArray.reverse();
    tempstring = tempArray.toString();
    tempstring = tempstring.replace(/,/g, "");
    //let x = reverseStr(tempstring);
    if(someStr == tempstring){
        return true;
    }
    return false;
  //  return reverseStr(tempstring); ask genesis about this
}

function runPalindrome(){
    let n = document.getElementById('palindromeInput').value;
    console.log(isPalindrome(n));
    document.getElementById('palindromeOut').innerHTML = '= ' + isPalindrome(n);

}
//--------------------Problem 8------------------------
function diamondBase(width, character){
    let row = character; //just for readability. Functionally unneccessary
    for(let i= 0; i < width; i++){
        row = row.concat("", " ");  //This is to make
        row = row.replace(/^/, " ");//the first row. It'll always be the same.
    }
    return row;
}
function diamondRow(cycles, width, character){
    let row = diamondBase(width, character);
    for(let i=1; i<=cycles; i++){
        row = row.trim();
        row = row.concat("", character);
        row = row.replace(/^/, character);
    }
    let diff = width - cycles;
    if (diff > 0){
        row = row.concat("", " ");
        row = row.replace(/^/, ' ');
        diff--;
    }
    return row;
}
function printShape(shape, height, character){
     let text = character;
     let singleline = null;
     if(shape == "Square"){
        for(let i = 1; i <= height-1; i++){
            text = text.concat("",character); 
            singleline = text;
        }
        for(let i = 1; i <= height-1; i++){
            text = text.concat("","<br>");
            text = text.concat(" ",singleline); //might need to change this when displyed on html
          }
        return text;
    }
    else if(shape == "Triangle"){
        for(let i = 1; i <= height-1; i++){
            text = text.concat("","<br>");
            text = text.concat(""," "); //might need to change this for dom
            for(j = i; j >= 0; j--){
                text = text.concat("",character);     
            }
        }
        return text;
    }   
    else if(shape == "Diamond"){
        //let midrow = Math.ceil(height/2);
        let whitespace = Math.floor(height/2);//starting value for white space. will change
        text = diamondBase(whitespace, character);
        for(let i = 1; i <= whitespace; i++){
            temp = diamondRow(i, whitespace, character);
            text = text.concat("", "<br>");
            text = text.concat("", temp);
        }
        for(let i = whitespace-1; i >= 0; i--){
            temp = diamondRow(i, whitespace, character);
            text = text.concat("", " <br>");
            text = text.concat("", temp);
        }
        return text;
    }
}

function runprintShape(){
    let shape = document.getElementById('shapeInput').value;
    let height = document.getElementById('shapeHeight').value;
    let char = document.getElementById('shapeCharacter').value;
    console.log(printShape(shape, height, char));
    document.getElementById('shapeOut').innerHTML = printShape(shape, height, char);
}
//--------------------Problem 9------------------------
function traverseObject(someObj){
    let result = "";
    for(let property in someObj){
        result = result + someObj[property] + "\n";
    }
    return result;
}

function runtraverseObject(){
    let n = document.getElementById('literalInput').value;
    if(n == "litperson"){
        document.getElementById('literalOut').innerHTML = '= ' + traverseObject(litperson);
    }
    else if(n == "conperson"){
        document.getElementById('literalOut').innerHTML = '= ' + traverseObject(conperson);
    }
    else{
        return alert("Incorrect input!");
    }
}
//--------------------Problem 10-----------------------
function deleteElement(someArr){
    delete someArr[2];
}

function runDeleteElement(){
    let n = document.getElementById('deleteInput').value;
    let str_split = n.split(" ");
    deleteElement(str_split);
    document.getElementById('deleteOut').innerHTML = str_split;
}
//--------------------Problem 11-----------------------
function spliceElement(someArr){
    someArr.splice(2,1);
}
function runSpliceElement(){
    let n = document.getElementById('spliceInput').value;
    let str_split = n.split(" ");
    spliceElement(str_split);
    document.getElementById('spliceOut').innerHTML = str_split;

}
//--------------------Problem 12-----------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function runPerson(){
    let name = document.getElementById('constructName').value;
    let age = document.getElementById('constructAge').value;
    conperson = new Person(name, age);
    document.getElementById('constructOut').innerHTML = '= Type "conperson" in number 9 to verify';

}
//--------------------Problem 13-----------------------
function getperson(name, age){
    let person = {
        name:name,
        age:age
    }
    return person;
}
function runGetPerson(){
    let name = document.getElementById('obLiteralName').value;
    let age = document.getElementById('obLiteralAge').value;
    litperson = getperson(name, age);
    document.getElementById('obLiteralOut').innerHTML = '= Type "litperson" in number 9 to verify';
 }
//--------------------Problem 14-----------------------
function clock(){ 
    let time = new Date();
    s = time.getSeconds();
    m = time.getMinutes();
    h = time.getHours();
}

function runClock(){
    clock();
    document.getElementById('clockOut').innerHTML = h + " : " + m + " : " + s;
    setTimeout(runClock, 1000);
}
//--------------------Problem 15-----------------------
function descending(somenum){
    let text = somenum.toString();
    let somearr = text.split("");
    let bubb = bubbleSort(somearr);
    let finalarr = [];
    let bubb_len = bubb.length;
    for (let i = 0; i<=bubb_len; i++){
        finalarr.unshift(bubb.shift());
    }
    return finalarr;
}

function runDesc(){
    let n = document.getElementById('descInput').value;
    let str_split = n.split(" ");
    document.getElementById('descOut').innerHTML = '= ' + descending(str_split);
}