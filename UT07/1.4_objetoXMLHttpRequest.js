/////////////////////////////////////////////////////////
// Función cross-browser para crear objeto XMLHTTPRequest
/////////////////////////////////////////////////////////
function objetoXHR() {
  if (window.XMLHTTPRequest) {
    // El navegador implementa la interfaz XHR de forma nativa
    return new XMLHTTPRequest();
  } else if (window.ActiveXObject) {
    var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
      'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
    for (var i = 0; i < versionesIE.length; i++) {
      try {
        /* Se intenta crear el objeto en Internet Explorer comenzando
        en la versión más moderna del objeto hasta la primera versión.
        En el momento que se consiga crear el objeto, saldrá del bucle
        devolviendo el nuevo objeto creado. */
        return new ActiveXObject(versionesIE[i]);
      } catch (errorControlado) { }  //Capturamos el error,
    }
  }
  /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
  Emitimos un mensaje de error usando el objeto Error.    
  Más información sobre gestión de errores en:
  HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML */
  throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}
// para crear un objeto XHR lo podremos hacer con la siguiente llamada.
var objetoAJAX = new objetoXHR();
