// let url = 'http://api.open-notify.org/astros.json';
// let result1 = fetch(url).then(response => response.json()).then(data => console.log("Here is the data: ", data));
// let result2 = fetch(url).then(response => response.json()).then(data => console.log(data.people.filter(name => console.log("name", name))));
// let result3 = fetch(url).then(response => response.json()).then(data => console.log(data.people.filter(name => console.log("name", name.name))));

// JSON ==> JavaScript Object Notation
let catUrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
let catResult = fetch(catUrl).then(response => response.json()).then(data => console.log("Here is the cat fact data: ", data));
let catFact = fetch(catUrl).then(response => response.json()).then(data => alert(`Here is a new fact about cats:\n${data.text}`));

// Extra (during review):
// You can use POSTMAN to see what will be returned on a GET call before fetching.
// You can also use node: https://nodejs.org/en/ to download it
// > node // to start node
// > .exit // to exit node

// The following script is for to get a random item from the page
// > node --experimental-fetch // to perform an experimental node
// > let response = await fetch("https://cat-fact.herokuapp.com/facts")
// > let data = await response.json()
// > let random_item = Math.floor(Math.random() * data.length)
// > data[random_item]