/* 패럴럭스 */
    
$(function(){
    var $lightbox = $(".lightbox > a");
    
    /* portfolio2 */
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if( wScroll >= $lightbox.eq(0).offset().top - $(window).height()/2 ){
            $lightbox.eq(0).addClass("show");
        }
        if( wScroll >= $lightbox.eq(1).offset().top - $(window).height()/2 ){
            $lightbox.eq(1).addClass("show");
        }
        if( wScroll >= $lightbox.eq(2).offset().top - $(window).height()/2 ){
            $lightbox.eq(2).addClass("show");
        }
        if( wScroll >= $lightbox.eq(3).offset().top - $(window).height()/2 ){
            $lightbox.eq(3).addClass("show");
        }
        if( wScroll >= $lightbox.eq(4).offset().top - $(window).height()/2 ){
            $lightbox.eq(4).addClass("show");
        }
        if( wScroll >= $lightbox.eq(5).offset().top - $(window).height()/2 ){
            $lightbox.eq(5).addClass("show");
        }
        if( wScroll >= $lightbox.eq(6).offset().top - $(window).height()/2 ){
            $lightbox.eq(6).addClass("show");
        }
        if( wScroll >= $lightbox.eq(7).offset().top - $(window).height()/2 ){
            $lightbox.eq(7).addClass("show");
        }

        var $nav = $("main .nav");
        var $menu = $("main .nav2");

            if(wScroll > 100){
                $nav.addClass("none");
                $menu.addClass("show");
            }else if(wScroll == 0){
                $nav.removeClass("none");
                $menu.removeClass("show");
            }
    });
    

    
}); /* function */