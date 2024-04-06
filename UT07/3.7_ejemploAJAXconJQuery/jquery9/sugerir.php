<?php
if (isset($_GET['nombrepais']) && $_GET['nombrepais']!="")
{
	require("conexion.php");
	
	$sql="select nombre from paises where nombre like '".$_GET['nombrepais']."%'";
	
        $resultado=$mysqli->query($sql);
	
        while ($fila = $resultado->fetch_assoc()) {
		echo "<li>".$fila['nombre']."</li>\n";
	}

	// Devolverá los paises en este formato:
	// <li>Spain</li>
	// <li>France</li>
}
?>
