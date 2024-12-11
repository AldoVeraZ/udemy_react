/**
 * Construcción de una aplicación básica en React desde cero.
 * El profesor comienza explicando los conceptos mientras escribe el código paso a paso.
 */

// Importaciones iniciales necesarias para trabajar con React
// import React from "react"; // Biblioteca principal de React
// import ReactDOM from "react-dom/client"; // Biblioteca para interactuar con el DOM

/**
 * Explicación:
 * - React se utiliza para construir interfaces de usuario mediante componentes reutilizables.
 * - ReactDOM es necesario para renderizar esos componentes en el DOM.
 */

/**
 * Creación del componente funcional principal.
 *
 * Explicación:
 * - Un componente funcional es una función que retorna código JSX.
 * - JSX permite combinar HTML y JavaScript para facilitar la creación de la interfaz.
 */
// function App() {
//   // Aquí definimos lo que el componente debe mostrar en pantalla.
//   return <h1>Hola Mundo!!!</h1>; // Devuelve un elemento H1 con el texto "Hola Mundo!!!"
// }

/**
 * Explicación:
 * - El componente `App` es el punto de entrada principal de nuestra aplicación.
 * - En este ejemplo, `App` es un componente básico que solo muestra un mensaje.
 */

/**
 * Renderización del componente en el DOM.
 *
 * Explicación:
 * - `ReactDOM.createRoot` selecciona el elemento con id "root" del archivo HTML.
 * - `render` inserta el contenido del componente dentro de ese elemento.
 * - `React.StrictMode` se utiliza para habilitar buenas prácticas y detectar problemas potenciales.
 */
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App /> {/* Aquí montamos el componente App dentro del DOM */}
//   </React.StrictMode>
// );

/**
 * Explicación adicional:
 * - El archivo HTML debe tener un elemento con id "root" para que React funcione.
 * - Este ejemplo es la base de cualquier aplicación React, mostrando cómo organizar código y conceptos básicos.
 */
