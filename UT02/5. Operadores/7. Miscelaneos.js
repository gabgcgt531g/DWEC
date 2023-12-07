// La coma sirve para separar variables, por ejemplo.
var nombre, direccion, apellidos, edad;
nombre = "simpson ";
direccion= " mi casa ";
apellidos = " gonzalez carvajal ";
edad = 28;
console.log(nombre + apellidos + direccion + edad);
// La coma también puede servir dentro de un bucle, para separar sus condiciones.
for (var i=0, j=0; i<125, j>1; i++, j+10){
    //completar con instrucciones
}

// Simbolo ? para sustituir if/else
var a,b;
a = 3; 
b = 5;
var h = a > b ? a : b;      // a h se le asignará el valor 5;
console.log(h);


// El operador typeof identifica el valor de una  variable o expresión.
// Puede ser number, string, boolean, function o undefined
var miVariable = true;

if  (typeof  miVariable  ==  "number") {
    miVariable  =  parseInt(miVariable);
    console.log("La variables es " + miVariable + " y es de tipo " + typeof miVariable);
}
else{
    console.log("La variables es " + miVariable + " y es de tipo " + typeof miVariable);
}