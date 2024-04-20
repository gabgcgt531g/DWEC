// Arrays: 
// Se pueden crear con corchetes:
var Beatles = ["Paul", "John", "George", "Ringo"];

// Con new Array():
var Beatles = new Array("Paul", "John", "George", "Ringo");

// Objetos:
// Un objeto literal se puede crear entre llaves: { propiedad1:valor, propiedad2:valor, propiedad3:valor}
var Beatles = {
  "Country": "England",
  "YearFormed": 1959,
  "Style": "Rock'n'Roll"
}

// Que será equivalente a:
var Beatles = new Object();
Beatles.Country = "England";
Beatles.YearFormed = 1959;
Beatles.Style = "Rock'n'Roll";

// Y para acceder a sus propiedades lo podemos hacer con:
alert(Beatles.Style); // Notación de puntos
alert(Beatles["Style"]); // Notación de corchetes

// Los objetos también pueden contener arrays literales: [ … ]
var Beatles = {
  "Country": "England",
  "YearFormed": 1959,
  "Style": "Rock'n'Roll",
  "Members": ["Paul", "John", "George", "Ringo"]
}

//Y los arrays literales podrán contener objetos literales a su vez: {…} , {…}
var Rockbands =
  [
    {
      "Name": "Beatles", "Country": "England", "YearFormed": 1959, "Style": "Rock'n'Roll",
      "Members": ["Paul", "John", "George", "Ringo"]
    },
    {
      "Name": "Rolling Stones", "Country": "England", "YearFormed": 1962, "Style": "Rock'n'Roll",
      "Members": ["Mick", "Keith", "Charlie", "Bill"]
    }
  ]