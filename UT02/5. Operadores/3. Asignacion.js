//Valor inicial de 'a'
var a = 5;

//Al valor incial le suamos dos. Resultado 7
a += 2
console.log(a);

//Al valor resultante, 7, le restamos 3. Resultado 4
a -= 3;
console.log(a);

//Al valor resultante, 4, lo multiplicamos por 2. Resultado 8
a *= 2;
console.log(a);

//Al valor resultante, 8, le dividmos por 2. Resultado 4
a /= 1;
console.log(a);

//Al valor resultante, 4, le extraemos el resto diviendo entre 3. Resultado 2
a %= 3;
console.log(a);

//Al valor de b en binario lo desplazamos tantos ceros a su derecha como el valor de c
var b = 23;
var c = 12;
b <<= c;
console.log("b es igual a " +b);

//Al valor de d en binario lo desplazamos 1 tantos ceros a su izquierda como el valor de e
var d = 18;
var e = 3
d >>= e;
console.log("d es igual a " +d);