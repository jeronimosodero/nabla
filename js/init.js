$(document).ready(function() {
	smoothScroll = function() {
		$('a[href*=#]').click(function(event) {
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top-64},500);
		});
	}();

	$('#mSlider').masterslider({
		autoplay: true,
		height: 400,
		layout: "autofill",
		loop:true,
		width: 1400,
		controls:{
			arrows: {},
			bullets: {},
			timebar: {inset:true}
		}
	});

	$('#staffSlider').masterslider({
        height:240,
		loop:true,
        preload:0,
        shuffle:true,
        space:35,
        speed:20,
        view:'focus',
        viewOptions:{centerSpace:1.6},
        width: 240,
        controls:{
        	arrows: {},
			slideinfo: {insertTo:'#staff-info'}
        }
	})
});







(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space