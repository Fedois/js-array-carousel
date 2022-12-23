const img = [
'img/01.webp',
'img/02.webp',
'img/03.webp', 
'img/04.webp', 
'img/05.webp'
];

const slides = document.querySelector('.slides');

for(let i = 0; i < img.length; i++){

    slides.innerHTML += `<div class="slide">
                            <img src="${img[i]}">
                         </div>`;
}

let primaSlide = 0
const slide = document.querySelectorAll('.slide');
slide[primaSlide].classList.add('display');



const next = document.querySelector('.next');
const back = document.querySelector('.back');

next.addEventListener('click',
    function() {
        
        slide[primaSlide].classList.remove('display');
        primaSlide = primaSlide + 1; 
        slide[primaSlide].classList.add('display');

        back.style.display = 'block'

        if(primaSlide == img.length - 1) {
        next.style.display = 'none'
        }
    }
   
)

back.addEventListener('click',
    function() {
        
        slide[primaSlide].classList.remove('display');
        primaSlide = primaSlide - 1; //oppure si può scrivere cosi:
        //primaSlide++
        //primaSlide += 1
        slide[primaSlide].classList.add('display');

        next.style.display = 'block'

        if(primaSlide == 0) {
        back.style.display = 'none'
        }
    
    }
   
)

