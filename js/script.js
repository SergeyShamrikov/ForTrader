$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
    var regM = /ipod|ipad|iphone/gi,
     result = ua.match(regM)
    if(!result) {
     $('.sf-menu li').each(function(){
      if($(">ul", this)[0]){
       $(">a", this).toggle(
        function(){
         return false;
        },
        function(){
         window.location.href = $(this).attr("href");
        }
       );
      } 
     })
    }
   } 
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')


// select
$.fn.extend({

    /**
    ** Emulates select form element
    ** @return jQuery
    **/
    customSelect : function(){
     var template = "<div class='active_option open_select'></div><ul class='options_list dropdown'></ul>";

     return this.each(function(){

      var $this = $(this);
      $this.prepend(template);

      var active = $this.children('.active_option'),
       list = $this.children('.options_list'),
       select = $this.children('select').hide(),
       options = select.children('option');


      active.text( 
       select.children('option[selected]').val() ? 
        select.children('option[selected]').val() : 
        options.eq(0).val()
      );

      options.each(function(){

       var optionOuter = $('<li></li>',{
         class : 'animated_item'
        }),
        optionInner = $('<a></a>',{
         text : $(this).val(),
         href : '#'
        }),
        tpl = optionOuter.append(optionInner);


       list.append(tpl);
       
      });

      list.on("click", "a", function(event){

       event.preventDefault();

       var v = $(this).text();
       active.text(v);
       select.val(v);

       $(this).closest('.dropdown').removeClass("active");

      });

     });

    }});
$('.custom_select').customSelect();