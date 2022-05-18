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

// set nav menu active class

const menuItem = document.querySelectorAll('nav .menu-list a');

menuItem.forEach(link => {
  if (link.getAttribute('href') === (location.pathname)) {
    link.classList.add("active")
  }

})

const activeLink = document.querySelector('nav .menu-list a');

if (window.location.href.match(/\/(muzit|frontstream|biddingforgood)/)) {
  activeLink.classList.add("active")
}

// nav scroll function

var navbar = document.getElementById("nav");

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 2 || document.documentElement.scrollTop >= 2) {
        navbar.classList.add("scroll");
        document.getElementById("menu-svg").style.fill = "#fff";
    } else {
        navbar.classList.remove("scroll");
        document.getElementById("menu-svg").style.fill = "#333";
    }
};

// Lazy Load Video Function

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});

// HTML5 contact form validation

let submitted = false

// 1. Disable native validation UI with `noValidate`
// 2. On submit, run evaluation and prevent if necessary

const form = document.querySelector('form');

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

  // insert error after label tag used for floating labels
  for (const label of form.querySelectorAll('label')) {
    label.insertAdjacentHTML('afterend', '<div class="error"></div>')
  }

  for (const field of form.querySelectorAll('input, textarea')) {

    // Add error container
    //field.insertAdjacentHTML('afterend', '<div class="error"></div>')

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

      //field.nextSibling.textContent = field.validationMessage
      field.nextElementSibling.nextElementSibling.textContent = field.validationMessage

      // Reset invalid state & error message on `input` event, trigger validation check
      const inputHandler = () => {
        field.oninput = null
        field.nextElementSibling.nextElementSibling.textContent = ''
        field.classList.remove('invalid')
        field.checkValidity()
      }
      field.oninput = inputHandler
    }
  }
}
