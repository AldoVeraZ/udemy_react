//

// RESUMENES Y APUNTES:
// Resumen de la clase en comentarios y el código correspondiente

/*
  Clase: Introducción a los Hooks en React
  ----------------------------------------------------
  El profesor explica el concepto de Hooks en React, que fueron introducidos a partir de la versión 16.8.
  Los hooks son funciones especiales que permiten trabajar con el estado y el ciclo de vida en componentes funcionales,
  reemplazando la necesidad de usar componentes de clase (class components).

  - Los hooks deben comenzar con la palabra "use" (regla recomendada por React).
  - El primer hook que se utiliza es `useState`, el cual permite manejar estados en componentes funcionales.

  Ejercicio práctico: Implementación de un contador con `useState`
  ----------------------------------------------------
  1. Importamos el hook `useState` desde React.
  2. Creamos un estado inicial (a partir de una prop llamada `value`) y lo desestructuramos.
     - `counter` es el valor del estado.
     - `setCounter` es la función que permite actualizar el estado.
  3. Creamos un botón que, al hacer clic, llama a una función que actualiza el estado con `setCounter`.
  4. Explicación del flujo: 
     - Al llamar a `setCounter`, React detecta un cambio en el estado y vuelve a renderizar el componente.

  Nota importante:
  - No podemos cambiar el valor directamente de `counter` porque es una constante.
  - Usamos la función `setCounter` para cambiar su valor, lo cual re-renderiza el componente.
*/

// import { useState } from "react";
// import PropTypes from "prop-types";

// // Componente principal: CounterApp
// export const CounterApp = ({ value }) => {
//   // Hook useState: Inicializamos el estado 'counter' con el valor recibido como prop
//   const [counter, setCounter] = useState(value);

//   // Función que incrementa el contador
//   const handleAdd = () => {
//     setCounter(counter + 1); // Actualiza el estado sumando 1 al valor actual
//   };

//   // Renderizamos el componente
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2>{counter}</h2> {/* Mostramos el valor actual del contador */}

//       {/* Botón que llama a la función 'handleAdd' al hacer clic */}
//       <button onClick={handleAdd}>+1</button>
//     </>
//   );
// };

// // Validación de propiedades con PropTypes
// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// /*
//   Componente de entrada: main.jsx
//   ----------------------------------------------------
//   Este archivo se encarga de renderizar el componente principal `CounterApp` en la raíz de la aplicación.
//   Se le pasa una prop `value` con el valor inicial del contador (20 en este caso).
// */

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { CounterApp } from "./CounterApp";
// import "./styles.css";

// // Renderizamos el componente CounterApp dentro de React.StrictMode
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CounterApp value={20} /> {/* Pasamos el valor inicial del contador */}
//   </React.StrictMode>
// );

// OTRO APUNTE:
// main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { CounterApp } from "./CounterApp";
// import "./styles.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CounterApp value={20} />
//   </React.StrictMode>
// );

// // CounterApp.jsx
// import { useState } from "react";
// import PropTypes from "prop-types";

// export const CounterApp = ({ value }) => {
//   // Hook useState: inicializa el estado con el valor recibido
//   const [counter, setCounter] = useState(value);

//   // Ejemplo 1: Incrementar el contador +1
//   const handleAdd = () => {
//     setCounter(counter + 1);
//   };

//   // Ejemplo 2: Asignar un valor fijo al contador
//   // setCounter(1000);

//   // Ejemplo 3: Incrementar usando el valor previo con función callback
//   // setCounter((c) => c + 1);

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2>{counter}</h2>
//       <button onClick={handleAdd}>+1</button>
//     </>
//   );
// };

// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

/* 
📝 APUNTE COMPLETO SEGÚN EL PROFESOR:
1. Hook useState:
   - Permite manejar el estado en componentes funcionales.
   - `const [state, setState] = useState(initialValue);`
   - `counter` es el estado actual, `setCounter` lo actualiza.
   
2. Ejemplos del profesor:
   - Ejemplo 1: setCounter(counter + 1); --> Incrementa en +1.
   - Ejemplo 2: setCounter(1000); --> Asigna un valor fijo (1000).
   - Ejemplo 3: setCounter((c) => c + 1); --> Incrementa usando el valor previo.
   
3. Notas adicionales:
   - Es obligatorio usar la función `setCounter` para actualizar el estado.
   - Mutar el valor directamente como `counter++` causa errores.
   - El hook `useState` garantiza que el componente se renderice cuando el estado cambia.
   
4. Funcionamiento:
   - Botón: llama a `handleAdd` cuando se hace clic.
   - Re-renderiza el componente mostrando el nuevo valor en `<h2>`.
*/
