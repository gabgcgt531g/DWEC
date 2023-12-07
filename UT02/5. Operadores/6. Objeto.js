// .punto
var  s  =  new  String('rafa');
var  longitud  =  s.length;
var  pos  =  s.indexOf("fa");
console.log(pos); //  resultado:  pos  =  2

// corchetes
var a = ["Santiago","Coruña", "Lugo"];  // Para crear un array
a[1] = "Coruña";                        // Para enumerar el elemento de un array
a["color"] = "azul";                    // Para enumerar la propiedad de un objeto

// Delete. Borrar elemento de una colección
var oceanos = new Array("Atlantico", "Pacifico", "Indico","Artico");

delete oceanos[2];
console.log(oceanos); // Resultado: [ 'Atlantico', 'Pacifico', <1 empty item>, 'Artico' ]
console.log(oceanos[2]); // Resultado: undefined

/*
// In. inspecciona métodos o propiedades de un objeto
"write" in document
"defaultView" in document
*/

// instanceof. Comprueba si un objeto es una instacia nativa de un objeto de JavaScript
a = new Array(1,2,3);
var b = 20;
console.log(a instanceof Array); // devolverá true.
console.log(b instanceof Array); // devolverá false.

// new. Creará el objeto hoy de tipo Date() empleando el constructor por defecto de dicho objeto.
var hoy = new Date();

// this. Este this hace referencia al objeto nombre que estamos validando.
function  validateInput(evt) {
    nombre.onchange = validateInput;
        var  valorDeInput  =  this.value;        
}