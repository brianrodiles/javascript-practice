const str = 'JavaScript is fun';
// .slice()
console.log(str.slice());
console.log(str.slice(4));
console.log(str.slice(0, 10));
// .toUpperCase() & .toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// .toCharAt(int x)
console.log(str.str.charAt());
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
alert("This is an alert message box.");
alert('This number: ' + 100); // Displays with concatenation
alert(100);
alert(Date()); // Displays current date

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

