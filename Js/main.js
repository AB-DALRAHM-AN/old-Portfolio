var typed = new Typed(".text", {
  strings: ["A.A.A"],
  typeSpeed: 100,
  backSpeed: 100,
  backdelay: 1000,
  loop: true,
});

// Toggle the menu on burger icon click

document.addEventListener("DOMContentLoaded", function() {
  let burgerIcon = document.querySelector('.burger-icon');
  let menu = document.querySelector('.menu');
  let body = document.querySelector('body');

  burgerIcon.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click event from propagating to body
    menu.classList.toggle('active');
  });

  body.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !burgerIcon.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
});

// scroll effect
let obseerver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => {
  obseerver.observe(el);
}
);

// blur effect
let burgerIcon = document.querySelector('.burger-icon');
let footerCotent = document.querySelector('.footer');
let contentContainer = document.querySelector('.content-main');

burgerIcon.addEventListener('click', () => {
  contentContainer.classList.toggle('blur-content');
  footerCotent.classList.toggle('blur-content');
});


