// Objects (as JS is a object-based programming language)
// JS Objects have properties and methods
// In JS arrays are objects, with, e.g., the property length.
// JS Objects allows to store data in key value pairs or property value pairs.
const objVacation = {
    // Any type of data can be used as value
    "place":"Yosemite",
    "days":5,
    "transportation":"car"
};
const firstLetter = "a";
const dictionary = {
    "a":["Apple","Attitude","Azalea"],
    "b":["Baby","Bitter","Best"],
    "c":["Cat","Cowgirl","Curly"]
};
// Accesing object properties
// Bracket notation
let daysOnVacation = objVacation["days"];
console.log(`Duration of trip: ${daysOnVacation} days.`);
// Variable method
console.log(`Contents of "a": ${dictionary[firstLetter]}`);
// Dot notation
console.log(`Way of transportation: ${objVacation.transportation}.`);

// Changing object properties
daysOnVacation = objVacation.days = 6;
console.log(`New duration of trip: ${daysOnVacation} days.`);

// Delete Object Properties
delete dictionary.c;

// Checking if a Property is an object
console.log(objVacation.hasOwnProperty("place"));
console.log(objVacation.hasOwnProperty("weather"));

// Complex Objects
// * When an object contains more than one data type.
// * When a variable contains more than one object.

const myFaveBooks = [
    {
        "title":"The Secret Life of Bees",
        "author":"Sue Monk Kid",
        "pubDate":2001,
        "Genre":"Fiction"
    },
    {
        "title":"Rubyfruit Jungle",
        "author":"Rita Mae Brown",
        "pubDate":1973,
        "Genre":"Fiction"
    }
]

const myFaveMusic = [
    {
        "albumTitle":"Into the Trees",
        "musician":"Zoe Keating",
        "releaseDate":2010,
        "songs":["Forest","Escape Artist","Optimist"]
    }
]

const myNestedFaveMusic = [
    {
        "albumTitle":"Into the Trees",
        "musician":"Zoe Keating",
        "releaseDate":2010,
        "songs":{
                    "Forest":{
                        "Length":"2:07",
                        "Instruments":"Cello"
                    },
                    "Into the Trees":{
                        "Length":"3:15",
                        "Instruments":"Cello"
                    }
        }
    }
]

console.log(myNestedFaveMusic[0]["songs"]["Forest"]);

const myFaveAlbums = {
    "Into the Trees":{"musician":"Zoe Keating",
                      "songs":["Into the Trees","Forest","Optimist"]},
    "Oops! I Did It Again":{"musician":"Britney Spears",
                            "songs":["Oops! I Did It Again","Sodapop"]},
};

console.log(myFaveAlbums["Into the Trees"]["songs"][0]);