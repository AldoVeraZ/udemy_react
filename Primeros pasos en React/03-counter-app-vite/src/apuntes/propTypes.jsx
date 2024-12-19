// // Resumen de la clase sobre PropTypes y su uso en React
// // ======================================================
// // En esta clase aprendimos sobre "PropTypes", una herramienta que permite definir el tipo
// // y las restricciones de las props que los componentes reciben.
// // Esto mejora la legibilidad, el mantenimiento del código y ayuda a detectar errores
// // en el desarrollo al trabajar con componentes dinámicos.

// // ======================================================
// // Archivo principal de entrada: main.jsx
// // ======================================================
// import React from "react";
// import ReactDOM from "react-dom/client";
// // Se importa el componente FirstApp, que recibirá props dinámicas.
// import { FirstApp } from "./FirstApp";
// import "./styles.css"; // Archivo CSS para los estilos básicos

// // Renderizamos el componente FirstApp desde el padre (main.jsx).
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Pasamos valores a las props "title" y "subTitle" al componente FirstApp */}
//     <FirstApp title="Hola, Soy Gokú" subTitle={123} />
//   </React.StrictMode>
// );

// // ======================================================
// // Componente FirstApp: firstApp.jsx
// // ======================================================
// import PropTypes from "prop-types"; // Importamos PropTypes para validar las props.

// // Definición del componente FirstApp, que recibe "title" y "subTitle" como props.
// export const FirstApp = ({ title, subTitle }) => {
//   // Anteriormente se manejaba manualmente la validación, pero aumentaba la complejidad:
//   // if (!title) {
//   //   throw new Error("El title no existe");
//   // }
//   // Con PropTypes, podemos declarar las reglas de las props fuera del componente.

//   return (
//     <>
//       {/* Renderizamos el título dinámico recibido como prop */}
//       <h1>{title}</h1>
//       {/* Renderizamos el subtítulo dinámico recibido como prop */}
//       <p>{subTitle}</p>
//     </>
//   );
// };

// // Definimos los tipos y las restricciones de las props usando PropTypes.
// FirstApp.propTypes = {
//   title: PropTypes.string.isRequired, // "title" debe ser un string y es obligatorio.
//   subTitle: PropTypes.number.isRequired, // "subTitle" debe ser un número y es obligatorio.
// };

// // ======================================================
// // Estilos básicos: styles.css
// // ======================================================
// /* Archivo de estilos básicos para personalizar la apariencia */
// html, body {
//   background-color: #21232a; /* Fondo oscuro para mejor contraste */
//   color: white; /* Texto blanco para legibilidad */
//   font-family: Helvetica, Arial, sans-serif; /* Tipografía limpia y moderna */
//   font-size: 1.3rem; /* Tamaño de fuente estándar */
//   padding: 70px; /* Espaciado alrededor del contenido */
// }
