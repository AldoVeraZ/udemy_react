// // main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp"; // Importación del componente principal

// import "./styles.css"; // Importación de los estilos

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />{" "}
//     {/* Renderizamos el componente principal dentro de StrictMode para hacer el desarrollo más seguro */}
//   </StrictMode>
// );

// // GifExpertApp.jsx
// import { useState } from "react"; // Importamos useState desde React
// import { AddCategory } from "./components/AddCategory"; // Importación del componente AddCategory
// import { GifGrid } from "./components/GifGrid"; // Importación del componente GifGrid

// const GifExpertApp = () => {
//   const [categories, setCategories] = useState(["One Punch"]); // Definimos el estado para las categorías de búsqueda de gifs

//   // Función para agregar una nueva categoría
//   const onAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return; // Evitamos agregar una categoría duplicada
//     setCategories([newCategory, ...categories]); // Añadimos la nueva categoría al inicio de las categorías
//   };

//   return (
//     <>
//       <h1>GifExpertApp</h1> {/* Título principal de la app */}
//       {/* El componente AddCategory se encarga de agregar una nueva categoría */}
//       <AddCategory
//         onNewCategory={(value) => onAddCategory(value)} // Le pasamos la función onAddCategory a AddCategory para que la use cuando agregue una categoría
//       />
//       {/* Usamos map para renderizar un GifGrid por cada categoría */}
//       {categories.map((category) => (
//         <GifGrid key={category} category={category} /> // El componente GifGrid muestra los gifs de la categoría
//       ))}
//     </>
//   );
// };

// export default GifExpertApp;

// // GifGrid.jsx
// import { getGifs } from "../helpers/getGifs"; // Importamos la función que obtiene los gifs desde la API

// export const GifGrid = ({ category }) => {
//   // Usamos la función getGifs para obtener los gifs de una categoría específica
//   const gifs = getGifs(category); // Obtiene los gifs correspondientes a la categoría

//   return (
//     <>
//       <h3>{category}</h3> {/* Muestra el nombre de la categoría */}
//       {/* Aquí se podría mapear sobre los gifs para mostrar cada uno, actualmente solo se muestra el nombre de la categoría */}
//     </>
//   );
// };

// // AddCategory.jsx
// import { useState } from "react"; // Importamos useState

// export const AddCategory = ({ onNewCategory }) => {
//   const [inputValue, setInputValue] = useState(""); // Definimos el estado para manejar el valor del input

//   // Función para manejar el cambio en el input
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value); // Actualizamos el valor del input con el texto que escribe el usuario
//   };

//   // Función para manejar el submit del formulario
//   const onSubmit = (event) => {
//     event.preventDefault(); // Prevenimos que el formulario se recargue al hacer submit
//     if (inputValue.trim().length <= 1) return; // Validamos que el input no esté vacío o contenga solo espacios
//     setInputValue(""); // Limpiamos el input después de enviar
//     onNewCategory(inputValue.trim()); // Llamamos a la función onNewCategory pasando el valor del input limpio
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       {" "}
//       {/* Enviamos el formulario cuando el usuario presiona enter o hace submit */}
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue} // El valor del input está ligado al estado
//         onChange={onInputChange} // Actualiza el estado del input cada vez que cambia
//       />
//     </form>
//   );
// };

// // getGifs.js
// export const getGifs = async (category) => {
//   // Construcción de la URL para realizar la solicitud a la API de Giphy
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=jnliRlqk3W8zYtkuDJB1zpBE9qAmSwMm&q=${category}&limit=20`;

//   const resp = await fetch(url); // Hacemos la solicitud a la API
//   const { data } = await resp.json(); // Extraemos la propiedad 'data' de la respuesta JSON

//   // Procesamos la data para obtener solo los valores relevantes
//   const gifs = data.map((img) => ({
//     id: img.id, // El ID del gif
//     title: img.title, // El título del gif
//     url: img.images.downsized_medium.url, // La URL del gif
//   }));

//   return gifs; // Retornamos el array de gifs procesado
// };
