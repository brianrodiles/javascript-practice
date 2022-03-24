const question = document.getElementById("question");
const form = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");

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
        newItem.innerHTML = question.value;
        form.parentNode.replaceChild(newItem, form);
        document.getElementById('answers').innerText = 'Yes!'
    }
})
