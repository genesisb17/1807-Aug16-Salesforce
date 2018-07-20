/**Problem 1 */
function fib(n) {
    let a = 0;
    let b = 1;
    let c = 0;

    for (let x = 0; x < n; x++) {
        c = a;
        a = b;
        b = b + c;
    }
    return a;
}

/**Problem 2 */
function bubbleSort(list) {
    for (let x = 0; x < list.length - 1; x++) {
        for (let y = 0; y < list.length - x - 1; y++) {
            if (list[y] > list[y + 1]) {
                let tmp = list[y];
                list[y] = list[y + 1];
                list[y + 1] = tmp;
            }
        }
    }
    return list;
}

/**Problem 3 */
function reverseString(someStr) {
    str = someStr.split("");
    str = str.reverse();
    return str.join("");
}

/**Problem 4 */
function factorial(someNum) {
    let f = 1;
    for (let n = 1; n <= someNum; n++) {
        f = f * n;
    }
    return f;
}

/**Problem 5 */
function subString(someStr, length, offset) {
    if ((length + offset) > someStr.length) {
        alert("Substring not within boundaries of string");
        return undefined;
    }
    else if (length < 0) {
        alert("Substring can not have a negative length");
        return undefined;
    }
    else if (offset < 0) {
        alert("Offset can not be before start of the array");
        return undefined;
    }
    else if (length > someStr.length) {

    }
    let newStr = someStr.slice(offset, offset + length);
    return newStr;
}

/**Problem 6 */
function isEven(someNum) {
    let n = Number(someNum);
    //convert to number
    if (isNaN(n)) {
        return NaN;
    }
    //check for decimals
    if (n != Math.floor(n)) {
        return undefined;
    }

    if (n & 1) {
        return false;
    }
    else {
        return true;
    }
}

/**Problem 7 */
function isPalindrome(someStr) {
    let s = String(someStr);
    s = s.toLowerCase();
    for (let x = 0; x < Math.floor(s.length / 2); x++) {
        if (s[x] != s[s.length - 1 - x]) {
            return false;
        }
    }
    return true;
}

/**Shapes 8 */
function printShape(shape, height, character) {
    shape = shape.toLowerCase();
    let str = "";
    switch (shape) {
        case 'square':
            for (let x = 0; x < height; x++) {
                for (let y = 0; y < height; y++) {
                    str = str.concat(character);
                }
                str = str.concat('\n');
            }
            break;
        case 'triangle':
            for (let x = 0; x < height; x++) {
                for (let y = 0; y <= x; y++) {
                    str = str.concat(character);
                }
                str = str.concat('\n');
            }
            break;
        case 'diamond':
            let topRows = 0;
            let rowLength = 0;
            if (isEven(height)) {
                topRows = height / 2;
                rowLength = height - 1;
            }
            else {
                topRows = (height - 1) / 2;
                rowLength = height;
            }
            let spaces = Math.ceil(rowLength / 2) - 1;
            //print top of diamond
            let tmpSpaces = spaces;
            for (let y = 0; y < topRows; y++) {
                for (let x = 0; x < rowLength; x++) {
                    if (x < tmpSpaces || (rowLength - tmpSpaces) <= x) {
                        str = str.concat(" ");
                    }
                    else {
                        str = str.concat(character);
                    }
                }
                tmpSpaces--;
                str = str.concat('\n');
            }
            //print middle row if needed
            if (!isEven(height)) {
                str = str.concat(character.repeat(rowLength));
                str = str.concat("\n");
            }

            //fill bottom row
            tmpSpaces++;
            let bottomRows = topRows; //just for better code readability
            for (let y = 0; y < bottomRows; y++) {
                for (let x = 0; x < rowLength; x++) {
                    if (x < tmpSpaces || (rowLength - tmpSpaces) <= x) {
                        str = str.concat(" ");
                    }
                    else {
                        str = str.concat(character);
                    }
                }
                tmpSpaces++;
                str = str.concat('\n');
            }

            break;
        default: return null;
    }
    console.log(str);
    return str;
}

/**Problem 9 */
function traverseObject(someObj){
    let str = "";
    if(someObj === Object(someObj)){
        let x = 0;
        let keyArray = Object.keys(someObj);
        for(let property in someObj){
            str = str + keyArray[x] + ": " + someObj[property] + '\n';
            x++;
        }
    }
    console.log(str);
    return str;
}

