// // Importamos React y ReactDOM. React es la biblioteca principal que nos permite crear componentes.
// import React from "react";
// import ReactDOM from "react-dom/client";
// // Importamos el archivo de estilos CSS que afectará el diseño de la aplicación.
// import "./styles.css";
// // Importamos el componente que vamos a renderizar en la aplicación.
// import { CounterApp } from "./CounterApp";

// // Creamos el árbol de renderizado para la aplicación
// // React.StrictMode ayuda a identificar problemas potenciales en el código.
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* El componente 'CounterApp' recibe la propiedad 'value' como valor inicial del contador */}
//     <CounterApp value={20} />
//   </React.StrictMode>
// );

// ///////////////////////////////////////////////////////////

// // Este es el componente principal CounterApp que se renderiza en la aplicación
// // CounterApp es un componente funcional que recibe 'value' como propiedad.
// import { useState } from "react";
// import PropTypes from "prop-types";

// // El componente CounterApp maneja el contador
// export const CounterApp = ({ value }) => {
//   // Aquí usamos el hook useState para crear un estado llamado 'counter' con el valor inicial que viene de 'value'.
//   // 'setCounter' es la función que se usará para actualizar el valor de 'counter'.
//   const [counter, setCounter] = useState(value);

//   // Ahora, creamos una función llamada 'handleAdd', que se encargará de sumar 1 al contador.
//   // Al hacer clic en el botón '+1', se ejecutará esta función, incrementando el valor del contador en 1.
//   const handleAdd = () => {
//     setCounter(counter + 1); // Se incrementa el valor de 'counter' en 1.
//   };

//   // También tenemos la función 'handleSubstract', que decrementa el valor de 'counter' en 1 cuando se hace clic en el botón '-1'.
//   const handleSubstract = () => setCounter(counter - 1);

//   // La función 'handleReset' reinicia el contador al valor original que fue pasado como propiedad 'value'.
//   const handleReset = () => setCounter(value);

//   // Ahora renderizamos el JSX del componente.
//   // Aquí estamos mostrando el valor actual del contador (h2) y tres botones para interactuar con el contador.
//   return (
//     <>
//       <h1>CounterApp</h1>
//       {/* Muestra el valor actual del contador */}
//       <h2>{counter}</h2>

//       {/* Botón para sumar 1 al contador */}
//       <button onClick={handleAdd}>+1</button>

//       {/* Botón para restar 1 al contador */}
//       <button onClick={handleSubstract}>-1</button>

//       {/* Botón para resetear el contador al valor inicial */}
//       <button onClick={handleReset}>Reset</button>
//     </>
//   );
// };

// // Validación de la propiedad 'value' usando PropTypes.
// // Aseguramos que 'value' sea un número y sea obligatorio para este componente.
// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

///////////////////////////////////////////////////////////

// A continuación, explicamos el código detalladamente:

/*
  1. **Importaciones y configuración inicial (React y ReactDOM):**
     - En la primera parte del código, se importan las librerías necesarias (`React` y `ReactDOM`), que son esenciales para trabajar con React.
     - `React.StrictMode` se utiliza para envolver el componente y detectar problemas potenciales en el desarrollo.

  2. **Uso de `useState`:**
     - **`useState(value)`** se usa para crear una variable de estado llamada `counter`, que comenzará con el valor recibido de la propiedad `value`. Esto permite que el valor del contador se actualice sin tener que re-renderizar todo el componente manualmente.
     - **`setCounter(counter + 1)`**: Este método se utiliza para actualizar el estado del contador. La función `setCounter` permite cambiar el valor del estado de `counter` al nuevo valor (en este caso, aumentando en 1).

  3. **Funciones para modificar el contador:**
     - **`handleAdd`**: Incrementa el contador en 1.
     - **`handleSubstract`**: Decrementa el contador en 1.
     - **`handleReset`**: Restaura el contador al valor inicial (pasado como propiedad `value`).

  4. **Renderización de JSX:**
     - Los valores del contador y los botones se renderizan. Los botones ejecutan las funciones que hemos definido (`handleAdd`, `handleSubstract`, `handleReset`) para modificar el estado del contador cuando se hace clic.

  5. **PropTypes para validación:**
     - **`PropTypes.number.isRequired`**: Esto asegura que la propiedad `value` sea un número y que siempre se pase un valor al componente. Si no se pasa o no es un número, React mostrará una advertencia en la consola.

  **Flujo de funcionamiento del componente:**
  - El contador (`counter`) se muestra en el `<h2>` en el JSX. 
  - El estado inicial del contador es el valor que se pasa como propiedad (`value`).
  - Cuando el usuario hace clic en los botones, se ejecutan las funciones `handleAdd`, `handleSubstract`, o `handleReset` para actualizar el valor del contador.
  - `handleAdd` incrementa el contador, `handleSubstract` lo decrementa, y `handleReset` lo restablece al valor inicial que fue pasado como propiedad.

  **PropTypes y validaciones:**
  - `PropTypes` asegura que el valor de `value` sea un número y sea obligatorio, lo que ayuda a evitar errores y asegura que los componentes reciban los datos correctos.

*/
