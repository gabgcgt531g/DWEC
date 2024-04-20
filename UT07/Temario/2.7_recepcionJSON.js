// Asignamos a la variable resultados la evaluación de responseText
var resultados = eval('(' + this.responseText + ')');

// Hacemos un bucle para recorrer todos los objetos literales recibidos en el array resultados y mostrar su contenido.
for (var i = 0; i < resultados.length; i++) {
  objeto = resultados[i];
  texto += "<tr><td>" + objeto.nombrecentro + "</td><td>"
    + objeto.localidad + "</td><td>" + objeto.provincia + "</td><td>" + objeto.telefono + "</td><td>" + objeto.fechavisita + "</td><td>" +
    objeto.numvisitantes + "</td></tr>";
}