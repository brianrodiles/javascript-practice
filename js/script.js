function testPassword(){
    let flag = false;
    let warnMessage = "";
    let password = "";
    let i = 0;
    do{
        password = prompt("Please, enter a password with 6-20 characters.\nAlso, make sure that it starts with a letter:");
        if(password == null){
            alert("Please, enter a password.");
        }
        else{
            if(password.length < 5 || password.length > 21){
                warnMessage += `The password (${password}) is out of the 6-20 characters bound.`;
                i++;
            }
            if(!(/[a-zA-Z]/).test(password.charAt(0))){
                if(i != 0){
                    warnMessage += `\nAlso... \n`;
                }
                warnMessage += `The first character (${password.charAt(0)}) of the password (${password}) is not a character.`;
                i++;
            }
            if(i != 0){
                alert(warnMessage + `\nPlease, try again...`);
            }
            else{
                alert("Password accepted, thank you for using the service!");
                flag = true;
            }
        }
        i = 0;
        warnMessage = "";
    }while(!flag);
    return password;
}
testPassword();

// // Using single-line arrow function
// // This will not function because of isEvenOrOdd being an arrow function
// // doEvenOrOdd();

// // Wrapper function for isEvenOrOdd()
// function doEvenOrOdd(){
//     let flag = false;
//     let num;
//     do{
//         num = prompt("Please, enter a number:");
//         if(isNaN(num) || num == null){
//             alert("Please, enter a value that is a number.");
//         }
//         else{
//             flag = true;
//         }
//     }while(!flag)
//     alert(`${num} is ${isEvenOrOdd(num)}.`)
// }
// // Arrow function isEvenOrOdd()
// const isEvenOrOdd = num => num % 2 == 0 ? "even" : "odd";
// // Test for 1
// console.log(`1 is ${isEvenOrOdd(1)}.`);
// // Test for 2
// console.log(`2 is ${isEvenOrOdd(2)}.`);
// // Test general function
// doEvenOrOdd();