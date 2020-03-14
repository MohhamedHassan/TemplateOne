$(document).ready(function() {
   $("nav a").click(function(e){
      e.preventDefault();
      $("html,body").animate({
         scrollTop: $($(this).data("scroll")).offset().top - 65 
         },1000);
      $(this).addClass("activee").parent().addClass("act");
      $(this).parent().siblings().removeClass("act").find("a").removeClass("activee");
   });
   $("nav li:last-of-type").click(function(e) {
       e.preventDefault();
      $("html,body").animate({
         scrollTop: $($(this).data("scroll")).offset().top - 65 
         },1000);
   });
   
$("nav .fa-bars").click(function() {
      $("nav .small-nav").fadeIn(500);
      $("nav .small-nav ul").animate({
         left:"0"
         
         },500);
     
     });
$("nav .fa-times").click(function(){
   
    $("nav .small-nav").fadeOut(500);
    $("nav .small-nav ul").css("left","-300px");
   });
     $("nav .small-nav a").click(function(){
      $("nav .small-nav").fadeOut();
      });
     
     
     
     
   $(window).scroll(function(){
     if ($(window).scrollTop() > 0) {
        $("nav").css({
           
            "padding":"10px 0"  
        });
     }
    else {
        $("nav").css({
           
             "padding":"20px 0"
        });
    }
    if($(window).scrollTop() > 1000) {
         $(".fa-chevron-up").fadeIn(500);
        } else {
          $(".fa-chevron-up").fadeOut(500);
        }
    });
        if ($(window).scrollTop() > 0) {
        $("nav").css({
            // "",
            "padding":"10px 0"  
        });
     }
    else {
        $("nav").css({
            
           
             "padding":"20px 0"
        });
    }
    $(".event button").click(function(){
            let x =   $(this).data("show") ;
            $(this).css("background","#f82249").siblings().css("background"," #0e1b4d");
            $(x).siblings().hide();
            $(x).fadeIn(500);
            
            
      });
   $(".faq .fas").click(function(){
         $(this).toggleClass("fa-plus-circle fa-minus-circle");
         if ($(this).hasClass("fa-minus-circle")) {
            $(this).parent().css("color","#f82249");
         } else {
            $(this).parent().css("color","black");
         }
        $(this).parent().parent().siblings().find("div").css("color","black");
        $(this).parent().parent().siblings().find("i").removeClass("fa-minus-circle").addClass("fa-plus-circle");
        $(this).parent().next().slideToggle();
        $(this).parent().parent().siblings().children("p").slideUp();
      });
   $(".buy .one").click(function(){
      $(".buy .pop-up").fadeIn(500);
      $(".inner select option").eq(0).attr("selected","selected");
   });
   $(".buy .two").click(function(){
      $(".buy .pop-up").fadeIn(500);
      $(".inner select option").eq(1).attr("selected","selected");
   });
   $(".buy .three").click(function(){
      $(".buy .pop-up").fadeIn(500);
      $(".inner select option").eq(2).attr("selected","selected");
   });
   $(".inner .fa-times").click(function() {
       $(".pop-up").fadeOut(500);
   });
   $(".pop-up").click(function(){
      $(".pop-up").fadeOut(500);
   });
   $(".inner").click(function(e){
      e.stopPropagation();
   });
   $(document).keydown(function(e){
      if (e.keyCode == 27) {
         $(".pop-up").fadeOut(500);
      }
   });
   $(".venue .fa-times").click(function(){
      $(".ven-pop").fadeOut();
   });
    $(".ven-pop").click(function(){
      $(".ven-pop").fadeOut();
   });
    $(".ven-child").click(function(e){
      e.stopPropagation();
   });
    $(document).keydown(function(e){
      if (e.keyCode == 27) {
         $(".ven-pop").fadeOut(500);
      }
   });
      $(".venue .fa-chevron-left").click(function(e){
      e.stopPropagation();
   });
        $(".venue .fa-chevron-right").click(function(e){
      e.stopPropagation();
   });
    $(".fa-chevron-up").click(function(){
         $("html,body").animate({
            scrollTop:"0"
            },500);
      });    
});
let imgs = document.querySelectorAll(".second-row img");
let container = [];
let index;
let right = document.querySelector(".fa-chevron-right");
let left = document.querySelector(".fa-chevron-left");
let pop = document.querySelector(".ven-pop");
let child = document.querySelector(".ven-child img");
for (let i = 0;i<imgs.length;i++) {
   container.push(imgs[i]);
   imgs[i].addEventListener("click",function(e){
       pop.style.display = "flex";
       child.setAttribute("src",`${e.target.src}`);
       index = container.indexOf(e.target);
       
   });
}
function rightt() {
      index++;
      if (index === 7) {
          index = 0;
      }
      child.setAttribute("src",`${container[index].src}`);
   
}
function leftt() {
   
      index--;
      if (index < 0) {
          index = container.length - 1;
      }
      child.setAttribute("src",`${container[index].src}`);
  
}
right.addEventListener("click",function() {
   rightt();
   });
left.addEventListener("click",function() {
   leftt();
   });
document.addEventListener("keydown",function(e) {
     if (e.keyCode === 39) {
      rightt();
     }
   });
document.addEventListener("keydown",function(e) {
     if (e.keyCode === 37) {
      leftt();
     }
   });
   // start form validation 
   let capital = /^[A-Z]/
   let emaill = /^[A-Za-z0-9_-]+@(hotmail|gmail|yahoo)\.com$/;
   let minLength = /^[A-Za-z]{5,}$/
   let required =  /^\s{0,}$/;
  let name = true
  let email = true
  let sub = true
  let message = true
   $("#name").blur(function() {
      if (capital.test($(this).val()) === false ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         name = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         name = false
       }
   })
   $("#email").blur(function() {
      if (emaill.test($(this).val()) === false ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         email = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         email = false
       }
   })
   $("#sub").blur(function() {
      if (minLength.test($(this).val()) === false ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         sub = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         sub = false
       }
   })
   $("#message").blur(function() {
      if (required.test($(this).val())  ) {
         $(this).css("border","3px solid red ").next().removeClass("d-none")
         message = true
      }
       else {
         $(this).css("border","3px solid green ").next().addClass("d-none")
         message = false
       }
   })
   $("#subb").submit(function(e){
      if (name === true || email === true ||  sub === true || message === true ) {
          e.preventDefault();
          $("#name,#email,#sub,#message").blur()
      } 
     
     }) ;