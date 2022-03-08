function greatNum(){
    let num1 = prompt("Enter a number:", 0);
    let num2 = prompt("Enter another number:", 0);
    intNum1 = parseInt(num1);
    intNum2 = parseInt(num2);
    if(intNum1 === intNum2){
        alert("Both numbers are the same.");
    }
    else if(isNaN(intNum1) || isNaN(intNum2)){
        alert("Please enter a value for both numbers.\nTry again...");
        greatNum();
    }
    else if(intNum1 > intNum2){
        alert(`${intNum1} is greater than ${intNum2}.`);
    }
    else{
        alert(`${intNum2} is greater than ${intNum1}.`);
    }
    let sum = intNum1 + intNum2;
    switch(sum % 2){
        case 0:
            alert(`The sum of both numbers, ${sum}, is a multiple of two.`);
            break;
        case 1:
            alert(`The sum of both numbers, ${sum}, is not multiple of two.`);
            break;
    }
    return(intNum1 > intNum2 ? intNum1 : intNum2);
}

console.log(`The greatest of both numbers at the end was ${greatNum()}.`);