// blur effect
let burgerIcon = document.querySelector(".burger-icon");
let footer = document.querySelector(".footer");
let contentContainer = document.querySelector(".content-main");
let about = document.querySelector(".about");
let progects = document.querySelector(".content-proj");
let marketContent = document.querySelector(".content-market");
let blogContent = document.querySelector(".content-blog");
let contactContent = document.querySelector(".content-contact");

// scroll effect gsap
document.addEventListener("DOMContentLoaded", function() {
  gsap.from(".content-main .name .hey", 1.5, { opacity: 0, x: -100, delay: 0.4 });
  gsap.from(".content-main .name .myName", 1.5, { opacity: 0,  x: -100, delay: 0.5 });
  gsap.from(".content-main .about1", 1.5, { opacity: 0, x: -100, delay: 0.6 });
  gsap.from(".content-main .about2", 1.5, { opacity: 0, x: -100, delay: 0.8 });
  gsap.from(".content-main .about2 .text2 span", 1.5, { opacity: 0, x: -100, delay: 1 });
  gsap.from(".content-main .contacts", 1.5, { opacity: 0, x: -100, delay: 1 });
  gsap.from(".about .main-header", 1.5, { opacity: 0, x: -100, delay: 0.3 });
  gsap.from(".about-me .image", 1.5, { opacity: 0, x: 100, delay: 0.5 });
  gsap.from(".about-me .about-cont .p1", 1.5, { opacity: 0, y: -100, delay: 1 });
  gsap.from(".about-me .about-cont .p1 span", 1.5, { opacity: 0, x: -100, delay: 1.1 });
  gsap.from(".about-me .about-cont .p2", 1.5, { opacity: 0, x: -100, delay: 1.5 });
  gsap.from(".about-me .about-cont .p2 span", 1.5, { opacity: 0, x: -100, delay: 1.6 });
  gsap.from(".about-me .about-cont .p3", 1.5, { opacity: 0, y: 100, delay: 2 });
  gsap.from(".about-me .about-cont .p3 span", 1.5, { opacity: 0, x: -100, delay: 2.1 });
  gsap.from(".content-proj .header-text h2", 1.5, { opacity: 0, x: -100, delay: 0.5 });
  gsap.from(".content-proj .header-text p", 1.5, { opacity: 0, x: -100, delay: 0.8 });
  gsap.from(".content-proj .proj1", 1.5, { opacity: 0, x: -100, delay: 1 });
  gsap.from(".content-proj .proj2", 1.5, { opacity: 0, x: 100, delay: 1 });
  gsap.from(".content-contact .toch1", 1.5, { opacity: 0, x: -100, delay: 0.3 });
  gsap.from(".content-contact .toch2", 1.5, { opacity: 0, x: -100, delay: 0.6 });
  gsap.from(".content-contact .toch2 span", 1.5, { opacity: 0, x: -100, delay: 0.9 });
  gsap.from(".content-contact .toch3", 1.5, { opacity: 0, x: -100, delay: 0.9 });
  gsap.from(".content-contact .contacts", 1.5, { opacity: 0, x: -100, delay: 1.2 });
});

var typed = new Typed(".text", {strings: ["A.A.A"], typeSpeed: 100, backSpeed: 100, backdelay: 1000, loop: true,});

// Toggle the menu on burger icon click
document.addEventListener("DOMContentLoaded", function () {
  let burgerIcon = document.querySelector(".burger-icon");
  let menu = document.querySelector(".menu");
  let body = document.querySelector("body");

  burgerIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent click event from propagating to body
    menu.classList.toggle("active");
  });

  body.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !burgerIcon.contains(e.target)) {
      menu.classList.remove("active");
    }
  });
});

// Define a function to toggle the blur effect
function toggleBlur() {
  if (contentContainer) {
    contentContainer.classList.toggle("blur-content");
  }
  if (footer) {
    footer.classList.toggle("blur-content");
  }
  if (about) {
    about.classList.toggle("blur-content");
  }
  if (progects) {
    progects.classList.toggle("blur-content");
  }
  if (marketContent) {
    marketContent.classList.toggle("blur-content");
  }
  if (blogContent) {
    blogContent.classList.toggle("blur-content");
  }
  if (contactContent) {
    contactContent.classList.toggle("blur-content");
  }
};

burgerIcon.addEventListener("click", toggleBlur);