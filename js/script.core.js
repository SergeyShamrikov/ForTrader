;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.additionalMenuItem();

		},

		windowLoad: function(){

			var self = this;

			self.additionalMenuWidth();
			

		},

		windowScroll: function(){

			var self = this;
			
			// self.additionalMenuItemScroll();
		},

		windowResize: function(){

			var self = this;

			self.additionalMenuItemScroll();

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);
		},

		/**
		**	Additional Menu width and open
		**/

		additionalMenuWidth : function(){

		    var searchFormWidth = $('.search_form').width(),
		    	menuWidh = searchFormWidth + 58;

		    $(".additional_menu").width(menuWidh);

		    

		},

		additionalMenuItem : function(){

			var navWrapWidth = $(".nav_wrap").width(),
				fullWidth = navWrapWidth - 162,
				itemWidth = 0;

			$(".main_menu>li").each(function(){

				var $this = $(this),
					index = $this.index();

				itemWidth += $(this).width();

				if(itemWidth > fullWidth){
					$this.appendTo(".additional_menu");
				}				

			});

		},

		additionalMenuItemScroll : function(){

			var navWrapWidth = $(".nav_wrap").width(),
				fullWidth = navWrapWidth - 162,
				itemWidth = 0;

				$(".additional_menu>li").each(function(){

					var $this = $(this);

					$this.appendTo(".main_menu");

				});

				$(".main_menu>li").each(function(){

					var $this = $(this),
						index = $this.index();

					itemWidth += $(this).width();

					if(itemWidth > fullWidth){

						$this.appendTo(".additional_menu");

					}				

				});

				

			

		}

		


	}


	$(function(){

		Core.DOMReady();

		$('.additional_menu_box button').on('click',function(){
		    	
	    	$(this).toggleClass('active');
	    	$(".additional_menu").toggleClass('active');

	    });

	});

	$(window).load(function(){

		Core.windowLoad();

	});

	$(window).scroll(function(){

		Core.windowScroll();
		
	});

	$(window).on("resize",function(){

		Core.windowResize();
		
	});


})(jQuery);