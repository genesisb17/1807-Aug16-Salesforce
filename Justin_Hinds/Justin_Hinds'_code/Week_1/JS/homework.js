//Justin Hinds

  window.onload = function(e){
    //   let fibBtnEl = document.getElementById("runFib");
    //   if(fibBtnEl){
    //       fibBtnEl.addEventListener("click", runFib, false);
    //   }else{
    //       console.log("Fib button is null fool")
    //   }
   

  $("#runFib").click(runFib);
//   $("#sortBtn").click(runFib);
  $("#reverseBtn").click(runReverse);
  $("#factBtn").click(runFact);
  $("#subBtn").click(runSubStr);
  $("#evenBtn").click(runEven);
  $("#paliBtn").click(runPali);
  $("#spliceBtn").click(runSplice);
  $("#docBtn").click(runDoc);
  $("#dolBtn").click(runDol);

  console.log("work")
  }

//fibonacci
function runFib(){
    let n = $("#fibIn").val();
    //let n = document.getElementById("fibIn").value;
    let fibX = fib(n)
    document.getElementById('fibOut').innerHTML = `= ` + fibX;
    console.log(n)
}

function fib(n){
    if(n == 0){
        return 0
    }
    if(n == 1){
        return 1
    }
    return fib(n - 1) + fib(n - 2);
}
//Bubble Sort
// function bubbleSort(numArray){
//      let swapped = true;
//      while(swapped){
//          swapped = false;
//         for(let i = 0; i < numArray.length; i++){
//             if(numArray[i] > numArray[i+1]){
//                 let tmp = numArray[i];
//                  numArray[i] = numArray[+i+1];
//                  numArray[+i+1] = tmp;
//                  swapped = true;
//                 console.log()
//             }
//      } 
//  }
//  console.log(numArray)
//  return numArray
// }

//Object literal
function traverseObject(someObj){
    console.log(someObj);
}

//Reverse String
function runReverse(){
    let str = $("#reverseIn").val();
    let rs = reverseStr(str);
    $("#reverseOut").html(` = ${rs}`)
    $("#reverseIn").html("")
}
function reverseStr(someStr){
    // console.log(someStr);
    let stringArray = someStr.split("");
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++){
        let letter = stringArray[i];
        // console.log(letter);
        newArray.unshift(letter)
    }
    let word = newArray.join("")
    // console.log(word)
    return word;
}

//Factorial
function runFact(){
    let n = $("#factIn").val();
    let fact = factorial(n);
    $("#factOut").html(` = ${fact}`)
}
function factorial(sumNum){
    if (sumNum == 0) {
        return 1;
    }
    return factorial(sumNum - 1) * sumNum
}

//substring
function runSubStr(){
   let offset = $("#subOffsetIn").val();
   let subLength = $("#subLengthIn").val();
    let subText = $("#subTextIn").val();
   let sub = substring(subText,subLength,offset)
   $("#subOut").html(` = ${sub}`)
}
function substring(someStr, length, offset){
    if(typeof someStr != "string"){
        alert("not a string");
        return;
    }
    if(offset > someStr.length){
        alert("offset greater than string length.");
        return;
    }

    let strArray = someStr.split("");
    let num = (+offset + +length);
    for(let i = num; i < someStr.length; i++){
        strArray.pop();
        console.log(strArray)
    }

    for( let i = 0; i < offset; i++ ){
        strArray.shift();
    }
   
    return strArray.join("");
}

//Even Number
function runEven(){
    let n = $("#evenIn").val();
    let even = evenNumber(n);
    $("#evenOut").html(` = ${even}`)
}
function evenNumber(n){
    
    if(n & 1){
        return false;
    }else{
        return true;
    }
}

//Palindrome
function runPali(){
    let str = $("#paliIn").val();
    let pali = isPalindrome(str);
    $("#paliOut").html(` = ${pali}`)
}
function isPalindrome(someStr){
    let wordArray = someStr.split("");
    let reverseArray = wordArray.reverse();
    let newStr = reverseArray.join("");
    if( someStr == newStr){
        return true;
    }
    return false;
}

//Splice Element
function runSplice(){
    let strArray = $("#spliceIn").val().split(",");
    let se = spliceElement(strArray);
    $("#spliceOut").html(`Before: ${se[0]} After: ${se[1]}`)
}
function spliceElement(someArr){
    let array = [];
    console.log(someArr.length);
    array.push(someArr.length)
    someArr.splice(3,1);
    console.log(someArr.length);
    array.push(someArr.length)
    return array;
}


//Define object using constructor
function runDoc(){
let nameStr = $("#docNameIn").val();
let ageNum = $("#docAgeIn").val();
Person(nameStr,ageNum);
$("#docNameIn").html(``)
$("#docAgeIn").html(``)
}
function Person(name,age){
    this.age = age;
    this.name = name;
}

//defin using an objict literal
function runDol(){
    let nameStr = $("#dolNameIn").val();
    let ageNum = $("#dolAgeIn").val();
    getPerson(nameStr,ageNum);
    $("#dolNameIn").html(``)
    $("#dolAgeIn").html(``)

}
function getPerson(name, age){
    return {"name" : name, "age" : age}
}

