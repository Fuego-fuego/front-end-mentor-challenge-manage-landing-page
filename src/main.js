const primaryHeader = document.querySelector("#primary-header");
const primaryNav = document.querySelector("#primary-navigation");
const mobileNavToggle = document.querySelector("#mobile-nav-toggle");

mobileNavToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible")
    ? mobileNavToggle.setAttribute("aria-expanded", false)
    : mobileNavToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");


});

const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: false, // arrows enabled 767px and down
    dots: true,
    centerMode: true,
    responsive: {
        480: {            
            arrows: false,
            slidesToShow: 2
        },
        880: {        
            slidesToShow: 3,     
            dots: false,
        },
        1280: {
            slidesToShow: 4,
            
        },
    },
});
