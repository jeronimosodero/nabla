$(document).ready(function() {
	$('#contactMail').submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: 'email.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function() {
				Materialize.toast('Correo enviado.', 4000);
				$('#contactMail')[0].reset();
				return false;
			}
		})
	});
});