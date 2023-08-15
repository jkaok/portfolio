$(function(){
    
    /* slide 바탕이미지 */
    var current = 0;
    
    // $(".slidelist").children("div:gt(0)").fadeOut();
    // $(".word").children("div:gt(0)").fadeOut();
    
    // setInterval(function(){
    //     var next = (current + 1) % 3; /* 1 - 2 - 3 - 1...*/
        
    //     $(".slidelist").find("div").eq(current).fadeOut(200);
    //     $(".slidelist").find("div").eq(next).fadeIn(800);
        
    //     // $(".word").find("div").eq(current).fadeOut();
    //     // $(".word").find("div").eq(next).delay(600).fadeIn(500);
        
    //     current = next;
                
    // }, 3000);


   /*  Initialize Swiper */
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
        
    });
    


    /* side 메뉴보이기 */
    $(".bars").click(function(){
        $("#side").addClass("sideshow");
    });
    $(".btn").click(function(){
        $("#side").removeClass("sideshow");
    });
    
    
});/*//function*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /* page01 
    $("#back_video .p1").delay(1100).animate({"right" : "80px"},800,"linear"); 
    $("#back_video .p2").delay(5000).fadeIn(1000); 
    $("#back_video .p3").delay(9070).fadeIn(1800).animate({"left" : "40%"},800,"linear"); 
    $("#back_video .p4").delay(13000).animate({"top" : "100"},800,"linear"); 
    $("#back_video .p5").delay(18700).fadeIn(1000);
    $("#back_video .p6").delay(21500).fadeIn(1000);*/


    /*$("div").click(function(){
        $("div").animate({"margin-left":"200px"},800,"linear");
        $("div").animate({"margin-top":"200px"},800,"linear");
        $("div").css({"background-color":"green"},800,"linear");
    });*/
			






