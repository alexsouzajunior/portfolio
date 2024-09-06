const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navlinks a');
const sections = document.querySelectorAll('section');
const filterBtn = document.querySelectorAll('.btn-filter');
const filterProjects = document.querySelectorAll('.projects__cards .project__card');
const topo = document.querySelector('.topo');
const openModal = document.getElementById('modal-email');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');
const overlayModal = document.getElementById('overlay-modal')
const contactCardEmail = document.querySelector('.email')
const contactCardEmailIcon = document.querySelector('.email svg')

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

// var typed = new Typed(".type", {
//     strings: ["Alexsandro"],
//     typeSpeed: 70,
//     backSpeed: 70,
// });

this.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
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