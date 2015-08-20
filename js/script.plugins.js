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

						});

					}
					else{

						var desktop = $this.attr('data-desktop'),
							large = $this.attr('data-large'),
							medium = $this.attr('data-medium'),
							small = $this.attr('data-small'),
							extraSmall = $this.attr('data-extra-small');

						$this.owlCarousel({

							itemsCustom : [
								[0, extraSmall],
								[480, small],
								[768, medium],
								[992, large],
								[1200, desktop]
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
				liMarquee
		------------------------------------------------ */

			// if($(".news_slider").length){

			// 	$('.ticker').liMarquee();

			// }

        /* ------------------------------------------------
				End of liMarquee
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