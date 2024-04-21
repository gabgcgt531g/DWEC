/////////////////////////////////////////////////////////
// Funcion cross-browser para crear objeto XMLHttpRequest
/////////////////////////////////////////////////////////
function objetoXHR() {
	if (window.XMLHttpRequest) {
		// El navegador implementa la interfaz XHR de forma nativa
		return new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		var versionesIE = new Array('Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0',
			'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP', 'Microsoft.XMLHTTP');

		for (var i = 0; i < versionesIE.length; i++) {
			try { /* Se intenta crear el objeto en Internet Explorer comenzando
			en la versi�n m�s moderna del objeto hasta la primera versi�n. 
			En el momento que se consiga crear el objeto, saldr� del bucle
			devolviendo el nuevo objeto creado. */
				return new ActiveXObject(versionesIE[i]);
			}
			catch (errorControlado) { }//Capturamos el error,
		}
	}

	/* Si llegamos aqu� es porque el navegador no posee ninguna forma de crear el objeto.
	Emitimos un mensaje de error usando el objeto Error. 
	
	M�s informaci�n sobre gesti�n de errores en:
	http://www.javascriptkit.com/javatutors/trycatch2.shtml */

	throw new Error("No se pudo crear el objeto XMLHttpRequest");
}


/////////////////////////////////////////////////////////
// Funci�n cross-browser para a�adir Eventos
/////////////////////////////////////////////////////////
var crearEvento = function () {
	function w3c_crearEvento(elemento, evento, mifuncion) {
		elemento.addEventListener(evento, mifuncion, false);
	}

	function ie_crearEvento(elemento, evento, mifuncion) {
		var fx = function () {
			mifuncion.call(elemento);
		};

		// Enlazamos el evento con attachEvent. Cuando usamos attachEvent
		// dejamos de tener acceso al objeto this en mifuncion. Para solucionar eso
		// usaremos el m�todo call() del objeto Function, que nos permitir�
		// asignar el puntero this para su uso dentro de la funci�n. El primer
		// par�metro que pongamos en call ser� la referencia que se usar� como 
		// objeto this dentro de nuestra funci�n. De esta manera solucionamos el problema
		// de acceder a this usando attachEvent en Internet Explorer.

		elemento.attachEvent('on' + evento, fx);
	}

	if (typeof window.addEventListener !== 'undefined') {
		return w3c_crearEvento;
	}

	else if (typeof window.attachEvent !== 'undefined') {
		return ie_crearEvento;
	}
}();	// <= Esta es la parte m�s cr�tica - tiene que terminar en ()


/////////////////////////////////////////////////////////
// Funci�n cross-browser para modificar el contenido
// de un DIV
/////////////////////////////////////////////////////////
function textoDIV(nodo, texto) {
	//var nodo = document.getElementById(idObjeto); 
	while (nodo.firstChild)
		nodo.removeChild(nodo.firstChild); // Eliminamos todos los hijos de ese objeto.
	// Cuando ya no tenga hijos, agregamos un hijo con el texto que recibe la funci�n.
	nodo.appendChild(document.createTextNode(texto));
}