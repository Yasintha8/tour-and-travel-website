//---------------------toggle menu in responsive mode------------------------------//

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class" ,isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "ri-menu-3-line");
});

//------------------------------Hero section Animation----------------------------------------------------------//

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration:"1000",
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
    interval: 500,      // eka image ekakata passe anith image eka enna yana welawa//
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay: 2500,
});

//---------------------About us section Animation-----------------------//

ScrollReveal().reveal(".choose_image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".choose_content .section_subheader ", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".choose_content .section_header ", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".choose_content .choose_list li", {
    ...scrollRevealOption,
    delay:1500,
    interval:500,
});

//-----------------popular destination section animation------------------//

const swiper = new Swiper(".swiper", {
   slidesPerView: 3,
   spaceBetween: 0,
   loop: true,
   autoplay: {
    delay: 3000,
   }
    
});

//-----------------Explore section Animation---------------------------//

ScrollReveal().reveal(".explore_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".explore_content .section_subheader ", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".explore_content .section_header ", {
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".explore_content .section_description ", {
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".explore_content .explore_btn", {
    ...scrollRevealOption,
    delay:2000,
});

ScrollReveal().reveal(".explore_grid div", {
    duration:1000,
    delay:2500,
    interval:500,
});


//-----------------Testimonials Section Animation-------------------------------------//

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client_card"));

next.addEventListener("click", (e) => {
    for (let index = 0; index < clientCards.length; index++) {
        if (clientCards[index].classList.contains("active")) {
            const nextIndex = (index + 1) % clientCards.length;
            clientCards[index].classList.remove("active");
            clientCards[nextIndex].classList.add("active");
            break;
        }
    }
});

prev.addEventListener("click", (e) => {
    for (let index = 0; index < clientCards.length; index++) {
        if (clientCards[index].classList.contains("active")) {
            const prevIndex = (index ? index : clientCards.length)- 1;
            clientCards[index].classList.remove("active");
            clientCards[prevIndex].classList.add("active");
            break;
        }
    }
});

//---------------------------Subscribe Section Animation---------------------------//

ScrollReveal().reveal(".subscribe_container .section_header", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".subscribe_container .section_description", {
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".subscribe_container form", {
    ...scrollRevealOption,
    delay:1000,
});


