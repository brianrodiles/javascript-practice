let userName = prompt("Please enter your first name:");
let revName = userName.split("").reverse().join("");
alert("This is the reversed name: " + revName);
alert(userName);

let userNum1 = prompt("Please enter a number value:", "10");
let userNum2 = prompt("Please enter another number value:", "10");
let sumNums = parseInt(userNum1) + parseInt(userNum2);
alert("Sum of two numbers: " + sumNums);