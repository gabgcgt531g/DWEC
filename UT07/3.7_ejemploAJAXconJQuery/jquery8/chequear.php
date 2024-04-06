<?php
// Conectarnos a la base de datos
require("conexion.php");

if (isset($_POST['codigo'])) {
    $sql=sprintf("select * from profesores where identificador='%s'",$_POST['codigo']);
    $resultado=$mysqli->query($sql);

    if ($resultado->num_rows == 0) {
	echo json_encode(array("estado"=>"OK","mensaje"=>"Codigo libre"));
    } else {
	echo json_encode(array("estado"=>"ERROR","mensaje"=>"!Codigo no disponible!"));
    }
}
?>
