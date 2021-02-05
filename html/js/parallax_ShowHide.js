/* 
Parallax__메뉴바를 스크롤상태에 따라 사라지고,나타나기 */

var wHeight = $(window).height();
var dHeight = $(document).height();
var navHeight = $(".nav").height();
var lastScrollTop = 0;
var moveScroll; //true,false : Boolean(불리언)

$(window).scroll(function(){ //스크롤을 감지하기위한
    moveScroll = true;
});

setInterval(function(){ //스크롤을 감지를 0.25초마다 실행
    if(moveScroll) { //스크롤이 감지되면, 함수를 실행시킨다
        hasScroll(); 
        moveScroll = false; //즉,한번만 실행하고 false.
    }else{
        
    }
},250);

function hasScroll(){
    var wScroll = $(this).scrollTop();

    if(wScroll > lastScrollTop){ //스크롤을 내렸을때
        $(".nav").addClass("on");

    }else{
    if(wScroll + wHeight < dHeight){ //스크롤을 올렸을때
        $(".nav").removeClass("on");
    }
    }
    lastScrollTop = wScroll;
}
