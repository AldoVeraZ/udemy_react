// // Resumen y apuntes del profesor
// // En esta clase se construyó una aplicación básica en React para listar categorías y
// // renderizarlas dinámicamente en el HTML. El profesor utilizó el hook useState para manejar
// // el estado de las categorías y explicó cada paso mientras escribía el código.

// // 1. Uso de useState:
// // Se inicializó un estado con un array de categorías. Este estado se utiliza para almacenar
// // y actualizar las categorías de búsqueda.

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// // Renderizando el componente principal dentro del DOM.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// // Componente principal GifExpertApp.jsx
// import { useState } from "react";

// const GifExpertApp = () => {
//   // Inicialización del estado con un array de categorías.
//   // Este array contiene las categorías que se mostrarán en la aplicación.
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // Ejemplo: No se puede condicionar los useState, esto daría error.
//   // if (true) {
//   //   const [categories2, setCategories2] = useState(["One Punch", "Dragon Ball"]);
//   // }

//   // Ejemplo: Se puede tener múltiples useState si es necesario.
//   // const [categories2, setCategories2] = useState(["Naruto", "Bleach"]);
//   // const [categories3, setCategories3] = useState(["One Piece", "Attack on Titan"]);

//   console.log(categories); // Visualizar el estado actual en la consola del navegador.

//   return (
//     <>
//       {/* Título de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Input para agregar nuevas categorías (implementación futura) */}

//       {/* Listado de categorías renderizadas dinámicamente */}
//       <ol>
//         {categories.map((category) => {
//           // Renderizando cada categoría en un <li> con una key única.
//           return <li key={category}>{category}</li>;
//         })}
//       </ol>

//       {/* Ejemplos adicionales para entender cómo iterar sobre un array de categorías */}
//       {/* La función map crea un nuevo array de elementos renderizados.
//           Cada elemento necesita una key única para evitar errores en React. */}

//       {/* Ejemplo de agregar nuevas categorías manualmente */}
//       {/*<ol>
//         {categories.map((category, index) => (
//           <li key={index}>{category}</li>
//         ))}
//       </ol>*/}

//       {/* Ejemplo: Elementos predefinidos */}
//       {/*<ol>
//         <li>ABC</li>
//         <li>123</li>
//         <li>XYZ</li>
//       </ol>*/}

//       {/* Ejemplo de un array inicializado vacío */}
//       {/* const [emptyCategories, setEmptyCategories] = useState([]); */}
//     </>
//   );
// };

// export default GifExpertApp;
