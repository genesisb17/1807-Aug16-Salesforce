/*Javascript Homework
Due Monday 7/23 -- to be pushed by 9AM in your branch

-----------------------------------------------------------------------------------
Create a single Javascript file to answer at least 8 of these questions.
(Can include #1, though we've completed it together in class)
Please put the question itself as a comment above each answer.
-----------------------------------------------------------------------------------*/
window.onload = function () {
    //Fibonacci
    $('#getFib').on('click', fibStart);
    //BubbleSort
    $('#addInput').on('click', addInputBox);
    $('#getBub').on('click', bubbleStart);
    //Reverse String
    $('#getRevStr').on('click', revStart);
    //Factorial
    $('#getFacNum').on('click', facStart);
    //Is Even
    $('#getEvenNum').on('click', evenStart);
    //Delete and splice arrays
    $('#getDel').on('click', delStart);
    $('#getSpl').on('click', splStart);
    $('#delInput').on('click', addDelInputBox);
    //Person object
    $('#getPer').on('click', personStart);
    //literal person
    $('#getLPer').on('click', personLStart);
    //Clock
    updateTime();
    //StarMatch
    $('#getSpell').on('click', getSpell);
};


/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.*/

function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function fibStart() {
    //var num = $('#fibnum').val();
    $('#fibres').val(fib($('#fibnum').val()));
}
/*2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array.*/

function bubbleSort(numArray) {
    for (var p = 0; p < numArray.length; p++) {
        numArray[p] = parseInt(numArray[p]);
    }
    do {
        var change = false;
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i + 1]) {
                change = true;
                let storeVal = numArray[i + 1];
                numArray[i + 1] = numArray[i];
                numArray[i] = storeVal;
            }
        }
    } while (change);
    return numArray;
}

function addInputBox() {
    let length = $('#bubArrayInput .form-control').length;
    $('#bubArrayInput').append(`<input type="number" id="bubnum${length + 1}" class="form-control col-3" placeholder="Number">`)
}

function bubbleStart() {
    //alert("button pressed");
    let length = $('#bubArrayInput .form-control').length;
    var numArray = new Array();
    for (i = length; i > 0; i--) {
        numArray.unshift($(`#bubnum${i}`).val())
    }
    $('#bubres').val(bubbleSort(numArray));
}

/*3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.*/

function reverseString(someStr) {
    let newStr = "";
    for (i = someStr.length - 1; i >= 0; i--) {
        newStr += someStr[i];
    }
    return newStr;
}

function revStart() {
    //alert('moo');
    $('#revres').val(reverseString($('#revstr').val()));
}

/*4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.*/

function factorial(someNum) {
    if (someNum === 0) return 1;
    return someNum * factorial(someNum - 1);
}

function facStart() {
    $('#facres').val(factorial($('#facnum').val()));
}


/*5. Substring
Define function substring(someStr, length, offset)
Return the substring contained between offset and (offset + length) inclusively.
If incorrect input is entered, use the alert function and describe why the input was incorrect.*/

function substring(someStr, length, offset) {

}

/*6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.*/

function isEven(someNum) {
    //alert('moo')
    if (someNum[someNum.length - 1] == 2) {
        return true;
        console.log(someNum + '2');
    }
    else if (someNum[someNum.length - 1] == 4) {
        return true;
        console.log(someNum + '4');
    }
    else if (someNum[someNum.length - 1] == 6) {
        return true;
        console.log(someNum + '6');
    }
    else if (someNum[someNum.length - 1] == 8) {
        return true;
        console.log(someNum + '8');
    }
    else if (someNum[someNum.length - 1] == 0) {
        return true;
        console.log(someNum + "0");
    }
    else {
        return false;
    }
}

function evenStart() {
    $('#evenres').val(isEven($('#evennum').val()));
}

/*7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false*/

function isPalindrome(someStr) {

}

/*8. Shapes
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
  * */

function printShape(shape, height, character) {

}

/*9. Object literal
Define function traverseObject(someObj)
Print every property and it's value.*/

function traverseObject(someObj) {

}

/*10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.*/

function deleteElement(someDelArr) {
    $('#dellen1').val(someDelArr.length);
    $('#delarr1').val(someDelArr);
    $('#delstatus').val('Deleted third element');
    delete someDelArr[2];
    $('#dellen2').val(someDelArr.length);
    $('#delarr2').val(someDelArr);
}

function addDelInputBox() {
    alert('clicked');
    let length = $('#delArrayInput .form-control').length;
    $('#delArrayInput').append(`<input type="number" id="delnum${length + 1}" class="form-control col-3" placeholder="Input">`)
}

function delStart() {
    //alert("button pressed");
    let length = $('#delArrayInput .form-control').length;
    let numDelArray = new Array();
    for (i = length; i > 0; i--) {
        numDelArray.unshift($(`#delnum${i}`).val())
    }
    //alert('Calling Function');
    deleteElement(numDelArray);
}

