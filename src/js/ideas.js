
let accordions = document.querySelectorAll('.ideas__accordion');
let show = document.querySelector('.ideas__text');

accordions.forEach(function(accordion){
    accordion.children[2].addEventListener('click', function(){
        accordion.classList.toggle('ideas__accordion-active')
//        if(accordion.classList === 'ideas__accordion-active') {
//           return show.innerHTML = 'подробнее'
//        } else {
//        return show.innerHTML = 'less'
//        }

    })
})