/**Problem 10 */
function deleteElement(someArr){
    console.log(someArr.length);
    someArr[2] = undefined;
    console.log(someArr.length);
}

/**End of Problems, beginning of helper functions */
var globalBSArray = new Array();
window.onload = function(){
    $("#runFib").click( function(event){
        event.stopPropagation();
        runFib();
    });
    $("#runBubbleSort").on("click", function(event){
        event.stopPropagation();
        runBubbleSort();
    });
    $("#bsAdd").on("click", updateArray);
    $('#runReverseString').on("click", function(event){
        event.stopPropagation();
        runReverseString();
    })
    $('#runFactorial').on("click", function(event){
        event.stopPropagation();
        runFactorial();
    })
    $("#runSubstring").click( function(event){
        event.stopPropagation();
        runSubstring();
    });
    $("#runIsEven").click( function(event){
        event.stopPropagation();
        runIsEven();
    });
    $("#runIsPalindrome").click( function(event){
        event.stopPropagation();
        runIsPalindrome();
    });
    $("#runPrintShape").click(function(event){
        event.stopPropagation();
        runPrintShape();
    })
}

window.onkeypress = function(){
    /**Adds key press functionality */
    /**Actions to be taken on 'Enter' key press */
    if(this.event.keyCode == 13){
        if(document.getElementById("runFib") == document.activeElement || document.getElementById("fibN") == document.activeElement){
            runFib();
        }
        if(document.getElementById("bsArrayNum") == document.activeElement){
            updateArray();
        }
        if(document.getElementById("factorialNumber") == document.activeElement){
            runFactorial();
        }
        if(document.getElementById("RSText") == document.activeElement){
            runReverseString();
        }
        if(document.getElementById("numIsEven") == document.activeElement){
            runIsEven();
        }
        if(document.getElementById("palindromeText") == document.activeElement){
            runIsPalindrome();
        }
    }
}

function runFib(){
    let n = $('#fibN').val();
    let result = fib(n);
    let outputLabel = document.getElementById("oneOutput");
    outputLabel.innerText=result;
}

function runBubbleSort(){
    let output = bubbleSort(globalBSArray);
    document.getElementById("twoOutput").innerText = output;
    globalBSArray = [];
    document.getElementById("bsArrayDisplay").innerText = "";
}

function updateArray(){
    let n = $('#bsArrayNum').val();
    n = Number(n);
    globalBSArray.push(n);

    document.getElementById("bsArrayDisplay").innerText = globalBSArray.toString();

    document.getElementById("bsArrayNum").value = 0;
}

function runReverseString(){
    let str = document.getElementById("RSText").value;

    str = reverseString(str);
    document.getElementById("RSText").value = "";
    document.getElementById("threeOutput").innerText=str;
}

function runFactorial(){
    let n = document.getElementById("factorialNumber").value;

    n = factorial(n);

    document.getElementById("fourOutput").innerText = n;
}

function runSubstring(){
    let str = document.getElementById("stringF").value;
    let strLength = document.getElementById("strLength").value;
    let strOffset = document.getElementById("strOffset").value;
    
    strLength = parseInt(strLength);
    strOffset = parseInt(strOffset);
    str = subString(str, strLength, strOffset);

    document.getElementById("fiveOutput").innerText = str;
}

function runIsEven(){
    let num = document.getElementById("numIsEven").value;
    num = Number(num);
    
    let results = isEven(num);
    if(results == NaN){
        document.getElementById("sixOutput").innerText = "Nice try, but that's not even a number";
    }
    else if(results){
        document.getElementById("sixOutput").innerText = `${num} is even!`;
    }
    else if(results == undefined){
        document.getElementById("sixOutput").innerText = "Decimal values do not possess the property of even or odd.";
    }
    else{
        document.getElementById("sixOutput").innerText = `${num} is odd.`;
    }
}

function runIsPalindrome(){
    let str = document.getElementById("palindromeText").value;

    let results = isPalindrome(str);
    if(results==true){
        document.getElementById("sevenOutput").innerText = "It's a palindrome!"
    }
    else{
        document.getElementById("sevenOutput").innerText = "It's not a palindrome."   
    }
}

function runPrintShape(){
    let shape = $(`#shape`).val();
    let height = $('#rows').val();
    let ch = $('#character').val();

    let results = printShape(shape, height, ch);
    document.getElementById("eightOutput").innerText = results;
}