;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.additionalMenuItem();
			self.additionalMenuOpen();
			self.additionalMenuClose();
			self.tabsBox();
			self.firstOpenNewsList();
			self.newsList();
			self.buttonSlider();
			self.headerList();

		},

		windowLoad: function(){

			var self = this;

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);
			

		},

		windowScroll: function(){

			var self = this;
			
			// self.additionalMenuItemScroll();
		},

		windowResize: function(){

			var self = this;

			self.additionalMenuItem();

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);
		},

		/**
		**	Additional Menu width and open
		**/

		additionalMenuWidth : function(){

		    var searchFormWidth = $('.search_box').width(),
		    	menuWidh = searchFormWidth + 59;

		    $(".additional_menu").width(menuWidh);

		    

		},

		additionalMenuOpen : function(){

			$('.additional_menu_box button').on('click',function(){
		    	
		    	$(this).toggleClass('active');
		    	$(".additional_menu").toggleClass('active');

		    });

		},


		additionalMenuClose : function(){

			$(document).click(function(event) {

				if ($(event.target).closest(".additional_menu_box").length) return;
				$(".additional_menu").removeClass('active');
				event.stopPropagation();

			});

		},

		additionalMenuItem : function(){

			var navWrapWidth = $(".nav_wrap").width(),
				fullWidth = navWrapWidth - 162,
				itemWidth = 0,
				navWidth;

			$(".additional_menu>li").each(function(){

				var $this = $(this);

				$this.appendTo(".main_menu");

			});

			$(".main_menu>li").each(function(){

				var $this = $(this);

				itemWidth += $(this).width();

				if(itemWidth > fullWidth){

					$this.appendTo(".additional_menu");

				}				

			});

			setTimeout(function(){

				navWidth = $(".main_menu").width();

				$("nav").width(navWidth +59);

			},100);

		},

		
		/**
		**	Tabs
		**/

		tabsBox : function(){

			$('.tabs_list>li').on('click',function(){

				var $this = $(this),
					index = $this.index();

				$this.addClass('active').siblings().removeClass('active');
				$(".tabs_contant>div").eq(index).addClass('active').siblings().removeClass('active');

			});

		},


		/**
		**	News List Slider
		**/

		firstOpenNewsList : function(){

			$('.news_slider .news_list>li:nth-child(6),.news_slider .news_list>li:nth-child(2),.news_slider .news_list>li:nth-child(3),.news_slider .news_list>li:nth-child(4),.news_slider .news_list>li:nth-child(5)').addClass('active');
		},

		newsList : function(){

			$('.slider_nav_prev').on('click',function(){

				var parent = $(this).parents('.news_slider'),
					firstItem = parent.find('.news_list>li.active').index(),
					showItem = parent.find(".news_list>li.active").eq(0).prev();

				if(firstItem == 0){return false}

				parent.find(".news_list>li.active").eq(4).slideUp(300).removeClass("active");
				
				showItem.slideDown(300).addClass('active');

			});

			$('.slider_nav_next').on('click',function(){

				var parent = $(this).parents('.news_slider'),
					last = parent.find('.news_list>li:last').index(),
					lastActive = parent.find(".news_list>li.active").eq(4).index(),
					showItem = parent.find(".news_list>li.active").eq(4).next();

				if(last == lastActive){return false}


				parent.find(".news_list>li.active").eq(0).slideUp(300).removeClass("active");;
				
				showItem.slideDown(300).addClass('active');

			});

		},



		/**
		**	Nav Buttons 
		**/

		buttonSlider : function(){

			$('.nav_buttons>a').on('click',function(event){

				var parent = $(this).parents('.turn_box'),
					turn = $(this).parents('.turn_box').find('.turn_content'),
					owl = parent.find(".owl-carousel");

				if($(this).hasClass('prev_btn')){

					owl.trigger('owl.prev');
					event.preventDefault();

				}
				else if($(this).hasClass('next_btn')){

					owl.trigger('owl.next');
					event.preventDefault();

				}
				else if($(this).hasClass('turn_btn')){

					turn.slideToggle(500);
					event.preventDefault();
				}

			});
			
		},


		/**
		**	Header list open on responsive 
		**/

		headerList : function(){

			$('.header_list_btn').on('click',function(){

				$(this).toggleClass('active');
				$('.header_list').toggleClass('active');

			});

			$(document).click(function(event) {

				if ($(event.target).closest(".header_list,.header_list_btn").length) return;
				$(".header_list").removeClass('active');
				$(".header_list_btn").removeClass('active');
				event.stopPropagation();

			});

		}

	}


	$(function(){

		Core.DOMReady();

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