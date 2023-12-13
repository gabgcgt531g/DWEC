var numTabla = window.prompt("Introduce el número de la tabla entre el 0 y el 10 ")
var i = 1;
if (numTabla > 10 || numTabla < 0) {
    document.write("¡El valor debe ser entre 0 y 10!");
} else {
    document.write(numTabla + " x " + i + " = " + (numTabla * i) + "<br>");
    i++;
}


/*
let tabla = "La tabla del " + numTabla + " es:<br> <br>";
document.write(tabla);

do {
    
    document.write(numTabla + " x " + i + " = " + (numTabla * i) + "<br>");
    i++;

} while (i <= 10);
document.write("<br>¡FIN DE LA TABLA DEL " + numTabla + "!");
*/