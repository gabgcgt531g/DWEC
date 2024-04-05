<?php
	// Para que el navegador no haga cache de los datos devueltos por la página PHP.
	header('Cache-Control: no-cache, must-revalidate');
	header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	
	// Imprimimos un mensaje con los textos recibidos
	if (isset($_GET['nombre']))
		echo "Saludos desde el servidor: hola {$_GET['nombre']} {$_GET['apellidos']}. ";
	else if (isset($_POST['nombre']))
		echo "Saludos desde el servidor: hola {$_POST['nombre']} {$_POST['apellidos']}. ";
		
	// Mostramos la fecha y hora del servidor web.
	echo "La fecha y hora del Servidor Web: ";
	echo date("j/n/Y G:i:s"); 
?>