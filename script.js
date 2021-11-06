const change = document.querySelectorAll('.change');
const box = document.querySelector('.box');
const gallery = ['img/cat-g1.jpg', 'img/cat-g2.jpg', 'img/cat-g3.jpg', 'img/cat-g4.jpg','img/cat-g5.jpg','img/cat-g6.jpg'
]
const dots = document.querySelectorAll('.fa-circle');
let i = 0

change.forEach(element => {
  
    element.addEventListener('click', (e) => {
       box.style.backgroundImage = `url('')`
        if (element.id === 'left') {
            dots[i].classList.remove('active')
           i--
           if(i<0){i=5}
           box.style.backgroundImage = `url(${gallery[i]})`
           
           dots[i].classList.add('active')
           
            }
           
         else {
            dots[i].classList.remove('active')
           i++
           if(i>5){i=0}
           
            box.style.backgroundImage = `url(${gallery[i]})`
            dots[i].classList.add('active')
        }

    })
})