(function($) {
	$(document).ready(function() {
		"use strict";

		$(".iset").hover(function () {
		$(".ShowcaseD").css("background-color", $(this).data('bg'));
        $(".ShowcaseD").not(this).each(function(){
            $(this).css("background-color", $(this).data('bg'));
        });
		}, function(){
			$(".ShowcaseD").css("background-color", '');
		});

			$("#typewriter").typewriter({
				prefix : "",
				text : ["Please wait", "Still loading", "Almost done"],
				typeDelay : 100,
				waitingTime : 1500,
				blinkSpeed : 800
			});


			document.getElementById("manua").addEventListener('click', function(e) {
			document.getElementById("manu-hover").play();
	  	});


		$('.manu').on('click', function(e) {
			if ($(".navigation-menu").hasClass("active")) {
				$(".manu").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu").removeClass("active");
				$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
			} else
			{
				$(".navigation-menu").addClass('active');
				$(".manu").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu.active .inner .menu").css("transition-delay", "0s");
				$(".navigation-menu.active .inner blockquote").css("transition-delay", "0.50s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0s");
			}
			$(this).toggleClass("active");
		});

$(document).ready(function() {

        $(window).scroll(function() {

          if($(this).scrollTop() > 500) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});


		$('body a').on('click', function(e) {

			if (typeof $( this ).data('fancybox') == 'undefined') {
			e.preventDefault();
			var url = this.getAttribute("href");
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));

			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");
			$(".manu").toggleClass("open");
			$("body").toggleClass("overflow");
			$(".navigation-menu").removeClass("active");
			$(".navigation-menu .inner ul").css("transition-delay", "0s");
			$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
			$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1000);

			}
			}
			else {
			$('.transition-overlay').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},1000);

			}
			}
			});


			var divs = $('header');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 'opacity' : (1 - st/700) });
				divs.css({ 'transition-delay' : ("0s") });
				divs.css({ 'transition' : ("0.05s ease-in-out") });
			});


		});






			wow = new WOW(
				{
					animateClass: 'animated',
					offset:       0
				}
				);
			wow.init();

			$(window).load(function(){
				$("body").addClass("page-loaded");
			});



})(jQuery);
