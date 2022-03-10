// Using single-line arrow function
// This will not function because of isEvenOrOdd being an arrow function
// doEvenOrOdd();

// Wrapper function for isEvenOrOdd()
function doEvenOrOdd(){
    let flag = false;
    let num;
    do{
        num = prompt("Please, enter a number:");
        if(isNaN(num) || num == null){
            alert("Please, enter a value that is a number.");
        }
        else{
            flag = true;
        }
    }while(!flag)
    alert(`${num} is ${isEvenOrOdd(num)}.`)
}
// Arrow function isEvenOrOdd()
const isEvenOrOdd = num => num % 2 == 0 ? "even" : "odd";
// Test for 1
console.log(`1 is ${isEvenOrOdd(1)}.`);
// Test for 2
console.log(`2 is ${isEvenOrOdd(2)}.`);
// Test general function
doEvenOrOdd();