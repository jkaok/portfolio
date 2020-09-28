// JavaScript Document

//메뉴바
$(function(){
	$("#main_ul .li_main>a").on("mouseover focus",function(){
		$("#main_ul .ul_sub:visible").slideUp("slow");
		$(this).next().stop().slideDown("normal");
	});
		$("#main_ul").on("mouseleave", function(){
			$("#main_ul .ul_sub:visible").slideUp("slow");
	});

    //div_01 animate
   $("#main_idx li").on("mouseenter", function(){
      $(this).stop().animate({paddingBottom: '100px'},600,"swing"); 
      //$(this).next().stop().animate({top:'0px'},"linear");
   });
      $("#main_idx li").on("mouseleave", function(){
		 // alert("ddd");
        $(this).stop().animate({paddingBottom:'22px'},600,"swing");  
    });
    
    //메인글씨 
    $("#con_1").find("h1").fadeIn(2300);
    $("#con_1 .p_main").eq(0).delay(1000).fadeIn(2300);
    $("#con_1 .p_main").eq(1).delay(2000).fadeIn(2300); 
    
    //모달창
    $(".modal_btn").click(function(){
        $("#share-options").show();
    });
    $("#share-options .modal-close").click(function(){
        $("#share-options").hide();
    });
    
    
}); /*function*/
    