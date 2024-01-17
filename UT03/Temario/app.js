// app.js

// Obtener referencia al elemento con el id "titulo"
var tituloElemento = document.getElementById("titulo");

// Cambiar el contenido del elemento
tituloElemento.innerHTML = "¡Hola, DOM modificado!";

// Función para cambiar el texto del párrafo
function cambiarTexto() {
  // Obtener referencia al elemento con el id "parrafo"
  var parrafoElemento = document.getElementById("parrafo");

  // Cambiar el contenido del párrafo
  parrafoElemento.innerHTML = "Texto cambiado por JavaScript.";
}