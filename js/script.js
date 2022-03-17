// DOM (Document Object Model)
// Object based represenation of a website (it is a tree-based model)
// Document
// HTML
// Head | Body
// Title | H1, P, UL
// - | -, -, L1, L1

// Element nodes are the ones that are tags
// .createElement() creates another element node
// .appendChild() allows you to append elements to a site
// .addEventListener() allows you to perform actions depending on the user's actions
function alertCatFact(){
    let catUrl = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1';
    let catResult = fetch(catUrl).then(response => response.json()).then(data => console.log("Here is the cat fact data: ", data));
    let catFact = fetch(catUrl).then(response => response.json()).then(data => alert(`Here is a new fact about cats:\n${data.text}`));
}
function mOver(obj){
    obj.innerHTML = "Click me!";
}

function mOut(obj){
    obj.innerHTML = "Get a fact about cats!";
}

document.getElementById("catFactBtn").addEventListener("click", alertCatFact);
document.getElementById("catFactBtn").addEventListener("mouseover", function(){document.getElementById("catFactBtn").innerHTML = "Click me!";});
document.getElementById("catFactBtn").addEventListener("mouseout", function(){document.getElementById("catFactBtn").innerHTML = "Get another fact about cats!";});