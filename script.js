let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let search = document.querySelector('#search');
let searchForm = document.querySelector('.search-form');
let contact = document.querySelector('.contact-info')
let cancel = document.querySelector('#close-contact-info')
let actContact = document.querySelector('.contact')

search.onclick = () =>{
    searchForm.classList.toggle('active'); // it finally worked
    navbar.classList.remove("active");
    menubtn.classList.remove('fa-times');
    cancel.classList.remove('active');
}

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    menubtn.classList.toggle('active');
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cancel.classList.remove('active');
}

actContact.onclick = () =>{
    navbar.classList.remove("active");
    contact.classList.toggle('active');
    cancel.classList.remove('active');
    searchForm.classList.remove('active');
    menubtn.classList.remove('fa-times');
    
}

cancel.onclick = () =>{
    contact.classList.remove('active');
    cancel.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    menubtn.classList.remove('fa-times');
    };
// search.onclick = () =>{
//     searchForm.classList.toggle('active');
// }


var swiper = new Swiper(".home-slider",{
    loop:true,
    grabCursor:true,
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
} );

var swiper = new Swiper(".review-slider",{
    loop:true,
    effect: "coverflow",
    grabCursor:true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 120,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

} );











































// let search = document.querySelector("#search");
// let searchForm = document.querySelector(".search-form");
// let menubar = document.querySelector("#menu-bar");
// let mymenubar = document.querySelector(".navbar");



// // const toggleButton = document.querySelector('.icons');
        
// // toggleButton.addEventListener('click', () => {
// //     const icon = toggleButton.querySelector('div');
// //     icon.classList.toggle('fa-bars');
// //     icon.classList.toggle('fa-times');
    
// // });


// menubar.onclick = () =>{
//     menubar.classList.toggle("fas fa-times");
    
// }

// // window.onscroll = () =>{
// //     searchForm.classList.remove('active');
// //     };