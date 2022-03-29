document.getElementById('greeting').innerText += " " + localStorage.getItem("user") + "!";
let count = 3;
setInterval(() => {
    count--;
    if(count < 0){
        document.getElementById('message').hidden = false;
        document.getElementById('yes').hidden = false;
    }
}, 1000)

function testing(){
    document.getElementById('yes').remove();
    document.getElementById('form').hidden = false;
    form.addEventListener('submit', (e) => {
        let message = '';
        let pass = document.getElementById("pass");
        let word = localStorage.getItem("pass");
        if(pass.value === '' || pass.value == null){
        message = 'Please fill out all the fields on the form to go home.';
        }
        else if(pass.value !== word){
            message = 'Passwords do not match!'
        }
        e.preventDefault();
        errorMessage.innerText = message;
        if(errorMessage.innerText == ''){
            goingHome();
        }
    })
}

function goingHome(){
    document.getElementById('form').remove();
    document.getElementById('redirectInfo').innerText = "Alright...\nRedirected in:";
    localStorage.clear();
    let counter = document.getElementById('redirectCounter');
        let count = 5;
        setInterval(() => {
            counter.innerText = count;
            count--;
            if(count <= 0) location.replace('/index.html');
        }, 1000)
}

