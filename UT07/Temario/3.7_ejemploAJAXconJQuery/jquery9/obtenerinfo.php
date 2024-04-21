<?php
if (isset($_POST['nombrepais']) && $_POST['nombrepais'] != "") {
	require("conexion.php");

	$sql = "select * from paises where nombre='" . $_POST['nombrepais'] . "'";

	$resultado = $mysqli->query($sql);

	if ($resultado->num_rows != 0) {
		$fila = $resultado->fetch_assoc();

		echo "<br/>Informacion obtenida de la base de datos: ";
		echo "<br/>Nombre: " . $fila['nombre'];
		echo "<br/>Region: " . $fila['region'];
		echo "<br/>Area: " . $fila['area'];
		echo "<br/>Poblacion: " . $fila['poblacion'];
		echo "<br/>GDP: " . $fila['gdp'];
	} else {
		echo "<br/>Pais no encontrado en la base de datos";
	}
}
