// El profesor explicó que el propósito de la clase era evitar problemas con las llaves en React.
// Específicamente, se buscó evitar que se utilicen índices como keys para los elementos renderizados dinámicamente,
// ya que esto puede causar errores cuando React intenta identificar elementos que fueron eliminados o reordenados.

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// // Renderizado del componente principal utilizando StrictMode para detectar problemas potenciales.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// // ----------------------------------------------

// // En el componente principal, se comenzó definiendo el estado inicial de categorías.
// // El profesor explicó que es importante evitar duplicados al agregar nuevas categorías.

// import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";

// const GifExpertApp = () => {
//   // Estado inicial con dos categorías predefinidas.
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // Función para agregar una nueva categoría.
//   // Explicó que antes de agregarla, se verifica si ya existe en el arreglo para evitar duplicados.
//   const onAddCategory = (newCategory) => {
//     if (categories.includes(newCategory)) return; // Si la categoría ya existe, no se agrega.

//     // Si no existe, se agrega al principio del arreglo.
//     setCategories([newCategory, ...categories]);
//   };

//   return (
//     <>
//       {/* Título principal de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Componente para agregar nuevas categorías */}
//       <AddCategory onNewCategory={(value) => onAddCategory(value)} />

//       {/* Listado de categorías */}
//       <ol>
//         {categories.map((category) => {
//           // Explicó que cada elemento necesita una key única.
//           return <li key={category}>{category}</li>;
//         })}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

// // ----------------------------------------------

// // En el componente AddCategory, se implementó un formulario controlado para capturar el texto ingresado por el usuario.
// // El profesor destacó la importancia de emitir valores limpios, sin espacios al inicio o final.

// import { useState } from "react";

// export const AddCategory = ({ onNewCategory }) => {
//   // Estado para controlar el valor del input.
//   const [inputValue, setInputValue] = useState("");

//   // Función para manejar los cambios en el input.
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value);
//   };

//   // Función para manejar el envío del formulario.
//   const onSubmit = (event) => {
//     event.preventDefault(); // Prevenir el comportamiento por defecto del formulario.

//     // Validación para evitar agregar valores vacíos o muy cortos.
//     if (inputValue.trim().length <= 1) return;

//     // Se emite el valor limpio (sin espacios) y se resetea el input.
//     onNewCategory(inputValue.trim());
//     setInputValue("");
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       {/* Input controlado */}
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue}
//         onChange={onInputChange}
//       />
//     </form>
//   );
// };

// ----------------------------------------------

// Resumen final del profesor:
// - Evitar usar índices como keys porque React depende de estas llaves para manejar cambios dinámicos en la UI.
// - Crear validaciones simples para evitar duplicados y valores inválidos.
// - Mantener los componentes enfocados en una sola responsabilidad.
// - Para tareas adicionales (como transformar valores a minúsculas o manejar validaciones más estrictas),
// se puede mejorar el código, pero el objetivo es mantenerlo limpio y funcional.
