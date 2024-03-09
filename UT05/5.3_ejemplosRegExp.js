// =>> Comprobación de si subcadena exite dentro de otra

var datos = new Array();
datos[0] = "El Blogger de Google";     // verdadero
datos[1] = "El blogger de Google";     // falso
datos[2] = "BloggerGoogle";            // verdadero
datos[3] = "Google Blogger";           // falso

var patron = /Blog.*Goog/;
// Patrón de búsqueda
// Contenga "Blog" cualquier caracter(.) 0 o más veces (*) y a continuación "Goog"
for (var i = 0; i < datos.length; i++) {
  console.log(datos[i] + " " + patron.test(datos[i]));
}