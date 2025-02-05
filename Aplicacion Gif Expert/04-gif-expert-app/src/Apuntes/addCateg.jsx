// // Clase: Añadiendo una nueva categoría en React
// // En esta clase aprendimos a manipular el estado en React para agregar una nueva categoría
// a una lista dinámica.
// // El profesor utilizó varios ejemplos y explicó paso a paso por qué ciertas
// // técnicas son más recomendables en React.

// // Archivo: main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// // Aquí montamos el componente principal `GifExpertApp` en el DOM dentro de un contenedor `StrictMode`.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// // Archivo: GifExpertApp.jsx
// import { useState } from "react";

// // Componente principal de la aplicación.
// const GifExpertApp = () => {
//   // Creamos un estado inicial con un arreglo de categorías.
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // Función para agregar una nueva categoría.
//   // El profesor mencionó que debemos evitar mutar el estado directamente, por eso no usamos `push`.
//   const onAddCategory = () => {
//     // Ejemplo inicial (incorrecto):
//     // console.log("Valorant");
//     // categories.push("Valorant"); // Esto no redibuja el componente porque muta directamente el estado.

//     // Solución 1: Usar el operador spread para crear un nuevo arreglo con las categorías existentes y agregar una nueva.
//     setCategories(["Valorant", ...categories]);

//     // Solución 2 (alternativa): Utilizar la función de callback de `setState` para trabajar con el estado actual.
//     // setCategories((cat) => [...cat, "Valorant"]);
//   };

//   return (
//     <>
//       {/* Título de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Botón para agregar una nueva categoría */}
//       <button onClick={onAddCategory}>Agregar</button>

//       {/* Listado dinámico de categorías */}
//       <ol>
//         {categories.map((category) => {
//           // Usamos la categoría como clave. Nota: Las claves deben ser únicas para evitar advertencias en React.
//           return <li key={category}>{category}</li>;
//         })}

//         {/* Ejemplos adicionales mostrados en clase: */}
//         {/* <li>ABC</li>
//         <li>123</li>
//         <li>XYZ</li> */}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

// // Resumen de puntos clave de la clase:
// // 1. Evitar mutar directamente el estado en React (por ejemplo, con `push`).
// // 2. Usar el operador spread (`...`) para crear un nuevo arreglo y actualizar el estado.
// // 3. React redibuja el componente automáticamente al detectar cambios en el estado.
// // 4. Las claves en elementos renderizados dinámicamente (como en `map`) deben ser únicas para evitar problemas.
// // 5. Podemos pasar funciones de estado directamente a `setState` como callback para trabajar con el estado actual.
// // 6. Siempre probar los cambios en el navegador para verificar que las actualizaciones del estado funcionan correctamente.
