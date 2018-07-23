window.onload = function(e){
    //alert('js works!');
    document.getElementById('runFib').addEventListener('click', runFib, true);
    document.getElementById('runBub').addEventListener('click', runBubble, true);
    document.getElementById('runSort').addEventListener('click', getBubbleSort, true);
    document.getElementById('runString').addEventListener('click', runReverse, true);
    document.getElementById('runFactorial').addEventListener('click', runFactorial, true);
    document.getElementById('runSubstring').addEventListener('click', runSubstring, true);
    document.getElementById('new_substring').addEventListener('click', pre_substring, true);
    document.getElementById('runEven').addEventListener('click', runEven, true);
    document.getElementById('runPalindrome').addEventListener('click', runPalindrome, true);
    document.getElementById('runSplice').addEventListener('click', runSplice, true);
    document.getElementById('print').addEventListener('click', runPrint, true);
    document.getElementById('splice_arr').addEventListener('click', run_splice_2, true);
    document.getElementById('runShape').addEventListener('click', runShape, true);
    document.getElementById('runConstructor').addEventListener('click', construct, true);
}
//1. fibonacci 
// recursive fibonacci 
function fib(n){
    if(n == 0) return 0;
    if(n == 1) return 1;
    return fib(n-1) + fib(n-2); 
}

function runFib(){
    let n = document.getElementById('fibN').value;
    console.log(fib(n));
    document.getElementById('answer').innerHTML = fib(n);
}

//2. Bubble Sort

function BubbleSort(arr){
    do {
        var swapp = false;
        for(var i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i + 1]){
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapp = true;
            } 
        }
    } while( swapp === true )
    return arr;
    
}

function getBubbleSort(){
    document.getElementById('answer_sort').innerHTML = BubbleSort(arr);
}

var arr = [];

function runBubble(){
    let num = document.getElementById('bub').value;
    let array = parseInt(num);
    arr.push(array);
    console.log(arr)
    document.getElementById('bub').value = "";
}

//3. Reverse String

function runReverse(){
    newStr = "";
    let str = document.getElementById('string').value;
    document.getElementById('answer_string').innerHTML = reverseStr(str);
    document.getElementById('string').value = "";
}

function reverseStr(str){
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

//4. Factorial

function runFactorial(){
    let num = document.getElementById('number').value;
    document.getElementById('answer_factorial').innerHTML = factorial(num);
}

function factorial(num){
    if(num === 0){
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

//5. Substring
var string;
function runSubstring(){
    string = document.getElementById('substring').value;
    document.getElementById('show_substring').style.display = 'block';
    document.getElementById('answer_substring').innerHTML = string;
}
function pre_substring(){
    let offset = document.getElementById('first_letter').value;
    let length = document.getElementById('last_letter').value;
    let off = Number(offset);
    let len = Number(length);
    document.getElementById('answer_substring').innerHTML = substring(string,len,off);
}

function substring(str,length, offset){
    if(length < 1){
        alert("Length cannot be less than 1");
        return str;
    }
    let num = offset + length
    str = str.slice(offset,num);
    return str;
}

//6. Even Number

function runEven(){
    let even_num = document.getElementById('even').value;
    document.getElementById('answer_even').innerHTML = isEven(even_num);
}

function isEven(num){
    var number = Math.floor(num /2);
   if( number * 2 == num){
       return true;
   } else {
       return false;
   }
}

//7. Palindrome

function runPalindrome(){
    let someStr = document.getElementById('palindrome').value;
    document.getElementById('answer_palindrome').innerHTML = isPalindrome(someStr);
}

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
//8. print shape

function runShape(){
    var shape = document.getElementById('shape').value;
    document.getElementById("answer_shape1").innerHTML = "";
    document.getElementById("answer_shape2").innerHTML = "";
    document.getElementById("answer_shape3").innerHTML = "";
    printShape(shape,3,"%");
}

function printShape(shape, height, character){
    switch (shape) {
        case 'diamond':
        var limit = 3;
        var space = limit;
        for (i = 1; i <= limit; i++) {
            for (j = 1; j <= space; j++) {
                document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
            }
            space--;
            for (j = 1; j <= 2 * i - 1; j++) {
                document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '*');
            }
            document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '<br>');
        }
        space = 2;
        for (i = 1; i <= limit; i++) {
            for (j = 1; j <= space; j++) {
                document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '&nbsp;&nbsp;');
            }
            space++;
            for (j = 1; j <= 2 * (limit - i) - 1; j++) {
                document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '*');
            }
            document.getElementById("answer_shape1").insertAdjacentHTML('beforeend', '<br>');
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
        for(var i = 1; i <= height; i++){
            str = character+character+character
            document.getElementById(`answer_shape${i}`).innerHTML = str;
        }
        return (str);
            break;
        default: console.log("wrong entry");
            break;
    }
}


//11. Splice Element

var array = [];

function runSplice(){
    let num = document.getElementById('splice').value;
    let arr = parseInt(num);
    array.push(arr);
    document.getElementById('splice').value = ""; 
}

function runPrint(){
    document.getElementById('answer_splice').innerHTML = `Array = [${array}],  Length = ${array.length}`;
    document.getElementById('splice_arr').style.display = 'block';
}

function run_splice_2(){
    spliceElement(array);
}

function spliceElement(arr){
    arr.splice(2,1);
    runPrint();
}

//12.define object with a constructor

function construct(){
    class Person {
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    }
   let name = document.getElementById('name').value;
   let age = document.getElementById('age').value;
    var person = new Person(name,age);
    document.getElementById('answer_constructor').innerHTML = `Name: ${person.name},  Age: ${person.age}`;
}


