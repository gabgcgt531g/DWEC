// Condición if
if  (typeof  miVariable  ==  "number") {
    miVariable  =  parseInt(miVariable);
}
//Ejemplo
if (miEdad >30) {
    console.log("Ya eres una persona adulta");
}

    
// Condición if-else
if  (condición) { // entre paréntesis irá la condición que se evaluará a true o false.
    // instrucciones a ejecutar si se cumple la condición
} 
else {
    // instrucciones a ejecutar si no se cumple la condición
}
//Ejemplo:
if (miEdad <30) {
    console.log("Ya eres una persona adulta.");
} 
else {
    console.log("Eres una persona joven.");
}

// Condición switch
switch  (expresión) { // entre paréntesis escribimos la expresión a evaluar
    case valor1, valor2:// instrucciones a ejecutar si la evaluación de la expresión coincide con alguno de los valores
        break;  // importante para romper el flujo
    case valorN, valorN+1: // instrucciones a ejecutar si la evaluación de la expresión coincide con alguno de los valores
        break; // importante para romper el flujo
    default:   // instrucciones a ejecutar si la evaluación de la expresión no coincide con algún valor.
}
//Ejemplo:
switch (tipoIVA) {
     case 4: alert("Superreducido");
            break;
     case 10: alert("Reducido");
            break;
     case 21: alert("General");
            break;
     default: alert("Valor de IVA incorrecto");
}
