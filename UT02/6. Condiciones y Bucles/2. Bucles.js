/* --------------------Bucle for-----------------------------------/
//Comentado por fallo en vscoe
for (expresión inicial; condición; incremento) {
    // Sentencias a ejecutar dentro del bucle.
}
*/
//Ejemplo:
var i = 0;
for  (var  i=1;  i<=20;  i++) {
    console.log(i);
    // Sentencias que se ejecutarán 20 veces.
}

/* --------------------Bucle while-----------------------------------*/
while (condición) {
    // Sentencias a ejecutar dentro del bucle.
}
//Ejemplo:
var i=0;
while (i <=10) {
    // Sentencias a ejecutar dentro del bucle hasta que i sea mayor que 10 y no se cumpla la condición.
    i++;
    console.log(i);
}

/* ----------------------Bucle do-while-------------------------------*/
do {
     // Sentencias a ejecutar dentro del bucle.
} while (condición);
//Ejemplo:
var a = 1;
do {
    console.log("El valor de a es: " + a);     // Mostrará esta alerta 2 veces.
     a++;
} while (a < 3);