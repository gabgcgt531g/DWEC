////////////////////////////////////////////////////////////////////
// Cuando el documento esté cargado llamamos a la función iniciar().
////////////////////////////////////////////////////////////////////
crearEvento(window,"load",iniciar);
/////////////////////////////////////////////////////////

function iniciar()
{
	// Creamos un objeto XHR.
	miXHR = new objetoXHR();
	
	// Cargamos el fichero fecha.php de forma asíncrona.
	cargarAsync("fecha.php");
}

/////////////////////////////////////////////////////////
// Función cargarAsync: carga el contenido de la url
// usando una petición AJAX de forma ASINCRONA.
/////////////////////////////////////////////////////////
function cargarAsync(url) 
{ 
	if (miXHR) 
	{	
		alert("Comenzamos la petición AJAX");

		//Si existe el objeto  miXHR
		miXHR.open('GET', url, true); //Abrimos la url, true=ASINCRONA 
		
		// En cada cambio de estado(readyState) se llamará a la función estadoPeticion
		miXHR.onreadystatechange = estadoPeticion;
	
		// Hacemos la petición al servidor. Como parámetro: null ya que los datos van por GET
		miXHR.send(null);
	}
}

/////////////////////////////////////////////////////////
// Función estadoPeticion: será llamada en cada cambio de estado de la petición.
// Cuando el estado de la petición(readyState) ==4 quiere decir que la petición ha terminado.
// Tendremos que comprobar cómo terminó(status): == 200 encontrado, == 404 no encontrado, etc.
// A partir de ese momento podremos acceder al resultado en responseText o responseXML
/////////////////////////////////////////////////////////
function estadoPeticion()
{
	switch(this.readyState) // Evaluamos el estado de la petición AJAX
	{ 	// Vamos mostrando el valor actual de readyState en cada llamada.
		case 0:  document.getElementById('estado').innerHTML += "0 - Sin iniciar.<br/>";
		break;
		case 1: document.getElementById('estado').innerHTML += "1 - Cargando.<br/>";
		break;
		case 2: document.getElementById('estado').innerHTML += "2 - Cargado.<br/>";
		break;
		case 3: document.getElementById('estado').innerHTML += "3 - Interactivo.<br/>";
		break;
		case 4: document.getElementById('estado').innerHTML += "4 - Completado.";
			if (this.status == 200)	// Si el servidor ha devuelto un OK
			{
			// Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
			textoDIV(document.getElementById("resultados"), this.responseText);
			alert("Terminó la petición AJAX");
			}
		break;
	} 
}