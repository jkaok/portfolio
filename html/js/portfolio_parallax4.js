/* 패럴럭스 */
    
$(function(){
/* portfolio4 */
    var $img = $("#cont2 .photo-img");
    var $cont2 = $("#cont2");
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if( wScroll >= $cont2.offset().top - $(window).height()/2 ){
            $img.eq(0).addClass("show");
        }
        if( wScroll >= $img.eq(1).offset().top - $(window).height()/2 ){
            $img.eq(1).addClass("show");
        }
        if( wScroll >= $img.eq(2).offset().top - $(window).height()/2 ){
            $img.eq(2).addClass("show");
        }
        if( wScroll >= $img.eq(3).offset().top - $(window).height()/2 ){
            $img.eq(3).addClass("show");
        }
        if( wScroll >= $img.eq(4).offset().top - $(window).height()/2 ){
            $img.eq(4).addClass("show");
        }
        if( wScroll >= $img.eq(5).offset().top - $(window).height()/2 ){
            $img.eq(5).addClass("show");
        }
        if( wScroll >= $img.eq(6).offset().top - $(window).height()/2 ){
            $img.eq(6).addClass("show");
        }
        if( wScroll >= $img.eq(7).offset().top - $(window).height()/2 ){
            $img.eq(7).addClass("show");
        }
        if( wScroll >= $img.eq(8).offset().top - $(window).height()/2 ){
            $img.eq(8).addClass("show");
        }
        if( wScroll >= $img.eq(9).offset().top - $(window).height()/2 ){
            $img.eq(9).addClass("show");
        }
        if( wScroll >= $img.eq(10).offset().top - $(window).height()/2 ){
            $img.eq(10).addClass("show");
        }
        if( wScroll >= $img.eq(11).offset().top - $(window).height()/2 ){
            $img.eq(11).addClass("show");
        }
        
    });
    
}); /* function */