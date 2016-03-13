$(document).ready(function() {
	$('#contactMail').submit(function(event) {
		event.preventDefault();
		if (grecaptcha.getResponse()) {
			$.ajax({
				url: 'email.php',
				type: 'POST',
				data: $(this).serialize(),
				success: function() {
					Materialize.toast('Correo enviado.', 4000);
					$('#contactMail')[0].reset();
					//grecaptcha.reset();
					return false;
				}
			})
		}else{
			Materialize.toast('Verifique que no es un robot.', 4000);
		}
	});
});