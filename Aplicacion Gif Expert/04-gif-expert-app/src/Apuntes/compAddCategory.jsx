// main.jsx
// Este archivo sirve como punto de entrada para nuestra aplicación. Aquí montamos el componente principal
// `GifExpertApp` dentro del árbol DOM usando `createRoot` de React DOM.

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// GifExpertApp.jsx
// Este es el componente principal de la aplicación. En él definimos el estado inicial con algunas categorías
// y establecemos cómo se agregarán nuevas categorías.

// import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";

// const GifExpertApp = () => {
// Hook de estado para manejar las categorías.
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

// Función para agregar una nueva categoría.
//   const onAddCategory = () => {
// Agregamos "Valorant" como ejemplo. El profesor mencionó que se pueden agregar dinámicamente.
//     setCategories(["Valorant", ...categories]);
//   };

//   return (
//     <>
//       {/* Título de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Componente para añadir categorías */}
//       <AddCategory />

//       {/* Botón de prueba para agregar categorías */}
//       <button onClick={onAddCategory}>Agregar</button>

//       {/* Listado de categorías */}
//       <ol>
//         {categories.map((category) => {
//           return <li key={category}>{category}</li>;
//         })}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

// AddCategory.jsx
// Este componente encapsula un formulario que permite añadir una nueva categoría mediante un input controlado.

// import { useState } from "react";

// export const AddCategory = () => {
// Hook de estado para manejar el valor del input.
//   const [inputValue, setInputValue] = useState("One Punch");

// Función para manejar cambios en el input. Aquí el profesor explicó el uso de destructuración para simplificar el acceso a `target`.
//   const onInputChange = ({ target }) => {
// Actualizamos el estado con el nuevo valor del input.
//     setInputValue(target.value);
//   };

// Función para manejar el envío del formulario.
//   const onSubmit = (event) => {
// Prevenimos el comportamiento por defecto del formulario (recargar la página).
//     event.preventDefault();
//     console.log(inputValue); // Imprimimos el valor actual del input en consola.
//   };

//   return (
//     <form onSubmit={(event) => onSubmit(event)}>
//       {/* Input controlado que refleja el estado del componente */}
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue} // El valor se sincroniza con el estado.
//         onChange={onInputChange} // Manejador del cambio en el input.
//       />
//     </form>
//   );
// };

// Ejemplos comentados por el profesor (AddCategory.jsx):

// Ejemplo 1: Manejo básico del cambio en el input sin destructuración.
// const onInputChange = (event) => {
//   console.log(event.target.value);
//   setInputValue(event.target.value);
// };
// El profesor mostró este ejemplo para enfatizar que se puede trabajar directamente con `event.target`.

// Ejemplo 2: Seteo de un valor fijo al cambiar el input.
// const onInputChange = ({ target }) => {
//   setInputValue("Hola Mundo");
// };
// Este ejemplo es útil para demostrar cómo se puede establecer un valor fijo en el estado, sin importar el input del usuario.

// Ejemplo 3: Proceso inicial del envío del formulario.
// const onSubmit = (event) => {
//   console.log(event); // Muestra el objeto del evento.
//   event.preventDefault(); // Previenes que la página se recargue al enviar el formulario.
// };
// El profesor utilizó este ejemplo para explicar cómo manejar el evento `onSubmit` y evitar comportamientos no deseados.
