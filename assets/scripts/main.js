const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navlinks a');
const darkModeIcons = document.querySelector('.darkmode__icons');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const sections = document.querySelectorAll('section');
const filterBtn = document.querySelectorAll('.btn-filter');
const filterProjects = document.querySelectorAll('.projects__cards .project__card');
const topo = document.querySelector('.topo');
const openModal = document.getElementById('modal-email');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const overlayModal = document.getElementById('overlay-modal');
const contactCardEmail = document.querySelector('.email');
const contactCardEmailIcon = document.querySelector('.email svg');
let darkmode = localStorage.getItem("dark-mode");

 function darkModeEnabled() {
    sun.classList.add('active');
    moon.classList.add('active');
    localStorage.setItem("dark-mode", 'Modo escuro ativado');
    body.classList.add('darkmode');
}

 function darkModeDisabled() {
    sun.classList.remove('active');
    moon.classList.remove('active');
    localStorage.setItem("dark-mode", 'Modo escuro desativado');
    body.classList.remove('darkmode');
}

if (darkmode === 'Modo escuro ativado') {
    darkModeEnabled();
}

darkModeIcons.addEventListener('click', () => {
    darkmode = localStorage.getItem("dark-mode");
    if (darkmode === 'Modo escuro desativado') {
        darkModeEnabled();
    } else {
        darkModeDisabled();
    }
});

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    function menuClose() {
        burger.classList.remove("active");
        menu.classList.remove("active");
        overlay.classList.remove("active");
    }

    menuClose();
});

 function linkActive(){
     this.classList.add("active");
     burger.classList.remove("active");
     menu.classList.remove("active");
     overlay.classList.remove("active");
 };

navLinks.forEach(i => i.addEventListener('click', linkActive));
 
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (this.window.innerWidth <= 600) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }else {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

this.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navlinks a[href*=' + id + ']').classList.add("active");
            });
        };
    });
};

topo.addEventListener('click', () => {
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {topScroll()})

function topScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 250){
        topo.classList.add('mostrarTopo');
    }else {
        topo.classList.remove('mostrarTopo');
    }
};

openModal.addEventListener('click', () => {
    modal.classList.add('showModal');
    overlayModal.classList.add('showOverlay');
    contactCardEmail.classList.add('active');
    contactCardEmailIcon.classList.add('active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('showModal');
    overlayModal.classList.remove('showOverlay');
    contactCardEmail.classList.remove('active')
    contactCardEmailIcon.classList.remove('active')
});

ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 400
});

ScrollReveal().reveal('.main-content .socials a', { delay: 2000, origin: 'bottom' });
ScrollReveal().reveal('.main-content h2', { delay: 1500, origin: 'bottom' });
ScrollReveal().reveal('.main-content h4', { delay: 1000, origin: 'bottom' });
ScrollReveal().reveal('.main-content .buttons', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.main .imageBox', { delay: 250, origin: 'right' });

ScrollReveal().reveal('.about-content h2', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.about-content p', { delay: 500, origin: 'top' });

ScrollReveal().reveal('.skills__title', { delay: 400, origin: 'bottom' });
ScrollReveal().reveal('.skill', { interval: 300, scale: 0.85 });

ScrollReveal().reveal('.box__text .heading', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.carousel-projects', { delay: 400, origin: 'bottom' });

ScrollReveal().reveal('.contact__heading', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.contact__card', { interval: 250, origin: 'top' });

var carousel = new Swiper('.carousel-projects', {
    slidesPerView: 3,
    navigation: {
        prevEl: '.carousel-button-prev',
        nextEl: '.carousel-button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        240: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        680: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
})