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

    
    //메인글씨 
    $("#con_1 .h1_main").fadeIn(2000);
    $("#con_1 .p_main").eq(0).delay(1200).fadeIn(2000);
    $("#con_1 .p_main").eq(1).delay(2000).show(2000);
    
    
    //3종 li
    $(".ul_warp li").on("mouseenter", function(){
        $(this).stop().animate({paddingBottom: '100px'},600,"swing"); 
    });
    
    $(".ul_warp li").on("mouseleave", function(){
        $(this).stop().animate({paddingBottom: '22px'},600,"swing");
    });
    
    
    //모달창
    $(".modal_btn").click(function(){
        $("#share-options").show();
    });
    $("#share-options .modal-close").click(function(){
        $("#share-options").hide();
    });
    
    
}); /*function*/
    