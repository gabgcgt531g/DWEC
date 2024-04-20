<?php
$servidor="localhost";
$usuario="ajax";
$password="dwec";
$basedatos="ajax";

//Creamos la conexion
$mysqli=new mysqli($servidor, $usuario, $password, $basedatos);

$mysqli->connect_errno and die($mysqli->connect_error);	
?>
