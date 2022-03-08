let firstName = prompt("Please enter your first name:");
let lastName = prompt("Please enter your last name:");
console.log("This is your first name: " + firstName.toUpperCase());
alert("This is your last name: " + lastName.toLowerCase());

function getUserBirth(){
    let userBirth = prompt("Please enter your birthday in form mm/dd/yy:");
    let userPreference = "";
    let question = "So, is your birthday really on " + userBirth + "?";
    let i = 0;
    while(userPreference != "Yes"){
        if(confirm(question) == true){
            userPreference = "Yes";
        }
        else{
            userPreference = "No";
        }
        if(userPreference == "No" && i % 2 == 0){
            question = "";
            question = "Are you kidding me?\n" + "So, is your birthday really on " + userBirth + "?";
        }
        if(userPreference == "No" && i % 2 != 0){
            question = "";
            question = "Be honest with me.\n" + "So, is your birthday really on " + userBirth + "?";
        }
        if(i == 5){
            return getUserBirth();
        }
        i++;
    }
    return userBirth
}
alert("Nice, I will assume your birthday is on " + getUserBirth() + ".");
