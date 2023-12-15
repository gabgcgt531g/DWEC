var numTabla = window.prompt("Introduce el número de la tabla entre el 0 y el 10");
var i = 1;


switch (numTabla) {
    case 2:
    case 4:
    case 8:
        for (; i <= 10 && i >= 1;) {
            document.write(numTabla + " x " + i + " = " + (numTabla * i) + " <br>");
            i++
        }
        break;
    case 3:
    case 6:
    case 9:
        while (i <= 10 && i >= 1) {
            var res = numTabla + i;
            document.write(numTabla + " + " + i + " = " + (numTabla + i) + " <br>");
            i++
        }
        break;
    case 1:
    case 5:
    case 7:
    case 10:
        do {
            document.write(numTabla + " x " + i + " = " + (numTabla / i) + "<br>");
            i++;
        } while (i <= 10);
        break;

    default: "El número no es entre el 1 y el 10"
}




/*if (numTabla % 3 == 0) {
    while (i <= 10 && i >= 1) {
        var res = numTabla + i;
        document.write(numTabla + " + " + i + " = " + (res) + " <br>");
        i++
    }

} else if (numTabla == 2 || numTabla == 4 || numTabla) {
    for (; i <= 10 && i >= 1;) {
        document.write(numTabla + " x " + i + " = " + (numTabla * i) + " <br>");
        i++
    }
} else {
    document.write("--")
}*/



/*if (numTabla == 2 || numTabla == 4 || numTabla) {
    document.write("Tabla del " + numTabla + " utilizando operadores artiméticos:<br><br>");
    for (; i <= 10 && i >= 1;) {
        document.write(numTabla + " x " + i + " = " + (numTabla * i) + " <br>");
        i++
    }
} else */

/*
var numTabla = window.prompt("Introduce el número de la tabla entre el 0 y el 10 ")
if (numTabla > 10 || numTabla < 0) {
    document.write("¡El valor debe ser entre 0 y 10!");
} else {
    document.write(numTabla + " x " + i + " = " + (numTabla * i) + "<br>");
    i++;
}

else if (numTabla <= 10 && numTabla >= 1) {
    document.write("La tabla de multiplicar del " + numTabla + " es: <br>");
    do {
        document.write(numTabla + " x " + i + " = " + (numTabla / i) + "<br>");
        i++;
    } while (i <= 10);
} else {
    document.write("El numero es erróneo")
}


let tabla = "La tabla del " + numTabla + " es:<br> <br>";
document.write(tabla);

do {
    
    document.write(numTabla + " x " + i + " = " + (numTabla * i) + "<br>");
    i++;

} while (i <= 10);
document.write("<br>¡FIN DE LA TABLA DEL " + numTabla + "!");
*/