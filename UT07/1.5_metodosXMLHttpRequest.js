function cargarSync(objeto, url) {
  if (miXHR) {
    alert("Comenzamos la petición AJAX");

    //Si existe el objeto  miXHR
    miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA
    // Hacemos la petición al servidor. Como parámetro del método send:
    // null -> cuando usamos GET.

    // cadena con los datos -> cuando usamos POST
    miXHR.send(null);

    //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV
    textoDIV(objeto, miXHR.responseText);
    alert("Terminó la petición AJAX");
  }

}
