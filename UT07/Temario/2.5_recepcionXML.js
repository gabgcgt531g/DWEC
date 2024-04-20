function estadoPeticion() {
  function td(elemento) {
    return `<td>${elemento.textContent}</td>`;
  }
  if (this.readyState == 4 && this.status == 200) {
    // Almacenamos el fichero XML en la variable datos.
    var datos = this.responseXML;
    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    // Array que contiene todos los CD's del fichero XML
    var CDs = Array.from(datos.documentElement.getElementsByTagName("CD"));
    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    salida = "<table border='1'><tr><th>Titulo</th><th>Artista</th><th>Año</th></tr>";
    // Mapeamos una función que extrae los atributos de cada CD y compone las filas
    // de la tabla
    salida += CDs.map(function (cd) {
      var atributos = cd.children;
      var arrcds = Array.concat(atributos[0], atributos[1], atributos[5]);
      return `<tr>${arrcds.map(td).join(" ")}</tr>`;
    }).join(" ");
    // Cuando ya no hay más Cd's cerramos la tabla.
    salida += "</table>";
    // Desactivamos el indicador AJAX cuando termina la petición
    document.getElementById("indicador").innerHTML = "";
    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultados").innerHTML = salida;
  }
}