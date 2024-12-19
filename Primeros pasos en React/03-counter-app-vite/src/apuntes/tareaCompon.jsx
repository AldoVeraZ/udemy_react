// // Resumen de la clase con código integrado y explicado:
// //
// // En esta clase, se desarrolló un componente llamado `CounterApp`.
// // El profesor explicó paso a paso cómo crear un componente funcional en React,
// // cómo recibir props desde el componente padre, validarlas con PropTypes,
// // y renderizar el componente en la aplicación principal (`main.jsx`).
// //
// // Además, se reforzaron buenas prácticas, como el uso de fragmentos (<> </>)
// // y cómo manejar tipos de datos correctos para evitar errores o warnings en la consola.

// // Archivo principal: main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// // Se comenta la importación de componentes no utilizados actualmente
// // import { HelloWorldApp } from "./HelloWorldApp";
// // import { FirstApp } from "./FirstApp";

// // Se importa el componente `CounterApp` que se desarrolló en esta clase.
// import { CounterApp } from "./CounterApp";

// // Importamos estilos globales
// import "./styles.css";

// // Renderizamos la aplicación principal utilizando ReactDOM
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* El componente `FirstApp` se reemplaza por `CounterApp` */}
//     <CounterApp value={15} /> {/* Aquí se pasa el valor inicial como prop */}
//   </React.StrictMode>
// );

// // Archivo hijo: CounterApp.jsx
// import PropTypes from "prop-types";

// // El componente funcional `CounterApp` recibe una prop llamada `value`.
// // Esta prop representa el valor inicial del contador.
// export const CounterApp = ({ value }) => {
//   return (
//     <>
//       {/* El encabezado principal del componente */}
//       <h1>CounterApp</h1>
//       {/* Renderizamos el valor recibido desde el padre */}
//       <h2>{value}</h2>
//     </>
//   );
// };

// // Validación de PropTypes
// CounterApp.propTypes = {
//   // `value` debe ser un número y es requerido.
//   value: PropTypes.number.isRequired,
// };

// // Explicación adicional:
// // 1. El componente `CounterApp` utiliza destructuración para recibir `value` directamente como prop.
// // 2. PropTypes se usa para validar que `value` sea numérico y obligatorio. Esto ayuda a evitar errores.
// // 3. En el archivo `main.jsx`, el valor 15 se pasa como prop a `CounterApp`.
// // 4. Si `value` no fuera un número o no se enviara, React mostraría un error en la consola.
// // 5. Esto refuerza la importancia de validar y manejar correctamente los datos entre componentes.
