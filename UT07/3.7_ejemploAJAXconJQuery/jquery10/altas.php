<?php
require("conexion.php");

$sql=sprintf("insert into incidencias(aula, profecomunica,proferesuelve,descripcion,resuelta) values ('%s','%s','%s','%s','%s')",
	$_POST['aula'],$_POST['profec'],$_POST['profer'],$_POST['descripcion'],$_POST['resuelta']);

    if ($mysqli->query($sql) === TRUE) {
        echo "<font color=green><strong>Los datos se insertaron correctamente...</strong></font>";

    } else {
        echo "ERROR";
    }
    $mysqli->close();
?>
