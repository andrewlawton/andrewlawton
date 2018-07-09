$(function() {

	var sections = $('section'),
		nav = $('nav'),
		nav_height = nav.outerHeight();

	$(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop();


		if ($(window).scrollTop() > 400) {
			$("nav").fadeIn(500);
		} else {
			$("nav").fadeOut(500);
		}

		sections.each(function() {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});

	nav.find('a').on('click', function() {
		var $el = $(this),
			id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top - nav_height
		}, 500);

		return false;
	});

});


$(function() {
		// validate the comment form when it is submitted
		// $("#contactForm").validate();

		// validate signup form on keyup and submit
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