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

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// That is what allows a function to be called above or below of its declaration.
/////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(createCustomGreeting("Hello, a."));

// Functions
function createCustomGreeting(message){
    const greeting = `Welcome, a message from our sponsors: ${message}`;
    console.log(greeting);
    // A function always expects a return statement.
    return;
}

console.log(createCustomGreeting("Bye, xd."));
/////////////////////////////////////////////////////////////////////////////////////////////////////

function fullNameConverter(firstName, lastName){
    let fullName = firstName + " " + lastName;
    console.log(fullName);
    return fullName;
}

fullNameConverter("Brian", "Rodiles");

// Function expression
// Used when doing event listening, and it is called an anonymous expression
// This type of functions are not hoist friendly as they are not callable if they were not declared before.
// convertFullName("Bruh", "xd"); // Cannot be used
const convertFullName = function (firstName, lastName){
    return `Hello ${firstName} ${lastName}!`
}

console.log(convertFullName("Brian", "Rodiles"));

// Arrow functions
const convertFullNameArrow = (firstName, lastName) =>{
    return firstName + " " + lastName;
}

console.log(convertFullNameArrow("Brian", "Arrow"));

// No need of parentheses as it is only one parameter
//                 ⇩
const greeting = message => "Greeting: " + message.toUpperCase();
//                                                             ↑
// No need of return statement when using single-lined arrow functions
// IMPORTANT: Keyword this can't be used in an arrow function (i.e. this.message.toUpperCase()).
// Think it as, I AM THE EXPRESSION, I AM THE "THIS";
// However, it may work if we bind.
// For more info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
console.log(greeting("Hello World!"))

//Another example
const secondGreeting = () => "Hello World!";
console.log(secondGreeting());