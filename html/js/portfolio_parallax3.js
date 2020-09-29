/* 패럴럭스 */
    
$(function(){
/* portfolio4 */
    var $img = $(".web");
    var $cont2 = $("#cont2");
    
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if( wScroll >= $img.offset().top - $(window).height()/3 ){
            $img.eq(0).addClass("show");
        }
        if( wScroll >= $img.eq(1).offset().top - $(window).height()/3 ){
            $img.eq(1).addClass("show");
        }
        if( wScroll >= $img.eq(2).offset().top - $(window).height()/3 ){
            $img.eq(2).addClass("show");
        }
        
    });
    
}); /* function */