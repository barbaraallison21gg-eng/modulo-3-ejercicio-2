// 1. Inicialización: Declara un array vacío para la lista de tareas.
let listaDeTareas = [];
let agregarMas = true;

// 2. Añadir Tareas de forma interactiva (Bucle while)
while (agregarMas) {
    // Solicitar al usuario que ingrese una nueva tarea.
    let nuevaTarea = prompt("📝 Ingresa una nueva tarea (o presiona Cancelar para terminar):");

    // Verificar si el usuario ingresó algo (si presiona Cancelar, nuevaTarea es null).
    if (nuevaTarea === null) {
        // El usuario presionó Cancelar en el prompt, salimos del bucle.
        agregarMas = false;
    } else if (nuevaTarea.trim() !== "") {
        // La tarea no está vacía (después de quitar espacios en blanco al inicio/final).

        // Añadir la tarea ingresada al final del array.
        listaDeTareas.push(nuevaTarea.trim());

        // Preguntar al usuario si desea agregar otra tarea.
        agregarMas = confirm("¿Deseas agregar otra tarea?");
    } else {
        // Manejar el caso de una entrada vacía (solo espacios o entrada vacía).
        alert("⚠️ Por favor, ingresa una tarea válida.");
        // Opcional: preguntar de nuevo si desea continuar, aunque en este caso simplemente continúa el bucle.
    }
}

// 3. Mostrar la Lista Final
console.log("-----------------------------------------");
console.log("📝 --- Lista de Tareas Pendientes --- 📝");
console.log("-----------------------------------------");

// Verificar si hay tareas antes de intentar mostrarlas.
if (listaDeTareas.length === 0) {
    console.log("¡No hay tareas pendientes!");
} else {
    // Usar un bucle for para iterar sobre el array y mostrar la lista numerada.
    for (let i = 0; i < listaDeTareas.length; i++) {
        // Imprimir cada tarea, usando (i + 1) para la numeración.
        console.log(`${i + 1}. ${listaDeTareas[i]}`);
    }
}

console.log("-----------------------------------------");