////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
crearEvento(window,"load",iniciar);
/////////////////////////////////////////////////////////

function iniciar()
{
	// Creamos un objeto XHR.
	miXHR = new objetoXHR();
	
	// Cargamos de forma asíncrona el texto que nos devuelve la página
	// procesar.php
	// En este caso sólo ponemos los parámetros que pasaremos a la página procesar.php
	cargarAsync("nombre=Teresa&apellidos=Blanco Ferreiro");
}

/////////////////////////////////////////////////////////
// Función cargarASync: carga el contenido con los parametros
// que se le vana a pasar a la petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(parametros) 
{ 
	if (miXHR) 
	{	
		// Activamos el indicador Ajax antes de realizar la petición.
		document.getElementById("indicador").innerHTML="<img src='ajax-loader.gif'/>";
		
		// Abrimos la conexión al servidor usando método POST y a la página procesar.php
		miXHR.open('POST', "procesar.php", true);   // Abrimos la url, true=ASINCRONA 
		
		// En cada cambio de estado(readyState) se llamará a la función estadoPeticion
		miXHR.onreadystatechange = estadoPeticion;
	
		// En las peticiones POST tenemos que enviar en la cabecera el Content-Type
		//ya que los datos se envían formando parte de la cabecera.
		miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		
		// Hacemos la petición al servidor con los parámetros: nombre=Teresa&apellidos=Blanco...
		miXHR.send(parametros);
	}
}

/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que la petición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText o responseXML
/////////////////////////////////////////////////////////
function estadoPeticion()
{	// Haremos la comprobación en este orden ya que primero tiene que llegar readyState==4 
	// y por último se comprueba el status devuelto por el servidor==200.
	if ( this.readyState==4 && this.status == 200 )
	{
		// Desactivamos el indicador AJAX.
		document.getElementById("indicador").innerHTML="";
		
		// Metemos en el contenedor resultados las respuestas de la petición AJAX.
		textoDIV(document.getElementById("resultados"), this.responseText);
	}
}