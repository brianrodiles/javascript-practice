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
    else if(repPsswd.value === '' || repPsswd.value == null){
        message = 'Please fill out all the fields on the form.';
    }
    else if(psswd.value !== repPsswd.value){
        message = 'Passwords do not match.';
    }
    e.preventDefault();
    errorMessage.innerText = message;
    if(errorMessage.innerText == ''){
        document.getElementById('submitButton').hidden = true;
        sessionStorage.setItem("user", document.getElementById('userName').value);
        let user = sessionStorage("user");
        sessionStorage.setItem("pass", document.getElementById('psswd').value);
        let pass = sessionStorage("pass");
        document.getElementById('infoDisp').innerText = "Nice, remember that...\nyour username is [" + user + "],\n" + "and your password is [" + pass + "]."
    }
})