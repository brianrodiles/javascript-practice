// Remember, other way to define if a variable represents a number or not
let num = "10";
if(typeof(num) === "number"){
    console.log(`${num} is a number.`);
}
else{
    console.log(`${num} is not a number.`);
}

let intNum = parseInt(num);
let userString = "number";
typeof(intNum) === "number" ? console.log(`${num} is a number.`) : console.log(`${num} is not a number.`);

// Other way to test conditionals
let tNum = "100";
let testNum = parseInt(tNum) + 1;
console.log(testNum, typeof(testNum));

// Functions