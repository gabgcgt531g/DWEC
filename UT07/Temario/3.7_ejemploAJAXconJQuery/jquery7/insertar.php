<?php
	$servidor="localhost";
	$usuario="ajax";
	$basedatos="ajax";
	$password="dwec";
	
	$mysqli = new mysqli($servidor,$usuario, $password, $basedatos);

        $mysqli->connect_errno and die($mysqli->connect_error);	
	if (isset($_POST['pais']))
	{
		$sql=sprintf("insert into paises(nombrepais) value('%s')",$_POST['pais']);
		if ($mysqli->query($sql) === TRUE) {
		    echo "Pais insertado correctamente en la tabla";
		} else {
		    die ("Error al insertar el país");
		}
		$mysqli->close();
	}
?>
