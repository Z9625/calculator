let input = document.querySelector('#input')
let push = document.querySelector('#push')
let randomElements = document.querySelector('.random-elements')
let randomBtn = document.querySelector('.randomBtn')
let h1 = document.querySelector('#h1')
let h1Div = document.querySelector('.h1-div')

push.addEventListener('click', () => {
    if (input.value.length > 0) {
        let li = document.createElement('li')
        randomElements.appendChild(li)
        li.textContent = input.value
        input.value = ''
        li.style.listStyle = 'decimal-leading-zero'
    } else {
        alert('Input is empty')
    }
})

randomBtn.addEventListener('click', () => {
    let nams = document.querySelectorAll('li')
    if (nams.length === 0) {
        alert('I can\'t find elements')
        return
    }
    let num = Math.floor(Math.random() * nams.length); // +1 olib tashlandi
    h1.innerHTML = nams[num].textContent
    randomElements.innerHTML = ''
    // randomElements.style.display = 'flex'
    // randomElements.style.justifyContent = 'center'
    // randomElements.style.alignItems = 'center'
    h1Div.style.display = 'flex'
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (input.value.length > 0) {
            let li = document.createElement('li')
            randomElements.appendChild(li)
            li.textContent = input.value
            input.value = ''
            li.style.listStyle = 'decimal-leading-zero'
        } else {
            alert('Input bosh')
        }
        console.log('You\'re click the \'Enter\'');
    }
})

window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    let mainSection = document.querySelector(".main-section");


    setTimeout(() => {
        loader.style.display = "none";
        mainSection.style.display = "block";
    }, 2500);
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '=') {
        let nams = document.querySelectorAll('li')
        if (nams.length === 0) {
            alert('Hech qanday element topilmadi!')
            return
        }
        let num = Math.floor(Math.random() * nams.length); // +1 olib tashlandi
        h1.innerHTML = nams[num].textContent
        randomElements.innerHTML = ''
        h1Div.style.display = 'flex'
        e.preventDefault();     // Brauzerning standart hodisasini to‘xtatadi
        e.stopPropagation();    // Event boshqa joyga tarqalmasligini ta'minlaydi
        input.blur()
        if(h1Div.innerHTML === ''){
            h1.textContent === 'Error (Elements underfined)'
        }
    }
})

input.addEventListener('input', ()=>{
    h1Div.style.display = 'none'
})