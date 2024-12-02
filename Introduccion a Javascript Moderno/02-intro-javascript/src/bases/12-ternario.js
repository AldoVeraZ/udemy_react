// Operador condicional ternario
const activo = true;

// let mensaje = "";

// if (!activo) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

// const mensaje = activo ? "Activo" : "Inactivo";

// const mensaje = !activo ? "Activo" : null;

const mensaje = activo === true && "Activo";

console.log(mensaje);

// Apunte completo de la clase
// Introducción:
// En esta clase aprendimos sobre el operador condicional ternario y una versión corta
// con el operador `&&`. El profesor explicó cómo reemplazar estructuras tradicionales
// de `if/else` para asignar valores de manera más concisa.

// Ejemplo 1: Estructura tradicional con if/else
// const activo = true; // Variable booleana que indica si está activo

// Declaramos la variable mensaje
// let mensaje;

// Usamos una estructura if/else para asignar un valor a la variable según la condición
// if (activo) {
//   mensaje = "Activo"; // Si activo es true, asigna "Activo"
// } else {
//   mensaje = "Inactivo"; // Si activo es false, asigna "Inactivo"
// }

// console.log(mensaje); // Resultado: "Activo" o "Inactivo" según la condición

// Explicación:
// Esta es la forma tradicional de asignar valores basados en una condición.
// Es funcional, pero ocupa varias líneas de código.

// Ejemplo 2: Simplificación con el operador condicional ternario
// Aquí reemplazamos la estructura if/else con un operador ternario:
// const mensajeTernario = activo ? "Activo" : "Inactivo";

// console.log(mensajeTernario); // Resultado: "Activo" o "Inactivo"

// Explicación:
// El operador ternario tiene la sintaxis:
// `condición ? valor_si_true : valor_si_false`.
// Esto permite asignar valores de manera más compacta.

// Ejemplo 3: Ternario con caso nulo
// Usamos el operador ternario cuando solo necesitamos ejecutar algo si la condición es true.
// const mensajeNulo = activo ? "Activo" : null;

// console.log(mensajeNulo); // Resultado: "Activo" si activo es true; null si es false

// Explicación:
// En este caso, el else devuelve `null` para indicar que no se hace nada cuando la condición es false.

// Ejemplo 4: Uso del operador &&
// Ahora usamos el operador lógico `&&` para manejar una condición sin un else.
// const mensajeAND = activo && "Activo";

// console.log(mensajeAND); // Resultado: "Activo" si activo es true; undefined si es false

// Explicación:
// El operador `&&` evalúa el lado derecho solo si la condición del lado izquierdo es true.
// Esto es útil para escribir código más conciso cuando no necesitamos manejar el caso false.

// Nota adicional:
// Si `activo` es false, el operador `&&` no ejecutará el código a la derecha y devolverá false o undefined.
// Esto es especialmente útil en frameworks como React para mostrar elementos condicionalmente.

// Conclusión:
// Estos métodos permiten simplificar la escritura del código y mejorar su legibilidad.
// El uso de operadores ternarios y el operador `&&` será muy útil en el desarrollo con React,
// donde constantemente manejamos condiciones para renderizar elementos de manera condicional.
