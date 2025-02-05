// Apuntes de la clase basados en la transcripción y el código realizado por el profesor

// En este archivo se documenta el proceso paso a paso explicado por el profesor
// mientras escribía y desarrollaba el código. Las explicaciones están en forma de
// comentarios detallados junto al código correspondiente.

// El profesor comienza con el archivo principal, "main.jsx", para montar la aplicación en el DOM.
// Utiliza React.StrictMode para resaltar problemas potenciales en la aplicación.

// main.jsx
// import { StrictMode } from "react"; // React.StrictMode ayuda a detectar errores comunes
// import { createRoot } from "react-dom/client"; // createRoot es el nuevo método para inicializar React 18
// import GifExpertApp from "./GifExpertApp"; // Se importa el componente principal de la aplicación
// import "./styles.css"; // Se incluye el archivo de estilos CSS

// // Se renderiza el componente principal de la aplicación en el elemento con id "root" del DOM
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// A continuación, el profesor crea el componente "GifExpertApp.jsx" como la base principal de la aplicación.
// Este componente maneja el estado global de las categorías y renderiza los otros componentes necesarios.

// GifExpertApp.jsx
// import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

// const GifExpertApp = () => {
//   // El profesor utiliza el hook useState para gestionar las categorías iniciales
//   const [categories, setCategories] = useState(["One Punch"]);

//   // Función para agregar una nueva categoría
//   // Se verifica que la nueva categoría no esté ya incluida antes de agregarla
//   const onAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return; // Validación para evitar duplicados
//     setCategories([newCategory, ...categories]); // Agregar la nueva categoría al inicio del array
//   };

//   return (
//     <>
//       {/* Título de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Componente para agregar nuevas categorías */}
//       <AddCategory onNewCategory={(value) => onAddCategory(value)} />

//       {/* Listado de categorías con su respectivo componente GifGrid */}
//       {categories.map((category) => (
//         <GifGrid key={category} category={category} />
//       ))}
//     </>
//   );
// };

// export default GifExpertApp;

// Ahora el profesor explica cómo crear el componente "GifGrid".
// Este componente se encarga de mostrar los gifs relacionados a una categoría específica.

// GifGrid.jsx
// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs"; // Función para obtener los gifs desde una API

// export const GifGrid = ({ category }) => {
//   // Se inicializa un estado para un contador con valor inicial de 10 (solo para demostración)
//   const [counter, setCounter] = useState(10);

//   // useEffect se utiliza para ejecutar el código de forma controlada después del renderizado inicial
//   useEffect(() => {
//     getGifs(category); // Llamada a la función que obtiene los gifs según la categoría
//   }, [category]); // La dependencia es "category", por lo que el efecto se ejecutará cuando cambie

//   return (
//     <>
//       {/* Se muestra el nombre de la categoría */}
//       <h3>{category}</h3>

//       {/* Se agrega un contador con un botón para incrementarlo */}
//       <h5>{counter}</h5>
//       <button onClick={() => setCounter(counter + 1)}>+1</button>
//     </>
//   );
// };

// Este archivo documenta cómo se desarrollaron los tres componentes principales de la aplicación:
// 1. main.jsx: Punto de entrada de la aplicación.
// 2. GifExpertApp.jsx: Componente principal que gestiona el estado global.
// 3. GifGrid.jsx: Componente encargado de manejar y mostrar los gifs de una categoría.
