// Resumen de la clase de GifExpertApp

// En esta clase, el profesor explicó cómo crear una aplicación de React que permite buscar GIFs dinámicamente.
// La estructura principal incluye componentes reutilizables y el uso de estados y eventos en React.

// Archivo principal: main.jsx
// El profesor comenzó explicando cómo configurar la raíz de la aplicación con React 18.
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// Componente principal: GifExpertApp.jsx
// Este componente maneja el estado de las categorías y se comunica con los componentes hijos.
// import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";

// const GifExpertApp = () => {
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // Explicación: onAddCategory
//   // Método que agrega una nueva categoría al estado. El profesor explicó cómo prevenir duplicados.
//   const onAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory, ...categories]);
//   };

//   return (
//     <>
//       {/* Título principal */}
//       <h1>GifExpertApp</h1>

//       {/* Componente para añadir nuevas categorías */}
//       <AddCategory onNewCategory={(value) => onAddCategory(value)} />

//       {/* Listado de categorías */}
//       <ol>
//         {categories.map((category) => (
//           <li key={category}>{category}</li>
//         ))}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

// // Componente: AddCategory.jsx
// // Este componente incluye un formulario controlado para agregar nuevas categorías.
// import { useState } from "react";

// export const AddCategory = ({ onNewCategory }) => {
//   const [inputValue, setInputValue] = useState("");

//   // Maneja los cambios en el input
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value);
//   };

//   // Maneja el envío del formulario
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (inputValue.trim().length <= 1) return;
//     onNewCategory(inputValue.trim());
//     setInputValue("");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue}
//         onChange={onInputChange}
//       />
//     </form>
//   );
// };

// Ejemplo adicional explicado por el profesor:
// El profesor mostró cómo prevenir duplicados al añadir nuevas categorías.
// Código ejemplo:
/*
const onAddCategory = (newCategory) => {
  if (categories.includes(newCategory)) {
    alert('Esta categoría ya existe.');
    return;
  }
  setCategories([newCategory, ...categories]);
};
*/

// Fin del resumen y código. La aplicación ahora es capaz de manejar entradas dinámicas de usuarios.
