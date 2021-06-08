jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 4500
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	/* portfolio */
	$(window).load(function(){
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
            $portfolio.isotope({
                itemSelector: 'li',
                layoutMode  : 'fitRows'
            });
            portfolioId = $portfolio.attr("id");
            if (portfolioId=='main') {
                $portfolio.isotope({ filter: '.group1' });
            } else {
                $portfolio.isotope({ filter: '.clubbilkent' });
            }
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
					$portfolio.isotope({ filter: selector });
					return false;
			});
		}
	});
    // generate by YEGUZEL
	var portfolioResize = function(){
		var className = "portfolio-items isotope ";
		var width= $(window).width();
		if (width<769){
			className += " col-2";
		}
		if (width>=770 && width<990){
			className += " col-4";
		}
		if (width>=990 && width<1200){
			className += " col-6";
		}
		if (width>=1200){
			className += " col-8";
		}
		if ($('.portfolio-items').get(0))
			$('.portfolio-items').get(0).className = className
	};
	portfolioResize();
	$(window).resize(portfolioResize);

  
  //DATE PICKER - EVENT CALENDAR
  $('#calendar').datepicker({
    language: "tr",
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    todayHighlight: true
  });

	//contact form
	var form = $('.contact-form');
	form.submit(function () {
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
	
});