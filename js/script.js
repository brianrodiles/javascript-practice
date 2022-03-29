const userName = document.getElementById('userName');
const psswd = document.getElementById('psswd');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    let message = '';
    if(userName.value === '' || userName.value == null){
        message = 'Please fill out all the fields on the form.';
    }
    else if((psswd.value === '' || psswd.value == null) && (repPsswd.value !== '' || repPsswd.value != null)){
        message = 'Please provide a password before confirming.';
    }
    // else if((psswd.value === '' || psswd.value == null) && (repPsswd.value === '' || repPsswd.value == null)){
    //     message = 'Please fill out all the fields on the form.';
    // }
    else if(repPsswd.value === '' || repPsswd.value == null){
        message = 'Please confirm your password.';
    }
    else if(psswd.value !== repPsswd.value){
        message = 'Passwords do not match.';
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