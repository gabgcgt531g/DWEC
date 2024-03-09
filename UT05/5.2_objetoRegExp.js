// Se puede usar RegExp como un constructor
var expresionRegular = new RegExp("Texto expresion regular");

// =>> Ejemplo de Mistral

// Definir el patrón y los indicadores
const pattern = "donde";
const flags = "gi"; // Indicador "g" para buscar todas las ocurrencias y "i" para ignorar mayúsculas y minúsculas

// Crear el objeto RegExp utilizando el constructor
const regex = new RegExp(pattern, flags);

// Texto de ejemplo
const text = "Esta es una prueba con la palabra 'donde' y la palabra 'DONDE' en mayúsculas.";

// Utilizar el método match() del objeto String para buscar todas las ocurrencias de la palabra en el texto
const matches = text.match(regex);

// Imprimir las ocurrencias encontradas
console.log(matches); // Devuelve ["palabra", "PALABRA"]