/*11. Splice Element
Define function spliceElement(someArr)
Print length
Splice the third element in the array.
Print length
The lengths should be one less than the original length.*/

function spliceElement(someArr) {
    $('#dellen1').val(someArr.length);
    $('#delarr1').val(someArr);
    $('#delstatus').val('Spliced third element');
    someArr.splice(2,1);
    $('#dellen2').val(someArr.length);
    $('#delarr2').val(someArr);
}

function splStart(){
    let length = $('#delArrayInput .form-control').length;
    let numSplArray = new Array();
    for (i = length; i > 0; i--) {
        numSplArray.unshift($(`#delnum${i}`).val())
    }
    //alert('Calling Function');
    spliceElement(numSplArray);
}

/*12. Defining an object using a constructor
Define a function Person(name, age)
The following line should set a Person object to the variable john:
	var john = new Person("John", 30);*/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

function personStart() {
    alert('moo');
    var john = new Person($('#pernam').val(), $('#perage').val());
    $('#pernres').val(john.name);
    $('#perares').val(john.age);
}

/*13. Defining an object using an object literal
Define function getPerson(name, age)
The following line should set a Person object to the variable john:
    var john = getPerson("John", 30);*/

function getPerson(name, age) {
    let john = {
        name: name,
        age: age
    };
    return john;

}

function personLStart() {
    alert('moo')
    let john = getPerson($('#lpernam').val(), $('#lperage').val());
    var name = john.name;
    var age = john.age;
    $('#lpernres').val(name);
    $('#lperares').val(age);
}

/*14. Display the current time on the top right of your HTML page, 
updating every second*/

function updateTime() {
    var time = new Date();
    var hours = time.getHours() % 12 || 12;
    var minute = time.getMinutes();
    var second = time.getSeconds();
    if (minute < 10){
        minute = "0" + minute;
    }
    if (second < 10){
        second = "0" + second;
    }
    var ampm = time.getHours() >= 12 ? 'pm' : 'am';
    $('#hours').html('Time: ' + hours + ':' + minute + ':' + second + ampm + '  ');
    var time = setTimeout(updateTime, 1000);


}

/*15.  Descending order
Your task is to make a function that can take any non-negative 
integer as a argument and return it with its digits in descending 
order. Essentially, rearrange the digits to create the highest possible number.*/

function descOrder(n) {

}

/* Star Match */
function getSpell(){
    var id = getRndInteger();
    //alert('test');
    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        console.log(Date() + "   " + dndxhr.readyState);
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setSpellValues(spell);
        }
    }

    var url = `https://swapi.co/api/people/${id}`;
    dndxhr.open("GET", url, true);

    //Step 4 - 
    dndxhr.send();
}
function setSpellValues(){
    getSpecies(spell.species);
    getHomeworld(spell.homeworld);
    $('#spellName').html(spell.name);
    //$('#gender').html(spell.gender);
    setGender(spell.gender);
    $('#skin').html(spell.skin_color);
    $('#height').html(spell.height);
    //$('#hair').html(spell.hair_color);
    setHair(spell);
    $('#eyes').html(spell.eye_color);
    $('#match').removeAttr("hidden");


}

//gets the species.
function getSpecies(url){
    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        console.log(Date() + "   " + dndxhr.readyState);
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setSpecies(spell);
        }
    }
    dndxhr.open("GET", url, true);

    //Step 4 - 
    dndxhr.send();
}

//gets the homeworld
function getHomeworld(url){
    var dndxhr = new XMLHttpRequest();
    dndxhr.onreadystatechange = function(){
        if(dndxhr.readyState == 4 && dndxhr.status == 200)
        {
            dndresp = dndxhr.responseText;
            spell = JSON.parse(dndresp);
            setHomeworld(spell);
        }
    }
    dndxhr.open("GET", url, true);
    dndxhr.send();
}

//verifies they have hair, and if not puts in a alternate.
function setHair(hair){
    if(hair.hair_color == "none")
    {
        $('#hair').html("bald head")
    }
    else if(hair.hair_color == "n/a")
    {
        $('#hair').html("looking smile")
    }
    else{
        $('#hair').html(hair.hair_color + " hair")
    }
}

//checks if there is a gender and if there is, sets it, otherwise puts in a placeholder.
function setGender(gender){
    if(gender == "n/a"){
        $('#gender').html("specimen");

    }
    else{
        $('#gender').html(gender);

    }

}

//Set the name of the species
function setSpecies(species){
$('#species').html(species.name);
}
//Set the homeworld
function setHomeworld(homeworld){
    $('#homeworld').html(homeworld.name);
}
//Get a random integer.
function getRndInteger() {
    return Math.floor(Math.random() * 88 ) + 1;
}