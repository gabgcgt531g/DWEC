//Pide número
var numTabla = parseInt(prompt("Introduce un número entre el 1 y el 10"));

//Según el número elige un caso
switch (numTabla) {
    // En los casos 2, 4 y 8, suma el multiplica por números del 1 al 10
    case 2:
    case 4:
    case 8:
        let i = 1;
        for (; i <= 10 && i >= 1;) {
            document.write(numTabla + " x " + i + " = " + (parseInt(numTabla * i)) + " <br>");
            i++

        }
        break;
    // En los casos 3, 6 y 9, suma el número por números del 1 al 10
    case 3:
    case 6:
    case 9:
        let j = 1;
        while (j <= 10 && j >= 1) {
            document.write(numTabla + " + " + j + " = " + (parseInt(numTabla + j)) + " <br>");
            j++
        }
        break;
    case 1:
    case 5:
    case 7:
    case 10:
        let k = 1;
        do {
            document.write(numTabla + " / " + k + " = " + (parseFloat(numTabla / k)) + "<br>");
            k++;
        } while (k <= 10);
        break;
    default: alert("NOOOOOOO!! Solo números entre el 1 y el 10");
}