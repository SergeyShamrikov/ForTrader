;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				Owl carousel
		------------------------------------------------ */

			if($('.owl-carousel').length){

				$('.owl-carousel').each(function(){

					var $this = $(this);

					if($this.hasClass('full_width')){

						$this.owlCarousel({

							navigation : true, // Show next and prev buttons
							slideSpeed : 300,
							paginationSpeed : 400,
							singleItem:true

							// "singleItem:true" is a shortcut for:
							// items : 1, 
							// itemsDesktop : false,
							// itemsDesktopSmall : false,
							// itemsTablet: false,
							// itemsMobile : false

						});

					}
					else{

						var desktop = $this.attr('data-desktop'),
							ipad = $this.attr('data-ipad'),
							iphon = $this.attr('data-iphon');

						$this.owlCarousel({

							itemsCustom : [
								[0, iphon],
								[767, ipad],
								[992, desktop]
							],
							navigation : true

						});

					}

				});	
							
			}

        /* ------------------------------------------------
				End of Owl carousel
		------------------------------------------------ */


		/* ------------------------------------------------
				tinycarousel
		------------------------------------------------ */

			// if($(".news_slider").length){

			// 	$(".news_slider").each(function(){

			// 		$(this).tinycarousel({
			// 	        axis   : "y"
			// 	    });

			// 	});

			// }

        /* ------------------------------------------------
				End of tinycarousel
		------------------------------------------------ */


	});

	$(window).load(function(){

		/* ------------------------------------------------
				Name pudin
		------------------------------------------------ */


        /* ------------------------------------------------
				End of Name pudin
		------------------------------------------------ */

	});

})(jQuery);