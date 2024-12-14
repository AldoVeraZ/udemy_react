// RESUMEN DE LA CLASE:
// En esta clase, el profesor explicó cómo agregar estilos globales a una aplicación de React.
// La idea es crear un archivo de estilos CSS que se aplique a toda la aplicación.
// El proceso implica:
// 1. Crear un archivo CSS en la carpeta src (por ejemplo, styles.css).
// 2. Definir estilos básicos globales en ese archivo.
// 3. Importar el archivo de estilos en el main.jsx para que se apliquen a la aplicación.
// 4. Comprobar los cambios en el navegador.

// Código del archivo main.jsx:
// import React from "react";
// import ReactDOM from "react-dom/client";
// // import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";

// // Importación del archivo de estilos globales
// import "./styles.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <FirstApp />
//   </React.StrictMode>
// );

/*
Explicación:
- Se importa el archivo styles.css para aplicar los estilos globales definidos en él.
- Este archivo se coloca en la carpeta src y contiene estilos básicos para el cuerpo y el HTML.
- Al importar styles.css en main.jsx, estos estilos se aplican automáticamente a toda la aplicación.
*/

// Código del archivo styles.css:
/*
html, 
body {
  background-color: #21232a; /* Color de fondo oscuro para la aplicación */
//   color: white; /* Color blanco para el texto */
//   font-family: Helvetica, Arial, sans-serif; /* Fuentes principales con fallback a sans-serif */
//   font-size: 1.3rem; /* Tamaño de fuente ajustado */
//   padding: 70px; /* Espaciado interno uniforme */
// }
// */

/*
Explicación:
- Se definen estilos globales básicos para html y body:
  - background-color: Establece un color de fondo oscuro (#21232a).
  - color: Define el color del texto como blanco.
  - font-family: Especifica una lista de fuentes con fallback si no están disponibles.
  - font-size: Ajusta el tamaño del texto para mejor legibilidad.
  - padding: Añade un espaciado interno general de 70px alrededor del contenido.
*/
