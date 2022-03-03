// Using a function
function reverseString(str){
    return str.split("").reverse().join("");
}

// Using an iterative implementation
function iterReverseString(str){
    let revString = "";

    for(let i = str.length - 1; i >= 0; --i){
        revString += str[i];
    }

    return revString;
}

// Using a recursive function
function recurrReverse(str){
    // Base case
    if(str === ""){
        return "";
    }
    // Recursive case using the stack behavior of recursion
    else{
        return recurrReverse(str.substr(1)) + str.charAt(0);
    }
}

// Using conditional (ternary) operators
function terReverse(str){
    return (str === '') ? '' : terReverse(str.substr(1)) + str.charAt(0);
}

let userName = prompt("Please enter your first name:");
let revName = userName.split("").reverse().join("");
alert("This is the reversed name: " + revName);
alert("This is the reversed name using a function: " + reverseString(userName));
alert("This is the reversed name using an iterative implementation: " + iterReverseString(userName));
alert("This is the reversed name using a recursive function: " + recurrReverse(userName));
alert("This is the reversed name using conditional (ternary) operators: " + terReverse(userName));

let userNum1 = prompt("Please enter a number value:", "10");
let userNum2 = prompt("Please enter another number value:", "10");
let sumNums = parseInt(userNum1) + parseInt(userNum2);
alert("Sum of two numbers: " + sumNums);