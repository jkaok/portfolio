$(function(){
    
    /* slide 바탕이미지 */
    var current = 0;
    
    $(".slidelist").children("div:gt(0)").fadeOut();
    $(".word").children("div:gt(0)").fadeOut();
    
    setInterval(function(){
        var next = (current + 1) % 3; /* 1 - 2 - 3 - 1...*/
        
        $(".slidelist").find("div").eq(current).fadeOut(1000);
        $(".slidelist").find("div").eq(next).fadeIn(1200);
        
        $(".word").find("div").eq(current).fadeOut(1000);
        $(".word").find("div").eq(next).delay(1200).fadeIn(1200);
        
        current = next;
                
    }, 4500);
    

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
			






