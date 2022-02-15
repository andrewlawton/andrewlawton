// mobile menu

var menuIcon = document.querySelector('.menu-icon');
var menu = document.querySelector('#menu');
var menuList = document.querySelector('.menu-list');

menuIcon.addEventListener('click', function() {
    if (menu.classList.contains('expanded')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('expanded');
    } else {
        this.setAttribute('aria-expanded', 'true');
        menu.classList.add('expanded');

        //menuItems[0].focus();
    }
});

// nav scroll function

var navbar = document.getElementById("nav");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 70 || document.documentElement.scrollTop >= 70) {
    navbar.classList.add("scroll");
    document.getElementById("menu-svg").style.fill = "#fff";

  } else {
    navbar.classList.remove("scroll");
    document.getElementById("menu-svg").style.fill = "#333";
  }
};

//add smooth scrolling when clicking any anchor link

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


// https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165

const links = document.querySelectorAll("a[href^="#"]");

//const links = document.querySelectorAll("a[href^="index.html#"]");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}




// HTML5 contact form validation

let submitted = false

// 1. Disable native validation UI with `noValidate`
// 2. On submit, run evaluation and prevent if necessary
const form = document.querySelector('form')
if (form !== null) {
  form.noValidate = true
  form.onsubmit = evt => {
    submitted = true
    setTimeout(() => {
      submitted = false
    }, 0)

    if (!form.checkValidity()) {
      evt.preventDefault()
    }
  }
  // Iterate over fields in form
  let invalidOnSubmit = false
  for (const field of form.querySelectorAll('input, textarea')) {

    // Add error container
    field.insertAdjacentHTML('afterend', '<div class="error"></div>')

    // Show message on `invalid` event
    field.oninvalid = () => {
      if (submitted && !invalidOnSubmit) {
        invalidOnSubmit = true
        setTimeout(() => {
          invalidOnSubmit = false
        }, 1000)

        field.focus()
      }

      field.classList.add('invalid')
      field.nextSibling.textContent = field.validationMessage

      // Reset invalid state & error message on `input` event, trigger validation check
      const inputHandler = () => {
        field.oninput = null
        field.nextSibling.textContent = ''
        field.classList.remove('invalid')
        field.checkValidity()
      }
      field.oninput = inputHandler
    }
  }
}