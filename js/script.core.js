;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.NameFunction();

		},

		windowLoad: function(){

			var self = this;

			self.NameFunction();
			self.stickyHeader.init();
			if($('.skillbar').length){
				self.skillBar();
			}

		},

		windowScroll: function(){

			var self = this;
			
			self.NameFunction();
		},

		/**
		**	Purpose code
		**/

		NameFunction : function(){

		    // some code

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


})(jQuery);