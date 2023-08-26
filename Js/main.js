var typed = new Typed(".text", {
  strings: ["A.A.A"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

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

// scroll effect
let obseerver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  obseerver.observe(el);
});

// blur effect
let burgerIcon = document.querySelector(".burger-icon");
let footer = document.querySelector(".footer");
let contentContainer = document.querySelector(".content-main");
let about = document.querySelector(".about");
let progects = document.querySelector(".content-proj");
let marketContent = document.querySelector(".content-market");
let blogContent = document.querySelector(".content-blog");
let contactContent = document.querySelector(".content-contact");

// content blur on main page
burgerIcon.addEventListener("click", () => {
  contentContainer.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});

// content blur on about page
let burgerIconAbout = document.querySelector(".burger-icon");

burgerIconAbout.addEventListener("click", () => {
  about.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});

// content blur on progects page
let burgerIconProgects = document.querySelector(".burger-icon");

burgerIconProgects.addEventListener("click", () => {
  progects.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});

// content blur on market page
let burgerIconMarket = document.querySelector(".burger-icon");

burgerIconMarket.addEventListener("click", () => {
  marketContent.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});

// content blur on blog page
let burgerIconBlog = document.querySelector(".burger-icon");

burgerIconBlog.addEventListener("click", () => {
  blogContent.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});

// content blur on contact page
let burgerIconContact = document.querySelector(".burger-icon");

burgerIconContact.addEventListener("click", () => {
  contactContent.classList.toggle("blur-content");
  footer.classList.toggle("blur-content");
});
