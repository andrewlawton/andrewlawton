
$(function() {

  // scroll function

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

  // hide drop down
  $(window).resize(function(){
    var winwidth = $(window).innerWidth();
    if (winwidth > 768) {
      $('ul').css('display','');
    }
  });

  // show dropdown onclick
  $('.nav-container').on('click', function(e) {
    e.preventDefault();
    var winwidth = $(window).innerWidth();
    if (winwidth < 768) {
      $('ul').slideToggle('fast');
    }
  });

});

// contact form validation

$(function() {
    // validate the comment form when it is submitted
    $("#contactForm").validate({
      rules: {
        fullname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        comment: {
          required: true,
          minlength: 2
        },
      },
      messages: {
        fullname: "Please enter your full name",
        email: "Please enter a valid email address",
        comment: "Please add a comment"
      }
    });

});