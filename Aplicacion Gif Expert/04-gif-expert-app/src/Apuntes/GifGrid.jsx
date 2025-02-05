// // Main.jsx (Componente de entrada)
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";
// import "./styles.css";

// // El profesor menciona que en esta parte estamos configurando la raíz de nuestra aplicación,
// // y envolviendo el componente principal en StrictMode para detectar problemas potenciales.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// ///////////////////////////////////////////////////////////////////////////////////////////////

// /* GifExpertApp.jsx (Componente principal) */
// import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

// // El profesor comienza explicando el estado que se necesita para manejar las categorías,
// // y cómo usar el Hook useState para almacenar esas categorías en el componente principal.
// const GifExpertApp = () => {
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // El profesor explica que necesitamos una función para agregar nuevas categorías,
//   // y evita duplicados utilizando un if que verifica si la categoría ya existe.
//   const onAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return; // Evita agregar categorías duplicadas
//     setCategories([newCategory, ...categories]); // Agrega la nueva categoría al inicio del array
//   };

//   return (
//     <>
//       {/* El profesor menciona que aquí estamos mostrando el título de la aplicación. */}
//       <h1>GifExpertApp</h1>

//       {/* Luego el profesor muestra cómo pasar la función onAddCategory como prop al componente AddCategory, */}
//       {/* para que podamos agregar nuevas categorías desde ese componente. */}
//       <AddCategory onNewCategory={(value) => onAddCategory(value)} />

//       {/* Aquí el profesor explica cómo renderizar cada categoría usando el componente GifGrid */}
//       {/* con un mapeo sobre el array categories */}
//       {categories.map((category) => (
//         <GifGrid key={category} category={category} />
//       ))}
//     </>
//   );
// };

// export default GifExpertApp;

// ///////////////////////////////////////////////////////////////////////////////////////////////

// /* AddCategory.jsx (Componente para agregar nuevas categorías) */
// import { useState } from "react";

// export const AddCategory = ({ onNewCategory }) => {
//   const [inputValue, setInputValue] = useState("");

//   // El profesor explica que aquí estamos manejando el cambio del valor en el input
//   // utilizando una función que actualiza el estado de inputValue cada vez que el usuario teclea.
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value);
//   };

//   // Luego, el profesor menciona que cuando el formulario se envía, debe evitarse el comportamiento por defecto
//   // y agregar la nueva categoría solo si el valor tiene más de 1 carácter.
//   const onSubmit = (event) => {
//     event.preventDefault(); // Previene el comportamiento por defecto de submit
//     if (inputValue.trim().length <= 1) return; // Validación de longitud mínima
//     setInputValue(""); // Limpia el input después de agregar la categoría
//     onNewCategory(inputValue.trim()); // Llama la función pasada por prop con el valor ingresado
//   };

//   return (
//     // El profesor destaca que estamos creando un formulario que, al ser enviado, llama a la función onSubmit.
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue}
//         // La función onChange maneja los cambios en el input y actualiza el estado.
//         onChange={onInputChange}
//       />
//     </form>
//   );
// };

// ///////////////////////////////////////////////////////////////////////////////////////////////

// /* GifGrid.jsx (Componente para mostrar las categorías) */
// export const GifGrid = ({ category }) => {
//   // El profesor explica que en este componente simplemente estamos recibiendo la categoría
//   // como prop y mostrándola dentro de un <h3>, luego podemos mostrar los GIFs relacionados más adelante.
//   return (
//     <>
//       {/* Aquí se muestra la categoría que se pasa como prop desde GifExpertApp */}
//       <h3>{category}</h3>
//       {/* El profesor menciona que por ahora podemos poner un texto como "Hola Mundo" */}
//       {/* hasta que implementemos la lógica para mostrar los GIFs. */}
//       <p>Hola Mundo</p>
//     </>
//   );
// };
