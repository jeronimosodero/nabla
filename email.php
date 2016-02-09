<?php 
	if ($_POST){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$message = $_POST['message'];
		mail("contacto@nabla.com.ar", $name . " quiere contactarse.", $name . " envio este mensaje: " . $message . ".\nSu numero de contacto es: " . $phone . ".\nSu correo de contacto es: " . $email);
	}
?>