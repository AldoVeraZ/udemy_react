// Funciones en JavaScript

// Creamos una función básica que recibe un nombre y retorna un saludo personalizado.
// Esta función concatena el texto "Hola" con el nombre recibido.
/* function saludar(nombre) {
  return `Hola, ${nombre}`;
} 

// Es posible reasignar la función a otro valor accidentalmente, como a un número. 
// Esta reasignación puede causar errores y confusión en el código.
// Por eso no es recomendable definir funciones de esta manera.
/* saludar = 30; */

/* En su lugar, se puede declarar la función como una constante para prevenir reasignaciones accidentales.
// Esto asegura que la función mantenga su propósito sin sobrescribirse en el flujo de código.
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
}; */

// Transformamos la función `saludar` en una función de flecha.
// La función de flecha es una versión más concisa de la función tradicional.
const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Simplificación de la función de flecha.
// Cuando una función de flecha solo retorna un valor, se puede omitir `return` y las llaves.
const saludar3 = (nombre) => `Hola, ${nombre}`;

// Función de flecha sin argumentos que retorna un saludo.
// Las funciones de flecha son ideales para crear funciones compactas y claras.
const saludar4 = () => `We are Venom!`;

// Llamada de las funciones para mostrar el resultado en consola.
console.log(saludar2("Punisher")); // Llamada con el nombre "Punisher" -> "Hola, Punisher"
console.log(saludar3("Venom")); // Llamada con el nombre "Venom" -> "Hola, Venom"
console.log(saludar4()); // Llamada sin argumentos -> "We are Venom!"

// Retorno de objetos con funciones de flecha
// Las funciones de flecha permiten retornar objetos de manera simplificada.
// Para retornar un objeto, debemos envolverlo entre paréntesis.
const getUser = () => ({
  uid: "ABC123",
  username: "Krusty7023",
});

// Llamada de la función getUser que retorna un objeto.
const user = getUser();
console.log(user); // Muestra el objeto con uid y username

// Tarea: transformar la función getUsuarioActivo a una función de flecha,
// que retorne un objeto implícito, y probar su funcionalidad.

// Función original que recibe un nombre y retorna un objeto con el uid y el nombre como username.
/* function getUsuarioActivo(nombre) {
  return {
    uid: "ABC4567",
    username: nombre,
  };
} */

// Transformación a función de flecha con retorno de objeto implícito
const getUsuarioActivo = (nombre) => ({
  uid: "ABC4567",
  username: nombre,
});

// Llamada de la función transformada con el nombre "Tom"
const usuarioActivo = getUsuarioActivo("Tom");
console.log(usuarioActivo); // Muestra el objeto con uid y username "Tom"
