/* 패럴럭스 */
    
$(function(){
    var $lightbox = $(".lightbox > a");
    
    /* portfolio2 */
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if( wScroll >= $lightbox.eq(0).offset().top - $(window).height()/3 ){
            $lightbox.eq(0).addClass("show");
        }
        if( wScroll >= $lightbox.eq(1).offset().top - $(window).height()/3 ){
            $lightbox.eq(1).addClass("show");
        }
        if( wScroll >= $lightbox.eq(2).offset().top - $(window).height()/3 ){
            $lightbox.eq(2).addClass("show");
        }
        if( wScroll >= $lightbox.eq(3).offset().top - $(window).height()/3 ){
            $lightbox.eq(3).addClass("show");
        }
        if( wScroll >= $lightbox.eq(4).offset().top - $(window).height()/3 ){
            $lightbox.eq(4).addClass("show");
        }
        if( wScroll >= $lightbox.eq(5).offset().top - $(window).height()/3 ){
            $lightbox.eq(5).addClass("show");
        }
        if( wScroll >= $lightbox.eq(6).offset().top - $(window).height()/3 ){
            $lightbox.eq(6).addClass("show");
        }
        if( wScroll >= $lightbox.eq(7).offset().top - $(window).height()/3 ){
            $lightbox.eq(7).addClass("show");
        }
        
    });
    
}); /* function */