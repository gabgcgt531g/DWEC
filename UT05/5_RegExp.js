var texto = "La linea de alta velocidad llegará pronto a toda España,";
var subcadena = "velocidad";
var i = texto.indexOf(subcadena); // devuelve 17, índice de donde se encuentra la subcadena
if (i == 17) {
  console.log("El resultado es " + i);
}// correcto, se ha encontrado la subcadena.

// Para crear una expresión regular, la defininmos entre /
// Ejemplo: var expresion = /expresion regular/;
var expresion2 = /Aloe\s+Vera/;

