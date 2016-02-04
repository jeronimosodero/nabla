$(document).ready(function() {
	smoothScroll = function() {
		$('a[href*=#]').click(function(event) {
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top-64},500);
		});
	}();
});







(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space