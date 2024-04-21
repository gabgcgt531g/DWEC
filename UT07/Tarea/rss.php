<?php
/*
	Esta página realiza las siguientes acciones según los parámetros recibidos:
	
	Parámetros:	accion=nueva&url=xxxxx
	Acción:		Insertará la url xxxxx en la tabla MySQL de RSS.
	Salida:		Imprimirá el ID del último recurso añadido.
	Formato:	Texto

	Parámetros:	accion=borrar&id=x
	Acción:		Borrará la url con id x de la tabla de RSS.
	Salida:		Imprimirá mensaje de OK.
	Formato:	Texto
	
	Parámetros:	accion=leer&url=id
	Acción:		Se conecta a la URL indicada por el ID y descarga el RSS de Internet.
	Salida:		El fichero XML del RSS en formato JSON.
	Formato: 	JSON

	Parámetros:	accion=recursosRSS
	Acción:		Devuelve todos los datos de la tabla rss.
	Salida:		Un array con los campos id, titulo, url en formato JSON.
	Formato: 	JSON	
	
	Parámetros:	accion=numRSS
	Acción:		Devuelve el número total de RSS que tenemos en la tabla.
	Salida:		Un número indicando los RSS que hay en la tabla.
	Formato: 	texto
*/

// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

/* 	Utilizar el fichero dbcreacion.sql incluído en la carpeta para crear la base de datos, usuario y tabla en tu servidor MySQL.
Si fuera necesario modifica los datos de la configuración y adáptalos a tu entorno de trabajo. */
	
// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "ajax";
$usuario = "ajax";	
$password = "dwec";

// Creamos la conexión al servidor.
$mysqli=new mysqli($servidor, $usuario, $password,$basedatos);
$mysqli->query("SET NAMES 'utf8'");

$mysqli->connect_errno and die($mysqli->connect_error);	
	
switch ($_GET['accion'])
{
	case 'nueva':
		$sql= sprintf("insert into rss(titulo,url) values('%s','%s')",$mysqli->real_escape_string($_GET['titulo']),$mysqli->real_escape_string($_GET['url']));
		$mysqli->query($sql) or die($mysqli->error);
		echo $mysqli->insert_id();
	break;

	case 'borrar':
		$sql= sprintf("delete from rss where id=%s",$mysqli->real_escape_string($_GET['id']));
		$mysqli->query($sql) or die($mysqli->error);
		echo "OK";
	break;

	
	case 'cargar':
		// Consulta SQL para obtener los datos de los centros.
		$sql=sprintf("select * from rss where id=%s",$mysqli->real_escape_string($_GET['id']));
		$resultados=$mysqli->query($sql) or die($mysqli->error);
		$registros=$resultados->fetch_assoc();
		

		$doc = new DOMDocument();
		$doc->load($registros['url']);
		$arrFeeds = array();
		foreach ($doc->getElementsByTagName('item') as $node) 
		{
			$itemRSS = array ( 
				'titulo' => $node->getElementsByTagName('title')->item(0)->nodeValue,
				'descripcion' => $node->getElementsByTagName('description')->item(0)->nodeValue,
				'url' => $node->getElementsByTagName('link')->item(0)->nodeValue,
				'fecha' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue
				);
				
			array_push($arrFeeds, $itemRSS);
		}	

		header('Content-Type: application/json');
		echo json_encode($arrFeeds);
	break;

	case 'recursosRSS':
		$sql= sprintf("select * from rss order by id");
		$resultados=$mysqli->query($sql,$conexion) or die($mysqli->error);
		while ($fila = $resultados->fetch_array())
		{
			// Almacenamos en un array cada una de las filas que vamos leyendo del recordset.
			// Cada fila del array coincidirá con el id del RSS.
			$datos[$fila['id']]=$fila;
		}
		header('Content-Type: application/json');
		echo json_encode($datos);
	break;
	
	case 'numRSS':	// Devuelve el número total de RSS que tenemos en la base de datos.
		$sql= sprintf("select * from rss order by id");
		$resultados=$mysqli->query($sql) or die($mysqli->error);
		echo $resultados->num_rows;
	break;
}
$mysqli->close();
?>
