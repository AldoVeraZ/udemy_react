// Asignación desestructurante de Arreglos
// Desestructuración de Arreglos

// Creamos un arreglo llamado personajes con tres valores
const personajes = ["Goku", "Vegeta", "Trunks"];

// Extraemos el tercer elemento del arreglo personajes usando la desestructuración
const [, , p3] = personajes;
console.log(p3); // Resultado esperado: "Trunks"

// Función retornaArreglo: retorna un arreglo con dos elementos
const retornaArreglo = () => {
  return ["ABC", 123];
};

/* Alternativa simplificada: podemos también retornar el arreglo en una sola línea sin el return explícito
const retornaArreglo = () => ["ABC", 123];
*/

// Extraemos los elementos del arreglo que retorna retornaArreglo y los asignamos a letras y numeros
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros); // Resultado esperado: "ABC 123"

/* Ejemplo alternativo tradicional: accedemos a cada índice manualmente 
console.log(personajes[0]); // "Goku"
console.log(personajes[1]); // "Vegeta"
console.log(personajes[2]); // "Trunks"
*/

// Tarea:
// 1. El primer valor del arreglo arr se llamará nombre
// 2. El segundo valor se llamará setNombre

// Función getState: retorna un arreglo con un valor y una función que imprime "Hola Mundo"
const getState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

// Desestructuración del arreglo retornado por getState
const [nombre, setNombre] = getState("Goku");
console.log(nombre); // Resultado esperado: "Goku"

// Llamamos a setNombre para ejecutar la función dentro del arreglo
setNombre(); // Resultado esperado: "Hola Mundo"
