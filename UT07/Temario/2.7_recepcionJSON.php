<?php

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from centros order by nombrecentro";
$resultado = $mysqli->query($sql);

while ($fila = $resultado->fetch_assoc()) {
  // Almacenamos en un array  cada una de las filas que vamos leyendo del recordset.
  $datos[] = $fila;
}

echo json_encode($datos); // función de PHP que convierte a formato JSON el array.
