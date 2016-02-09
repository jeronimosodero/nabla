$(document).ready(function() {
	$('#contactMail').submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: 'email.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function() {
				console.log('yeah')
			}
		})
	});
});