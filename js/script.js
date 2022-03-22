function speak(){
    alert("woof!");
}
function code(){
    alert("\"The coding dog is coding! 😳\"");
}

const dog = {
    "name":"Rudolph",
    "numLegs":4,
    "furColor":"black",
    "speak":speak(),
    "code":code(),
};

document.getElementById("name").innerHTML = dog.name;
document.getElementById("numLegs").innerHTML = dog.numLegs;
document.getElementById("furColor").innerHTML = dog.furColor;
dog.speak;
dog.code;