;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.checkSubmenu();
			self.headerInfo();
			self.footerList();
			self.additionalMenuItem();
			self.additionalMenuOpen();
			self.additionalMenuClose();
			self.tabsBox();
			self.firstOpenNewsList();
			self.newsList();
			self.buttonSlider();
			self.headerList();
			self.siteList();
			self.goUpAnimate();
			self.goUp();

		},

		windowLoad: function(){

			var self = this;

			setTimeout(function(){

				self.additionalMenuWidth();

			},500);
			

		},

		windowScroll: function(){

			var self = this;
			
			self.goUp();
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



		/**
		**	Add class if li has submenu
		**/

		checkSubmenu : function(){

			$(".main_menu>li").each(function(){

				var $this = $(this);

				if ($this.is(':has(ul)')){

					$this.addClass('has_submenu');

				};

			});

		},


		additionalMenuOpen : function(){


			$('.additional_menu_box button').on('click',function(){
		    	
		    	$(this).toggleClass('active');
		    	$(".additional_menu").toggleClass('active');

		    });

		    if($('.touch').length || $(window).width()<768) {

				$('nav li').each(function(){

					if($(">ul", this)[0]){

						$(">a", this).toggle(

							function(){
								$(this).parent().toggleClass('active');
								$(this).next("ul").slideToggle();
								return false;
							},
							function(){
								window.location.href = $(this).attr("href");
							}
						);

					} 

				});

		    }

		},


		additionalMenuClose : function(){

			$(document).click(function(event) {

				if ($(event.target).closest(".additional_menu_box").length) return;
				$(".additional_menu").removeClass('active');
				event.stopPropagation();

			});

			$(document).click(function(event) {

				if ($(event.target).closest("li.has_submenu").length) return;
				$("li.has_submenu>a").removeClass('active');
				$("li.has_submenu>a").next("ul").slideUp();
				event.stopPropagation();

			});

		},

		additionalMenuItem : function(){

			var navWrapWidth = $(".nav_wrap").width(),
				fullWidth = navWrapWidth - 162,
				itemWidth = 0,
				navWidth;

			if(!$('.nav_wrap').hasClass("responsive_menu") && $(window).width()<767){

				$(".additional_menu>li").each(function(){


					$(this).appendTo(".main_menu");

				});

				$(".main_menu>li").each(function(){

					var $this = $(this);

					if ($(this).is(':has(ul)')){

						$this.addClass('has_submenu');

					};

					$(this).appendTo(".additional_menu");

				});

				$('.nav_wrap').addClass("responsive_menu clearfix");

			}
			else if($(window).width()>768){

				$('.nav_wrap').removeClass("responsive_menu clearfix")

				$("nav").css({"width":"auto"});

				$(".additional_menu>li").each(function(){

					$(this).appendTo(".main_menu");

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

			}

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

			if(('.news_slider').length){

				$('.news_slider .news_list>li:nth-child(6),.news_slider .news_list>li:nth-child(2),.news_slider .news_list>li:nth-child(3),.news_slider .news_list>li:nth-child(4),.news_slider .news_list>li:nth-child(5)').addClass('active');
			
			}
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

		},


		/**
		**	Site List accordion 
		**/

		siteList : function(){

			if($('.site_list').length){

				$(".site_list>h5").on('click',function(){

					var windowWidth = $(window).width(),
						$this = $(this);

					if(windowWidth>992){
						return false;
					}
					else{

						$this.toggleClass('active');
						$this.next("ul").slideToggle();
					}
				});
			}

		},


		/**
		**	Footer List accordion 
		**/

		footerList : function(){

			$(".list_box>h6").on('click',function(){

				var windowWidth = $(window).width(),
					$this = $(this);

				if(windowWidth>767){
					return false;
				}
				else{

					$this.toggleClass('active');
					$this.next("ul").stop().slideToggle();
				}

			});

		},


		/**
		**	Header info box tabs 
		**/

		headerInfo : function(){

			$(".quotes_box>.header_info_title").addClass("active").next().addClass('active');

			$('.header_info_title').on("click",function(){

				var $this = $(this),
					parent = $this.parent();

				$this.addClass('active')
					 .next()
					 .addClass('active')
					 .parent()
					 .siblings()
					 .find('.header_info_title')
					 .removeClass('active')
					 .next()
					 .removeClass('active');
			});

		},



		/**
		**	Go Up button 
		**/


		goUp : function(){

			var windowHeight = $(window).height(),
				windowScroll = $(window).scrollTop();

			if(windowScroll>windowHeight/2){

				$('#go_up').addClass('active');

			}
			else{

				$('#go_up').removeClass('active');

			}

		},

		goUpAnimate :function(){

			$('#go_up').on('click',function () {

				if($.browser.safari){

					$('body').animate( { scrollTop: 0 }, 1100 );

				}else{

					$('html,body').animate( { scrollTop: 0}, 1100 );

				}

				return false;

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