$(document).ready(function() {
	var backgroundBanner = new Image();
	backgroundBanner.onload = function() {
		$('#banner').css('background-image', 'url('+this.src+')');
	};
	var bannerRandom = Math.floor(Math.random() * 2) + 1 
	backgroundBanner.src = 'images/banner'+bannerRandom+'.jpg';
});