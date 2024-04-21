<?php
// Conectarse a la base de datos
require("conexion.php");

if (isset($_POST['identificador'])) {
    $sql = sprintf(
        "insert into profesores values('%s','%s','%s','%s')",
        $_POST['identificador'],
        $_POST['nombre'],
        $_POST['apellidos'],
        $_POST['email']
    );

    if ($mysqli->query($sql) === TRUE) {
        echo "Datos insertados OK";
    } else {
        echo "ERROR";
    }
    $mysqli->close();
}
