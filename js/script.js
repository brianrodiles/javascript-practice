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

console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.furColor);
dog.speak;
dog.code;