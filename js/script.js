// let url = 'http://api.open-notify.org/astros.json';
// let result1 = fetch(url).then(response => response.json()).then(data => console.log("Here is the data: ", data));
// let result2 = fetch(url).then(response => response.json()).then(data => console.log(data.people.filter(name => console.log("name", name))));
// let result3 = fetch(url).then(response => response.json()).then(data => console.log(data.people.filter(name => console.log("name", name.name))));

// JSON ==> JavaScript Object Notation
let catUrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
let catResult = fetch(catUrl).then(response => response.json()).then(data => console.log("Here is the cat fact data: ", data));
let catFact = fetch(catUrl).then(response => response.json()).then(data => alert(`Here is a new fact about cats:\n${data.text}`));