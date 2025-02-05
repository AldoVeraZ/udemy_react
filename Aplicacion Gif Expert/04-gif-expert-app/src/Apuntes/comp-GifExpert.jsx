// Resumen de la clase y el código:
// =================================
// La clase comienza explicando la estructura básica de una aplicación en React.
// Cada aplicación está compuesta por componentes reutilizables.
// Esto permite que los componentes puedan ser usados en distintos lugares y actualizados fácilmente.
//
// El componente principal de esta aplicación se llama "GifExpertApp", que actúa como contenedor.
// Dentro de este componente se divide la página en tres partes principales:
// 1. El título.
// 2. Un input para capturar información.
// 3. Un listado de ítems (en este caso, GIFs).
//
// También se introduce la importancia de estructurar los directorios del proyecto de manera organizada.
// En React, no hay un estándar fijo para estructurar los archivos, pero se sugiere agrupar por funcionalidad.
// Finalmente, se importan estilos globales desde un archivo CSS para mejorar la apariencia de la aplicación.

// Archivo: main.jsx
// import { StrictMode } from "react"; // React.StrictMode se utiliza para identificar problemas potenciales en la aplicación.
// import { createRoot } from "react-dom/client"; // API moderna de React para renderizar el árbol de componentes.
// import GifExpertApp from "./GifExpertApp"; // Importa el componente principal.

// import "./styles.css"; // Importa los estilos globales de la aplicación.

// Renderiza el componente raíz (GifExpertApp) dentro del div con id="root" en el HTML.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// Archivo: GifExpertApp.jsx
// Este es el componente principal de la aplicación.
// const GifExpertApp = () => {
//   return (
//     <>
//       {/* Título del componente */}
//       <h1>GifExpertApp</h1>

//       {/* Espacio reservado para el input, que será implementado más adelante */}
//       {/* Input */}

//       {/* Espacio reservado para el listado de ítems o GIFs */}
//       {/* Listado de Items o Gifs */}
//       {/* Dentro del listado, cada ítem representará un GIF individual (Gif Item) */}
//     </>
//   );
// };

// export default GifExpertApp;
