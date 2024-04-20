document.write("<br/>El elemento <b>apellidos</b> contiene los pares <i>atributo -> valor</i>: <br/>");

for (var x = 0; x < document.getElementById("apellidos").attributes.length; x++) {
  var atrib = document.getElementById("apellidos").attributes[x];
  document.write(atrib.nodeName + " -> " + atrib.nodeValue + "<br/>");
}
