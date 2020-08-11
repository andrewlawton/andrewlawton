$(document).ready(function() {

  /* Page Animations */
  if (document.documentElement.clientWidth >= 320) {

    $('#example1').addClass('invisible').on("inview",function() {
      setTimeout(function(){
        $('#example1').addClass('animated fadeInLeft');
      }, 100);
    });

    $('#example2').addClass('invisible').on("inview",function() {
      setTimeout(function(){
        $('#example2').addClass('animated fadeInRight');
      }, 400);
    });
  }

  /* Window Resize Events */
  // $(window).resize(function() {
  //   if (document.documentElement.clientWidth >= 320) {
  //     work();
  //   }
  //   process();
  //   work();
  // });

  /* Window Scroll Events */
  // $(window).scroll(function(){
  //   if (document.documentElement.clientWidth >= 320) {
  //     nav();
  //   }
  // });

});
