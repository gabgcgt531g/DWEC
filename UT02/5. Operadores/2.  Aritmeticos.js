//  Inicializamos  a  al valor  10
var  a  =  10;
//  Inicializamos  z  al valor 0
var  z  =  0;   
//  a  es igual a 10,  por lo tanto  z  es igual a 10.
console.log(z =  a);
//  el valor de a se incrementa justo antes de ser asignado a z, por lo que a es 11 y z valdrá 11.
console.log(z  =  ++a);
//  se asigna el valor de a (11) a z y luego se incrementa el valor de a (pasa a ser 12).
z  =  ++a
console.log(z  =  a++);      
//  a vale 12 antes de la asignación, por lo que z es igual a 12; una vez hecha la asignación a valdrá 13.
console.log(z  =  a++);

//Inicializamos x cn valor 2
var  x  =  2;
//Inicializamos y con valor 8
var  y  =  8;
//  z  es igual a -2,  pero x sigue siendo igual a 2.
var  z  =  -x;      
//  z  es igual a -10,  x es igual a 2 e y es igual a 8.
console.log(z  =  - (x  +  y));  
//  z  es igual a 6,  pero x sigue siendo igual a 2 e y igual a 8.
console.log(z  =  -x  +  y);     
