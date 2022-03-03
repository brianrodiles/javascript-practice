const str = 'JavaScript is fun';
// .startsWith(String str) or .startsWith(String str, int index) returns boolean
// .endsWith(String str) or .endsWith(String str, int index) returns boolean
// .includes(String str) returns boolean
// .slice()
console.log(str.slice());
console.log(str.slice(4));
console.log(str.slice(0, 10));
// .toUpperCase() & .toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// .toCharAt(int x)
console.log(str.charAt());
console.log(str.charAt(11));
console.log(str.charAt(14));
console.log(str.charAt(110));

const str2 = 'Javascript is amazing';
const strNew = 'JavaScript-is-amazing';

// Returns an array
console.log(str2.split());
console.log(str2.split('S'));
console.log(str.split('is'));
console.log(str.split(' '));
console.log(strNew.split('-'));

console.log(str.replace('JavaScript', 'Node.js'));
// Using regular expressions (regex) for case insensitive
console.log(str.replace(/Javascript/i, 'Node.js'));
console.log(str.replace('a', 'A'));
console.log(str.replace(/a/g, 'A'));

const str3 = 'JavaScript';
console.log(str3.repeat(3));
console.log(str3.repeat(1));
console.log(str3.repeat(0));

const browserType = 'mozilla';
console.log(browserType.length);

// Parsing a String into an integer
let num = "45";
console.log(parseInt(num) + 50);

// Pop Up Boxes
// alert("This is an alert message box.");
// alert('This number: ' + 100); // Displays with concatenation
// alert(100);
// alert(Date()); // Displays current date

// Confirm box: If user clicks Ok, the conditional will be set to true.
// In case the user presses "Cancel," it will be set to false.
var userPreference;
if(confirm("Do you want to save changes?") == true){
    userPreference = "Data saved successfuly!";
}
else{
    userPreference = "Save Cancelled!";
}

// Prompt box (for input). It returns null when pressing "Cancel".
prompt("How old are you?", "30");

// Math Properties
// https://www.tutorialspoint.com/es6/es6_math.htm
let doubleNum = 103.9;
console.log(Math.round(doubleNum));
console.log(Math.ceil(doubleNum));
console.log(Math.floor(doubleNum));
// Math.trunc(double x) returns the integer part of a number
console.log(Math.trunc(doubleNum));
//Math.sign() to identify positivity or negativity
console.log(Math.sign(3));    // Expected 1
console.log(Math.sign(-3));   // Expected -1
console.log(Math.sign(0));    // Expected 0
console.log(Math.sign("-3")); // Expected -1
console.log(Math.sign('-3')); // Expected -1

// Date
// Date() is the constructor
// Can be called as Date().toString(); to apply inheritance
console.log(Date().toString());
// Milisenconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
console.log(Date.now());
// Returns date in parameter as a String - Date.now().
console.log(Date.parse("3/1/2022"));
console.log(Date.UTC(2));
// Creating Date objects
let today = new Date();
let birthday = new Date('July 9, 2001 12:00:00');
let birthday2 = new Date('2001-07-09T12:00:00');
let birthday3 = new Date('2001, 07, 09');
let birthday4 = new Date('1995, 11, 17, 12, 0, 0');
let birthday5 = new Date(Date.parse('July 9, 2001 12:00:00'));
console.log(`${today}\n${birthday}\n${birthday2}\n${birthday3}\n${birthday4}\n${birthday5}\n`);
// Getting date, month, year, and time
const date = new Date();
const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];
console.log(`Current date: ${date}\nCurrent month: ${month}\nCurrent day: ${day}\nCurrent year: ${year}`);
console.log(`Current hour: ${hour}\nCurrent minutes: ${minutes}\nCurrent seconds: ${seconds}`);
// Calculating elapsed time
let start = Date.now();
for(let i = 0; i < 1000000000; ++i){
    ++i;
}
let end = Date.now();
let elapsedTime = end-start;
console.log(`Elapsed time: ${elapsedTime}`);