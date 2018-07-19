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
}