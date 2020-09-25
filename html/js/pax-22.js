window.addEventListener("scroll", () => { 
const pageYOffset = (window.pageYOffset || document.documentElement.scrollTop) + screen.height/2;

document.querySelector(".pageY").textContent = parseInt(pageYOffset);

//출력
document.querySelector(".s1OT").textContent = document.getElementById("section1").offsetTop;
document.querySelector(".s2OT").textContent = document.getElementById("section2").offsetTop;
document.querySelector(".s3OT").textContent = document.getElementById("section3").offsetTop;
document.querySelector(".s4OT").textContent = document.getElementById("section4").offsetTop;
document.querySelector(".s5OT").textContent = document.getElementById("section5").offsetTop;
document.querySelector(".s6OT").textContent = document.getElementById("section6").offsetTop;
document.querySelector(".s7OT").textContent = document.getElementById("section7").offsetTop;
document.querySelector(".s8OT").textContent = document.getElementById("section8").offsetTop;
document.querySelector(".s9OT").textContent = document.getElementById("section9").offsetTop;

let offset1 = (pageYOffset - document.getElementById("section1").offsetTop) * 0.2;
let offset2 = (pageYOffset - document.getElementById("section2").offsetTop) * 0.2;
let offset3 = (pageYOffset - document.getElementById("section3").offsetTop) * 0.2;
let offset4 = (pageYOffset - document.getElementById("section4").offsetTop) * 0.2;
let offset5 = (pageYOffset - document.getElementById("section5").offsetTop) * 0.2;
let offset6 = (pageYOffset - document.getElementById("section6").offsetTop) * 0.2;
let offset7 = (pageYOffset - document.getElementById("section7").offsetTop) * 0.2;
let offset8 = (pageYOffset - document.getElementById("section8").offsetTop) * 0.2;
let offset9 = (pageYOffset - document.getElementById("section9").offsetTop) * 0.2;

document.querySelector(".offset1").textContent = parseInt(offset1);
document.querySelector(".offset2").textContent = parseInt(offset2);
document.querySelector(".offset3").textContent = parseInt(offset3);
document.querySelector(".offset4").textContent = parseInt(offset4);
document.querySelector(".offset5").textContent = parseInt(offset5);
document.querySelector(".offset6").textContent = parseInt(offset6);
document.querySelector(".offset7").textContent = parseInt(offset7);
document.querySelector(".offset8").textContent = parseInt(offset8);
document.querySelector(".offset9").textContent = parseInt(offset9);

//노가다
//            const s1 = document.querySelector("#section1 > .content-item-desc");
//            const s2 = document.querySelector("#section2 > .content-item-desc");
//            const s3 = document.querySelector("#section3 > .content-item-desc");
//            const s4 = document.querySelector("#section4 > .content-item-desc");
//            const s5 = document.querySelector("#section5 > .content-item-desc");
//            const s6 = document.querySelector("#section6 > .content-item-desc");
//            const s7 = document.querySelector("#section7 > .content-item-desc");
//            const s8 = document.querySelector("#section8 > .content-item-desc");
//            const s9 = document.querySelector("#section9 > .content-item-desc");
//            
//            s1.style.transform = 'translate3d(0px,'+ -offset1+'px, 0px)';
//            s2.style.transform = 'translate3d(0px,'+ -offset2+'px, 0px)';
//            s3.style.transform = 'translate3d(0px,'+ -offset3+'px, 0px)';
//            s4.style.transform = 'translate3d(0px,'+ -offset4+'px, 0px)';
//            s5.style.transform = 'translate3d(0px,'+ -offset5+'px, 0px)';
//            s6.style.transform = 'translate3d(0px,'+ -offset6+'px, 0px)';
//            s7.style.transform = 'translate3d(0px,'+ -offset7+'px, 0px)';
//            s8.style.transform = 'translate3d(0px,'+ -offset8+'px, 0px)';
//            s9.style.transform = 'translate3d(0px,'+ -offset9+'px, 0px)';

//한번에 작성하기
document.querySelectorAll(".content-item").forEach(elem => {
    //console.log(elem.childNodes[7])
    let target = elem.childNodes[7];
    let offset = (pageYOffset - elem.offsetTop) * 0.2;
    target.style.transform = 'translate3d(0px,'+ -offset+'px, 0px)';
}); 

});  