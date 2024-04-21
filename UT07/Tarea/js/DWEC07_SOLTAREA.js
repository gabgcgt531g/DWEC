// Variables GLOBALES.
// Esta variable contendrá todo el contenido HTML de los RSS para la precarga.
var misRSS = new Array();
// Esta variable contiene el RSS que se está mostrando actualmente.
var rssActivo = -1;
// Creamos un objeto XHR para hacer las peticiones AJAX a nivel global.
var miXHR = new objetoXHR();
// Cuando el documento esté preparado...
$(document).ready(function () {
     // Cubrimos el campo select con el listado de RSS.
     cubrirSelectRSS();
     // Precargamos todos los RSS y los metemos en un array.
     precargarRSS("todo");
     // Mostrar el RSS seleccionado por defecto en el campo select.
     mostrarSeleccionRSS();
     // Programamos el evento de cambio en el campo Select de RSS.
     $("#campoSelect").change(function () {
          mostrarSeleccionRSS();
     });
     // Programamos el evento de pulsar el boton de Eliminar RSS.
     $("#borrarRSS").click(function () {
          if ($("#campoSelect").val() != "-1") {
               if (confirm("Esta seguro/a de eliminar este recurso RSS")) {
                    $.get("rss.php", {
                         accion: "borrar",
                         id: $("#campoSelect").val()
                    }, function (datos) {
                         if (datos == "OK")
                              cubrirSelectRSS();
                         mostrarSeleccionRSS();

                    });
               }
          }

     });
     // Programamos el boton <ANTERIOR
     $("#anterior").click(function () {
          // Si la opción seleccionada no es la primera opción.
          if ($("#campoSelect option:selected").index() != 0) {
               document.getElementById("campoSelect").selectedIndex--;
               mostrarSeleccionRSS();
          }
     });
     // Programamos el boton SIGUIENTE>
     $("#siguiente").click(function () {
          // Si el índice de la opción seleccionada no es la última...
          if ($("#campoSelect option:selected").index() < $("#campoSelect option").size() - 1) {
               document.getElementById("campoSelect").selectedIndex++;
               mostrarSeleccionRSS();
          }
     });
     // Asignamos eventos al botón de Añadir RSS
     crearEvento(document.getElementById("crearRSS"), "click", grabarRSS);
});

function cubrirSelectRSS() {
     // Leemos el listado de RSS y actualizamos el campo select
     $.getJSON("rss.php?accion=recursosRSS",
          function (datos) {
               var texto = "";
               $.each(datos, function (contador, objeto) {
                    texto += "<option value='" + objeto.id + "'>" + objeto.titulo + "</option>";
               });
               $("#campoSelect").html(texto);
          });
}

function precargarRSS(numero) {
     // Inicializamos el número total de RSS.
     // Esta variable la necesitamos para desactivar el indicador AJAX
     // cuando termine de precargar todos los RSS.
     var total = 0;
     var contador = 0;
     activarIndicadorAjax();
     // Averiguamos cuantos RSS hay en la tabla.
     $.get("rss.php?accion=numRSS", function (datos) {
          if (numero == 1) {
               total = 1;
          } else {
               total = datos;
          }
     });
     // Leemos el listado de RSS y actualizamos el campo select
     $.getJSON("rss.php?accion=recursosRSS",
          function (datos) {
               // Para cada registro del listado de RSS hace lo siguiente:
               $.each(datos, function (indice1, objeto) {
                    if (numero == "todo" || numero == indice1) {
                         // Carga el contenido JSON de ese recurso RSS en Internet.
                         $.getJSON("rss.php",
                              {
                                   accion: "cargar", id: objeto.id
                              },
                              function (datosrss) {
                                   var texto = "";
                                   $.each(datosrss,
                                        function (indice2, objeto) {
                                             texto += "<h3>" + objeto.titulo + "</h3>" + objeto.descripcion + "<br/><hr/>";

                                        });
                                   // Metemos todo el contenido del RSS en misRSS, en la posición correspondiente
                                   // al id del RSS en la base de datos.
                                   misRSS[indice1] = texto;
                                   contador++;
                                   if (contador == total) {
                                        desactivarIndicadorAjax();
                                   }
                              });
                    }
               });

          });
}

/////////////////////////////////////////////////////////
// Función mostrarSeleccionRSS: muestra en el contenedor #noticias el RSS
// que está seleccionado en el campo de selección.
// Lo hace empleando efectos de animación fadeIn y fadeOut.
/////////////////////////////////////////////////////////
function mostrarSeleccionRSS() {
     activarIndicadorAjax();
     $("#noticias").fadeOut(1000, function () {
          var texto = "<h1>Fuente RSS: " + $("#campoSelect option:selected").text() + "</h1>" + misRSS[$("#campoSelect").val()];
          $("#titulo").html("Lector de Titulares RSS con AJAX y jQuery >>> Fuente RSS: " + $("#campoSelect option:selected").text());
          $(this).html(texto).delay(1500).fadeIn(1000, function () { desactivarIndicadorAjax(); });
     });
}

/////////////////////////////////////////////////////////
// Función grabarRSS: será llamada a cada cambio de estado de la petición AJAX
// cuando la respuesta del servidor es 200(fichero encontrado) y el estado de
// la solicitud es 4, accedemos a la propiedad responseText
/////////////////////////////////////////////////////////

function grabarRSS() {
     tituloRSS = prompt("Introduzca Titulo del nuevo recurso RSS", "");
     urlRSS = prompt("Introduzca URL del nuevo recurso RSS", "http://");
     if (tituloRSS != "" && tituloRSS != null && urlRSS != "http://" && urlRSS != null) {
          cargarAsync("rss.php?accion=nueva&titulo=" + tituloRSS + "&url=" + urlRSS,
               function () {
                    if (this.readyState == 4 && this.status == 200) {
                         precargarRSS(this.responseText);
                         cubrirSelectRSS();
                    }
               });
     }

}

