// // Functional components
// /* export */ function App() {
//   return <h1>Hola Mundo</h1>;
// }

// // export const venom = "Tom Hardy";

// export default App;

// escribir rafc
export const HelloWorldApp = () => {
  return <h1>Hello World App</h1>;
};

// export const HelloWorldApp = () => <h1>Arrow Function</h1>;

// Fist App <h1>Aldo</h1>

// Resumen:
// === Resumen de la Clase ===
// En esta lección, aprendimos sobre la estructura de componentes en React y cómo organizarlos en archivos independientes.
// La idea principal es mantener el código modular y legible, separando cada componente en su propio archivo.
// También discutimos las diferencias entre exportaciones por defecto y exportaciones nombradas,
// y cómo elegir una estrategia adecuada según nuestras necesidades.

// === Archivo principal: main.jsx ===
// Este archivo es el punto de entrada de nuestra aplicación React. Aquí se monta el árbol de componentes
// en el DOM utilizando ReactDOM.createRoot.
// Inicialmente, importamos React y ReactDOM para trabajar con React y manipular el DOM.

// import React from "react";
// import ReactDOM from "react-dom/client";

// Importamos nuestro primer componente desde un archivo separado.
// Esto muestra la modularidad de React y cómo podemos organizar nuestro código.
// Usamos una exportación nombrada para importar HelloWorldApp desde HelloWorldApp.jsx.
// import { HelloWorldApp } from "./HelloWorldApp";

// Creamos el punto de entrada en el DOM utilizando el ID 'root'.
// La función render toma un componente (HelloWorldApp en este caso) y lo renderiza en el navegador.
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     /* Renderizamos el componente HelloWorldApp */
//     /* <HelloWorldApp />
//   </React.StrictMode>
// ); */

// === Componente: HelloWorldApp.jsx ===
// Este archivo define nuestro primer componente funcional en React.
// Un componente funcional es básicamente una función de JavaScript que retorna JSX para ser renderizado en el navegador.

// Este es un ejemplo de componente funcional con exportación nombrada.
// Usamos la convención de PascalCase para nombrar componentes (HelloWorldApp).

// export const HelloWorldApp = () => {
// Retornamos JSX que contiene un encabezado con el texto "Hello World App".
//   return <h1>Hello World App</h1>;
// };

// Comentarios adicionales del profesor:
// - En React, se recomienda usar PascalCase para los nombres de componentes.
// - Este componente es muy simple, pero sirve como base para entender la estructura modular de una aplicación React.

// === Alternativas vistas en clase ===
// El profesor también explicó que podemos definir componentes con diferentes estilos de exportación.
// Por ejemplo:
// 1. Exportación por defecto:
// export default App;
// Esto nos permitiría importar el componente sin llaves: import App from "./HelloWorldApp";

// 2. Sintaxis simplificada con Arrow Function en una línea:
// export const HelloWorldApp = () => <h1>Arrow Function</h1>;
