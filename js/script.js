let audio = new Audio('/backgroundSong.mp3');
audio.volume = 0.5;
audio.loop = true;
audio.play();


const question = document.getElementById("question");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

const arrImages = [];
for(let i = 0; i <= 20; i++){
    arrImages[i] = `mB${i}.png`;
}

let opacity = 0;
let intervalID = 0;
let nextImage = '';

function fadeOut(){
    intervalID = setInterval(hide, 75);
}
function hide(){
    let img = document.getElementById('magicImage');
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity > 0){
        opacity -= 0.1;
        img.style.opacity = opacity;
        console.log(opacity);
    }
    else{
        clearInterval(intervalID);
        document.getElementById('magicImage').src = nextImage;
        fadeIn();
    }
}
function fadeIn(){
    intervalID = setInterval(show, 75);
}
function show(){
    let img = document.getElementById('magicImage');
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity < 1){
        opacity += 0.1;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}
form.addEventListener('submit', (e) => {
    let error = '';
    if(question.value === '' || question.value == null){
        error = 'Please ask me something.'
    }
    e.preventDefault();
    errorMessage.innerText = error;
    if(errorMessage.innerText == ''){
        const newItem = document.createElement('p');
        newItem.style.cssText = 'font-size: 25px;';
        newItem.innerText = "\nYou asked...\n" + question.value;
        form.parentNode.replaceChild(newItem, form);
        let randomIndex = Math.floor(Math.random() * (21 - 1)) + 1;
        let randomImage = arrImages[randomIndex];
        nextImage = `/imagesForRandom/${randomImage}`;
        fadeOut();
        let count = 3;
        setInterval(() => {
            count--;
            if(count < 0){
                document.getElementById('message').hidden = false;
                document.getElementById('yes').hidden = false;
                document.getElementById('no').hidden = false;
            }
        }, 1000);
        document.getElementById('yes').onclick = function(){goingHome()};
        document.getElementById('no').onclick = function(){goingToGoogle()};
    }
})

function goingHome(){
    document.getElementById('message').remove();
    document.getElementById('yes').remove();
    document.getElementById('no').remove();
    document.getElementById('redirectInfo').innerText = "Alright...\nRedirected in:";
    let counter = document.getElementById('redirectCounter');
        let count = 2;
        setInterval(() => {
            counter.innerText = count;
            count--;
            if(count <= 0) location.replace('/index.html');
        }, 1000)
}

function goingToGoogle(){
    document.getElementById('message').remove();
    document.getElementById('yes').remove();
    document.getElementById('no').remove();
    document.getElementById('redirectInfo').innerText = "Then look for your faith somewhere else.\nRedirected in:";
    let counter = document.getElementById('redirectCounter');
        let count = 5;
        setInterval(() => {
            counter.innerText = count;
            count--;
            if(count <= 0) location.replace('https://www.google.com/');
        }, 1000)
}