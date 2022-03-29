






/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services-modal');
    modalBtns = document.querySelectorAll('.services-btn');
    molalClose = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

molalClose.forEach((mc) =>{
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

// ========filter-works=========

let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// -------link-active-work-------
const linkWork = document.querySelectorAll('.work-item');

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work') )
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))

// =======swiper Testimonial======
let swiperTestimonial = new Swiper(".testimonial-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

//   ========scroll section active link======
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{ 
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ========Scroll Reveal Animation=========
ScrollReveal().reveal('.home-data', {
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
});

ScrollReveal().reveal('.home-social', {
    origin: 'bottom',
    distance: '30px',
    duration: 2500,
    delay: 400,
}) ;
