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
    let counter = 5;
    form.addEventListener('submit', (e) => {
        let message = '';
        let pass = document.getElementById("pass");
        let word = localStorage.getItem("pass");
        if(counter <= 0){
            location.replace('https://giphy.com/gifs/bones-season-9-monday-night-6eQYX4B4OGjBK/fullscreen');
        }
        if(pass.value === '' || pass.value == null){
        message = 'Please fill out all the fields on the form to go home.';
        --counter;
        }
        else if(pass.value !== word){
            message = 'Passwords do not match!'
            --counter;
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
            if(count <= 0) location.replace('/index.html')
        }, 1000)
}

