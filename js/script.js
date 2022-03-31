let audio = new Audio('/chill.mp3');
audio.volume = 0.5;
audio.play();

const userName = document.getElementById('userName');
const psswd = document.getElementById('psswd');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

// document.getElementById('button').disabled = true;

form.addEventListener('submit', (e) => {
    let message = '';
    if(userName.value === '' || userName.value == null){
        message = 'Please fill out all the fields on the form.';
    }
    else if((psswd.value === '' || psswd.value == null) && (repPsswd.value !== '' || repPsswd.value != null)){
        message = 'Please provide a password before confirming.';
    }
    // Checking if the password is between 6-20 characters
    else if((psswd.value !== '' || psswd.value != null)){
        if(!/^.{6,20}$/.test(psswd.value)){
        message = '\nPassword should be between 6-20 characters.'
        }
        // Checking if the password has at least one numeric digit
        if(!/.\d/.test(psswd.value)){
            message += '\nPassword should have at least one numeric digit.'
        }
        // Checking if the password has at least one uppercase letter
        if(!/.[A-Z]/.test(psswd.value)){
            message += '\nPassword should have at least one uppercase letter.'
        }
        // Checking if the password has at least one lowercase letter
        if(!/.[a-z]/.test(psswd.value)){
            message += '\nPassword should have at least one lowercase letter.'
        }
        if(repPsswd.value === '' || repPsswd.value == null){
            message += '\nPlease confirm your password.';
        }
        else if(psswd.value !== repPsswd.value){
            message = 'Passwords do not match.';
        }
    }
    e.preventDefault();
    errorMessage.innerText = message;
    if(errorMessage.innerText == ''){
        document.getElementById('submitButton').hidden = true;
        localStorage.setItem("user", document.getElementById('userName').value);
        let user = localStorage.getItem("user");
        localStorage.setItem("pass", document.getElementById('psswd').value);
        let pass = localStorage.getItem("pass");
        document.getElementById('infoDisp').innerText = "Nice, remember that...\nyour username is [" + user + "],\n" + "and your password is [" + pass + "]."
        document.getElementById('redirectInfo').innerText = "Redirected in:";
        let counter = document.getElementById('redirectCounter');
        let count = 5;
        setInterval(() => {
            counter.innerText = count;
            count--;
            if(count <= 0) location.replace('/session.html');
        }, 1000)
    }
})