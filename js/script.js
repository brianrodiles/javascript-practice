const userName = document.getElementById('userName');
const psswd = document.getElementById('psswd');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    let message = '';
    if(userName.value === '' || userName.value == null){
        message = 'Please fill out all the fields on the form.';
    }
    else if(psswd.value === '' || psswd.value == null){
        message = 'Please fill out all the fields on the form.';
    }
    else if(userName.value !== 'admin' || psswd.value !== '132'){
        message = 'Incorrect credentials, please try again.';
    }
    e.preventDefault();
    errorMessage.innerText = message;
    if(errorMessage.innerText == ''){
        document.getElementById('form').hidden = true;
        document.getElementById('infoDisp').innerText = "Nice, remember that...\nyour username is [" + document.getElementById('userName').value + "],\n" + "and your password is [" + document.getElementById('psswd').value + "]."
    }
})