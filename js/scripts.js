const img = [
'img/01.webp',
'img/02.webp',
'img/03.webp', 
'img/04.webp', 
'img/05.webp'
]
console.log('immagini: ', img);

const slides = document.querySelector('.slides');

for(let i = 0; i < img.length; i++){

    slides.innerHTML += `<div class="slide">
                            <img src="${img[i]}">
                         </div>`
}

let slide = document.querySelectorAll('.slide')
slide[0].classList.add('display') 



const next = document.querySelector('.next')
const back = document.querySelector('.back')

