// Arrays
const shoppingList = ['bread', 'butter', 'honey'];
console.log(shoppingList);
console.log(shoppingList[0]);
console.log(shoppingList[2]);
console.log(shoppingList[3]);

let planets = [
    'Sun',
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
]

console.log(planets.length);
planets.push("Pluton");
// Removes last element from array
planets.pop();
// Removes first element from array
planets.shift();
// We can also use .unshift()
// A snipping tool
console.log(planets.slice(2));
console.log(planets.slice(2, 4));
console.log(planets.slice(1, 5));
console.log(planets.slice(-2));
console.log(planets.slice(2, -1));

const months = ['Jan', 'March', 'April', 'June'];
//   Index || elements to replace || element
months.splice(1, 0, 'Feb');
months.splice(4, 1, 'May');



for(let i = 0; i < planets.length; ++i){
    console.log(planets[i] + " ");
}

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);

const newArray = new Array(10);
newArray[0] = 'a';
for(let i = 1; i < newArray.length; ++i){
    newArray[i] = String.fromCharCode(newArray[i - 1].charCodeAt() + 1);
    console.log(newArray[i - 1].charCodeAt());
}

console.log(newArray);

// Loops
// for...in iterates over all enumerable properties of an object.
const book = {
    title: 'JavaScript for Beginners',
    price: '$9.99',
    year: 2018,
    publisher: 'Amazon, Inc'
}

for(const key in book){
    console.log(`${key} --> ${book[key]}`);
}

// for...of iterates over arrays and other data structures, but not over objects.
const names = ['Alex', 'Emma', 'Atta'];
for(const name of names){
    console.log(`Hey ${name}!`)
}

// Use break; to stop the flow of a loop
let i = 0;
while(i < 6){
    if(i === 3){
        break;
    }
    ++i;
}

console.log(i);