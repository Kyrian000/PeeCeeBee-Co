// Solidify navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



    const menu = document.querySelector(".nav-menu");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    menuBtn.addEventListener("click", () => {
        menu.style.display = "flex";
        menuBtn.style.display = "none";
        closeBtn.style.display = "inline-block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
        closeBtn.style.display = "none";
    });

    var swiper = new Swiper(".facilities-slider", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 200,
        // centeredSlides: true,
        grabCursor:true,
        
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
      });
    