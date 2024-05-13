//Header Navigations
jQuery(document).ready(function($) {

    var menu_toggle         = $('.menu-toggle');
    var nav_menu            = $('.site-navigation ul.nav-menu');

    // Primary Menu
    menu_toggle.click(function(){
        $(this).toggleClass('active');
        nav_menu.slideToggle();
        $('button.dropdown-toggle').removeClass('active');
        $('.site-navigation ul ul').slideUp();
        $('body').toggleClass('body-overlay');
    });

    $('.site-navigation .nav-menu .menu-item-has-children > a').after( $('<button class="dropdown-toggle"><i class="fas fa-caret-down"></i></button>') );

    $('button.dropdown-toggle').click(function() {
        $(this).toggleClass('active');
        $(this).parent().find('.sub-menu').first().slideToggle();
    });

    if( $('.site-navigation a i').hasClass('wpmi-icon') ) {
        $('.site-navigation').addClass('icons-active');
    }

    // Keyboard Navigation
    if( $(window).width() < 1024 ) {
        nav_menu.find("li").last().bind( 'keydown', function(e) {
            if( !e.shiftKey && e.which === 9 ) {
                e.preventDefault();
                $('#masthead').find('.menu-toggle').focus();
            }
        });
    }
    else {
        nav_menu.find("li").unbind('keydown');
    }

    $(window).resize(function() {
        if( $(window).width() < 1024 ) {
            nav_menu.find("li").last().bind( 'keydown', function(e) {
                if( !e.shiftKey && e.which === 9 ) {
                    e.preventDefault();
                    $('#masthead').find('.menu-toggle').focus();
                }
            });
        }
        else {
            nav_menu.find("li").unbind('keydown');
        }
    });

    menu_toggle.on('keydown', function (e) {
        var tabKey    = e.keyCode === 9;
        var shiftKey  = e.shiftKey;

        if( menu_toggle.hasClass('active') ) {
            if ( shiftKey && tabKey ) {
                e.preventDefault();
                nav_menu.find("li:last-child > a").focus();
                nav_menu.find("li").last().bind( 'keydown', function(e) {
                    if( !e.shiftKey && e.which === 9 ) {
                        e.preventDefault();
                        $('#masthead').find('.menu-toggle').focus();
                    }
                });
            };
        }
    });

});


jQuery(document).ready(function($){
	jQuery('#FourCol-Section1 .col3bx h4 a').html(function(){	
		var text= $(this).text().split(' ');
		var last = text.pop();
		return text.join(" ") + (text.length > 0 ? ' <span>'+last+'</span>' : last);
	}); 
});

jQuery(document).ready(function(){
	// hide #back-top first
	jQuery("#back-top").hide();	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 0) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});
	});

});

jQuery(document).ready(function() {
	jQuery(".header-search-toggle").click(function() {
	   jQuery(".header-search-bar").toggle();
	   jQuery(".header-search-bar .search-field").focus();
	 });
	 
	 jQuery(".wp-block-gallery .wp-block-image a").attr("rel", "prettyPhoto[1]");
	 
});

jQuery(document).ready(function() {
  jQuery(".right_info_search_toggle").click(function() {
     jQuery(".header_form").toggle();
     jQuery(".header_form .form_field").focus();
   });
});

jQuery(document).ready(function( jQuery ) {
		jQuery('.testimonials').owlCarousel({
		loop: true,
		rtl: false,
		margin: 30,
		responsiveClass: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		smartSpeed: 3000,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive: {
		  0: {items: 1},
		  768: {items: 1},
		  1025: {items: 1}
		}
	 });
});
