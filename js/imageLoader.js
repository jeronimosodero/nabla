$(function(){
	$.each(document.images, function(){
		var this_image = this;
		var src = $(this_image).attr('src') || '' ;
		if(!src.length > 0){
			var lsrc = $(this_image).attr('lsrc') || '' ;
			if(lsrc.length > 0){
				var img = new Image();
				img.src = lsrc;
				$(img).load(function() {
					this_image.src = this.src;
				});
			}
		}
	});
});
$(document).ready(function() {
	var backgroundBanner = new Image();
	backgroundBanner.onload = function() {
		$('#banner').css('background-image', 'url('+this.src+')');
	};
	var bannerRandom = Math.floor(Math.random() * 2) + 1 
	backgroundBanner.src = 'images/banner'+bannerRandom+'.jpg';
});