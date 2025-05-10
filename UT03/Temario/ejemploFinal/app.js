// app.js

// Función para agregar una nueva tarea
function agregarTarea() {
  // Obtener el valor del input de nueva tarea
  var nuevaTareaTexto = document.getElementById("nuevaTarea").value;

  // Validar que el campo no esté vacío
  if (nuevaTareaTexto.trim() === "") {
    alert("Por favor, ingresa una tarea válida");
    return;
  }

  // Crear un nuevo elemento de lista (li)
  var nuevaTareaElemento = document.createElement("li");

  // Establecer el texto del nuevo elemento
  nuevaTareaElemento.textContent = nuevaTareaTexto;

  // Agregar la nueva tarea a la lista
  document.getElementById("listaTareas").appendChild(nuevaTareaElemento);

  // Limpiar el campo de nueva tarea después de agregarla
  document.getElementById("nuevaTarea").value = "";

  // Se ejecuta cuando se añade una tarea
  const browserVersion = navigatorID.appVersion;
  console.log("Versión del navegador:", browserVersion);
  const userLanguage = navigator.language;
  console.log("Idioma del navegador:", userLanguage);
  const userAgent = navigator.userAgent;
  console.log("Agente de usuario:", userAgent);


}

// Puedes agregar más funcionalidades como marcar tareas como completadas, eliminar tareas, etc.
