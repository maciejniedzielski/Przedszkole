AOS.init();
$(document).ready(function(){
  $('a[href*="#"]:not([href="#"])').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-90
        }, 600);
        window.location.hash = this.hash;
    }
  });

  $(".nav-link").on("click", function(){
     $(".navbar-nav").find(".active").removeClass("active");
     $(this).addClass("active");
  });
});
