

$(document).ready(function(){
$('a[href^="#header"]').bind("click.smoothscroll", function(e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top
      },
      2000,
      "swing",
      function() {
        window.location.hash = target;
      }
    );
});
});




$(document).ready(function(){
 $(".gggg").click(function(){
    $(".brger_menu").removeClass("vis");
  });

});




$(document).ready(function(){
 $(".mob_men").click(function(){
    $(".brger_menu").addClass("vis");
  });

});








 
$(document).ready(function(){
 $(".main_menu_serch").click(function(){
    $(".hidden_serch").toggleClass("serch_visi");
  });

});








 




$(function(){
  $('.arct').click(function(){
    $('#exampleModal').arcticmodal();
    
  });
});




 $('.slider-for').slick({
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
   arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  focusOnSelect: true,
    responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 4,
    
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
      {
      breakpoint: 735,
      settings: {
        slidesToShow: 3,
      }
    },
         {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
      }
    },
       {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
      }
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// длябургера анимация


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();






// слайдер услуги


// $(window).resize(function () {
//     if($(window).width() > 768){
//         $('.di').removeClass('di');
//     };
// }


$('[data-fancybox]').fancybox({
  protect: true,
  buttons : [
    'zoom',
    'thumbs',
    'close'
  ]
});


