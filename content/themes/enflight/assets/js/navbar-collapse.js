$('a[href^=#]').on('click', function(e){ var href = $(this).attr('href'); $('html, body').animate({ scrollTop:$(href).offset().top },'slow'); e.preventDefault(); });



/* ----------------------------- 
Backgroung slider
----------------------------- */
$(window).ready(function() {
    'use strict';
    $.vegas('slideshow', {
      backgrounds:[
        { src:'img/bg-slider/bg-1.jpg', fade:3000 },
        { src:'img/bg-slider/bg-2.jpg', fade:3000 },
        { src:'img/bg-slider/bg-3.jpg', fade:3000 }
      ]
    })();
});
