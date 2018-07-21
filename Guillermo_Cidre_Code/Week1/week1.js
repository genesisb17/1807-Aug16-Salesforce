window.onload = function() {
    //Set up event calls/realtime functions

    //Current Time
    this.setInterval(() => {
        $(".cTime").text(realTime());
    }, 500);

    //NonRecursive Fibonnacci
    $('#fibGo').on('click', () => {
        let n = parseInt($('#fib').val());
        $('#fibAns').text(fib(n));
    });

    //Reverse String
    $('#revGo').on('click', () => {
        let str = $('#rev').val();
        $('#revAns').text(reverseStr(str));
    });

    //Factorial
    $('#facGo').on('click', () => {
        let n = parseInt($('#fac').val());
        $('#facAns').text(factorial(n));
    });

    //isEven
    $('#eveGo').on('click', () => {
        let n = parseInt($('#eve').val());
        if(isNaN(n) || n == undefined){
            $('#eveAns').text("Not a Valid Number");
        }
        else{
            $('#eveAns').text(isEven(n));
        }
    });

    //Palindrome
    $('#palGo').on('click', () => {
        let str = $('#pal').val();
        $('#palAns').text(isPalindrome(str));
    });

    //Shape
    $('#shapGo').on('click', () => {
        let shap = $('#shap1').val();
        let heig = parseInt($('#shap2').val());
        let character = $('#shap3').val();

        if(isNaN(heig) || heig == undefined){
            $('#shapAns').text("Not a Valid Number");
        }
        else{
            $('#shapAns').html(printShape(shap,heig, character));
        }
    });

    //Delete Element
    $('#delGo').on('click', () => {
        let elemStr = $('#del').val();
        let elemList = elemStr.split(',');
        $('#delAns1').text(elemList);
        if(elemList.length < 3){
            $('#delAns2').text("Not enough elements to demonstrate removal");    
        }
        else
            $('#delAns2').text(deleteElement(elemList));
    });
    




}



/*1. Fibonacci 
Define function: fib(n) 
Return the nth number in the fibonacci sequence.
*/

function fib(n) {
    //edge case
    if(n<0 || isNaN(n) || n == undefined) {
        return -1;
    }
    if(n==0){
        return 0;
    }
    //This algorithm will run O(n) with O(n) memory usage
    //This algorithm does the following process
    //fib(n) = fib(n-1)+fib(n-2)=...= k*fib(1) + m*fib(0) = k

    var fibar = new Array(n+1).fill(0); //create empty n+1 array filled with 0
                                        //each representing coefficient of fib(i) where
                                        //i is the array index
    fibar[n] = 1; //expression for fib(n)
    for(let i=n; i > 1; i--) {
        //expand fibar[i]*fib(i) expression
        fibar[i-1] += fibar[i];
        fibar[i-2] += fibar[i];
    }
    return fibar[1]; // This will be k in k*fib(1) example above
}

/*
3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String.
*/

function reverseStr(someStr){
    //string is immutable so must create new string through array
    var arrStr = someStr.split(''); //array representation of someStr
    var ansArrStr = []; //where our reversed array representation will be made
    var arrLast = arrStr.length - 1; // last element index on arrStr

    //insert data into new array in opposite order
    for(let i = arrLast; i>=0; i--) {
        ansArrStr[arrLast - i] = arrStr[i]; 
    }
    return ansArrStr.join('');
}

/*
4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.
*/
function factorial(someNum) {
    //error case
    if(someNum<0 || isNaN(someNum) || someNum == undefined) {
        return -1;
    }
    //base case
    if(someNum == 0 || someNum == 1){
        return 1;
    }

    return someNum * factorial(someNum - 1);
}

/*
6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator.
*/

function isEven(someNum) {
    return (someNum & 1) == 0;
}

/*
7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false
*/

function isPalindrome(someStr){
    //check palindrome pattern
    var ans = true;
    var last = someStr.length - 1; //last element in string
    //check first half of string with the second half
    for(let i = 0; i<=Math.floor(someStr.length / 2); i++){
        ans = ans && (someStr[i] == someStr[last - i]);
    }
    return ans;
}

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

function printShape(shape, height, character) {
    //Must use Switch statement
    //Assume height is odd( We will add suport for even numbers for all shapes)
    //Assume character is one char
    let ans = ""; //This will be our string result
    switch(shape){
        case "Square":
            //repeat print a square
            for(let i = 0; i<height; i++){
                let strStat = character.repeat(height);
                ans = ` ${ans}${strStat}<br>`;
                console.log(strStat);
            }
            break;
            
        case "Triangle":
            for(let i = 0; i<height;){
                let strStat = character.repeat(++i);
                ans = `${ans}${strStat}<br>`;
                console.log(strStat);
            }
            break;

        case "Diamond":
            //Algorithm: Compute the number of character chars we have to repeat
            //Calculate the number of repeating space chars based on # of character chars.
            //Fill the string and do same for other rows

            //for even, we want the following character length pattern 
            //         2,4,6,4,2
            //      i= 1,2,3,4,5 <- there are height-1 i's
            //charLen=  2i  , 2((last-i)+1)
            //for odd,
            //         1,3,5,3,1
            //      i= 0,1,2,3,4 <- there are height i's
            //charLen= 2i+1, 2(last-i)+1

            //want to support even numbers
            //so we define the following
            let parity = height&1;
            let loopSkip = 1 - parity;

            for(let i = loopSkip; i<height;i++) {
                


                //calculate char Len
                let charLen = 2*i + parity;
                if(charLen > height) {
                    //2i+1 > i
                    let elemLast = height-1;
                    charLen = 2*((elemLast - i) + loopSkip) + parity;
                }

                //calculate space length and then generate strings
                let spaceLen = (height-charLen)/2;
                let spaceStr = " ".repeat(spaceLen);

                //In my browser, ensp provides enough spacing
                //If it doesn't work in another broswer, use &nbsp;
                let htmlSpaceStr = "&ensp;".repeat(spaceLen);
                let charStr = character.repeat(charLen);

                //Output final string
                ans = `${ans}${htmlSpaceStr}${charStr}${htmlSpaceStr}<br>`
                console.log(`${spaceStr}${charStr}${spaceStr}`);
            }
            break;

    }

    return ans;
}
/*
10. Delete Element
Define function deleteElement(someArr)
Print length
Delete the third element in the array.
Print length
The lengths should be the same.
*/
//need to test
function deleteElement(someArr){
    //I will assume all changes must happen to someArr
    //console.log(someArr);
    //delete third element
    //Doing lazy method
    //plan: push element 1 and 2 one down
    //shift the whole thing
    someArr[2]=someArr[1];
    someArr[1]=someArr[0];
    someArr.shift();

    //console.log(someArr);
    return someArr;
}
/*
14. Display the current time on the top right of your HTML page, 
updating every second
*/
function realTime() {
    //timing will be set up in window.onload
    return new Date();
}
