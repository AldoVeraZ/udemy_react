// // Resumen de la clase sobre Props y su uso en React
// // ================================================
// // En esta clase se explica el concepto de props (abreviatura de "properties"),
// // que permiten la comunicación entre componentes en React. Las props son objetos
// // que el componente hijo recibe desde el componente padre, y contienen información
// // necesaria para renderizar el contenido dinámicamente.
// //
// // Ejemplo práctico:
// // 1. Definir un componente que recibe props y utiliza valores dinámicos en el DOM.
// // 2. Utilizar destructuración para extraer las props relevantes directamente en los parámetros de la función.
// // 3. Pasar valores al componente desde el componente padre (en este caso, desde el archivo main.jsx).
// //
// // =========================== Código ===========================

// // Archivo principal de entrada: main.jsx
// import React from "react";
// import ReactDOM from "react-dom/client";
// // Se importa el componente FirstApp, el cual espera recibir props.
// import { FirstApp } from "./FirstApp";

// // Importamos estilos CSS para personalizar la apariencia
// import "./styles.css";

// // Renderizamos el componente FirstApp desde el padre (main.jsx)
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Aquí estamos pasando las props "title" y "subTitle" al componente FirstApp */}
//     <FirstApp title="Hola, Soy Gokú!" subTitle={123} />
//   </React.StrictMode>
// );

// // Archivo del componente: FirstApp.jsx
// export const FirstApp = ({ title, subTitle }) => {
//   // Nota: En lugar de recibir un objeto props y acceder a sus propiedades con 'props.title',
//   // estamos utilizando destructuración para acceder directamente a 'title' y 'subTitle'.

//   // Retornamos la estructura JSX donde usamos las props dinámicamente.
//   return (
//     <>
//       {/* Renderizamos el título dinámico recibido como prop */}
//       <h1>{title}</h1>

//       {/* Renderizamos el subtítulo dinámico recibido como prop y sumamos 1 directamente */}
//       <p>{subTitle + 1}</p>
//     </>
//   );
// };

// // Archivo de estilos: styles.css
// // ==============================
// // Este archivo define estilos básicos para el fondo, texto y apariencia general.
// html, body {
//   background-color: #21232a; /* Fondo oscuro para mejor contraste */
//   color: white; /* Texto blanco para legibilidad */
//   font-family: Helvetica, Arial, sans-serif; /* Tipografía limpia y moderna */
//   font-size: 1.3rem; /* Tamaño de fuente estándar */
//   padding: 70px; /* Espaciado alrededor del contenido */
// }

// // Nota final:
// // Este ejercicio muestra cómo las props permiten reutilizar componentes y personalizarlos
// // dinámicamente. La destructuración de props hace que el código sea más limpio y legible.
// // También se incluyó un ejemplo para manejar props numéricas (subTitle) sumando directamente 1.
