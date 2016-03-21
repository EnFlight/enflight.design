(function($){
 
    $.fn.extend({
        
        navResponsive: function() {
 
            return this.each(function() {
                var nav = $(this);
        
                // s-collapse menu items
        
                nav.find('.nav-menu').find('li a').on('click',function(e){
                    var ul = $(this).siblings('ul');
                    if(ul.length){ e.preventDefault(); }
                    if($(this).closest('nav').hasClass('s-collapse'))
                    {
                        ul.find('ul').hide();
                        ul.find('a .s-collapse-trigger').removeClass('active').text('+');
                        if(ul.is(':hidden')){ $(this).find('.s-collapse-trigger').addClass('active').text('-'); }
                        else{ $(this).find('.s-collapse-trigger').removeClass('active').text('+'); }
                        ul.slideToggle(100);        
                    }   
                });
                
                /* s-collapse entire menu */
                
                nav.find('.s-collapse-trigger').click(function(e){
                    e.preventDefault();
                    var nav = $(this).siblings('.nav-menu');
                    if(nav.is(':hidden')){ $(this).addClass('active').text('-'); }
                    else{ $(this).removeClass('active').text('+'); } 
                    $(this).siblings('.nav-menu').slideToggle();
                });
                
                /* set s-collapse based on nav size */
                
                var defaultWidth = 0;
                nav.find('.nav-menu').each(function(){
                    defaultWidth += $(this).outerWidth();
                }); 
                if(nav.innerWidth() < defaultWidth + 150){
                    nav.addClass('s-collapse'); 
                    nav.find('.nav-menu').slideUp(500);
                }
                
                $(window).resize(function(){
                    var el = nav.find('.nav-menu');
                    if(nav.innerWidth() < defaultWidth + 150)
                    {
                        if(!nav.hasClass('s-collapse'))
                        {
                            nav.addClass('s-collapse', 300);
                            el.find('ul').hide();
                            el.hide();
                            nav.find('.s-collapse-trigger').removeClass('active').text('+');
                        }   
                    }
                    else
                    {
                        if(nav.hasClass('s-collapse'))
                        {
                            nav.find('.s-collapse-trigger:last').addClass('active').text('-');      
                            nav.removeClass('s-collapse', 300);         
                            el.find('ul').show();
                            el.fadeIn();                    
                        }   
                    }
                });
            
            });
        }
    });
     
})(jQuery);

