function iniciar() {

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

function cargarAsync(parametros) {
  if (miXHR) {
    // Activamos el indicador AJAX antes de realizar la petición.
    document.getElementById("indicador").innerHTML = "<img src='AJAX-loader.gif'/>";

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