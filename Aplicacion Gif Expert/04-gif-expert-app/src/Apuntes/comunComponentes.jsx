// // main.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";

// import "./styles.css";

// // Explicación:
// // En este archivo estamos importando los módulos necesarios para montar nuestra aplicación en el DOM.
// // StrictMode se usa para detectar problemas en el código durante el desarrollo. Esto permite tener una mejor experiencia de depuración.
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

// // GifExpertApp.jsx
// import { useState } from "react"; // Importa useState para poder manejar el estado dentro del componente
// import { AddCategory } from "./components/AddCategory"; // Importamos el componente AddCategory que creamos

// const GifExpertApp = () => {
//   // Creamos el estado 'categories' usando useState. Inicializamos con dos categorías predefinidas: "One Punch" y "Dragon Ball".
//   const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

//   // Explicación del profesor:
//   // Lo que estamos haciendo aquí es usar el estado para almacenar las categorías de gifs.
//   // Este estado se puede actualizar con el método setCategories.

//   // Función para agregar una nueva categoría al listado
//   const onAddCategory = () => {
//     // Aquí estamos utilizando el operador de propagación (...) para agregar una nueva categoría al principio del listado
//     setCategories(["Valorant", ...categories]); // Valorant se agrega al inicio de las categorías existentes
//   };

//   return (
//     <>
//       {/* Título de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Componente AddCategory recibe el setCategories como prop para poder actualizar el estado de categorías */}
//       <AddCategory setCategories={setCategories} />

//       {/* Comentario del profesor:
//       Aquí estamos utilizando un formulario para permitir al usuario agregar nuevas categorías de gifs.
//       El método onAddCategory podría haber sido utilizado para añadir categorías de manera manual, pero
//       lo gestionamos a través del componente AddCategory. */}

//       {/* Listado de las categorías */}
//       <ol>
//         {categories.map((category) => {
//           return <li key={category}>{category}</li>;
//         })}
//       </ol>
//     </>
//   );
// };

// export default GifExpertApp;

// // AddCategory.jsx
// import { useState } from "react";

// export const AddCategory = ({ setCategories }) => {
//   // Estado para manejar el valor que ingresa el usuario en el input
//   const [inputValue, setInputValue] = useState(""); // Inicialmente, el input está vacío

//   // Explicación:
//   // Aquí estamos utilizando 'inputValue' como estado para gestionar el valor del campo de texto.
//   // Lo que ingrese el usuario se almacenará en 'inputValue'.

//   // Función que se ejecuta cuando el valor del input cambia
//   const onInputChange = ({ target }) => {
//     setInputValue(target.value); // Actualiza el estado 'inputValue' con el valor del input
//   };

//   // Función para manejar el evento de enviar el formulario
//   const onSubmit = (event) => {
//     // Evitamos el comportamiento por defecto de recargar la página al enviar el formulario
//     event.preventDefault();

//     // El profesor explica:
//     // Es importante realizar una validación del input para asegurarnos que el valor que el usuario ingresa no esté vacío
//     // o que no sea solo un espacio en blanco. Si esto ocurre, no se hará nada.

//     // Validación: Si el valor ingresado es menor o igual a 1 carácter, no hace nada
//     if (inputValue.trim().length <= 1) return;

//     // Actualizamos el estado 'categories' agregando la nueva categoría al inicio del array
//     setCategories((categories) => [inputValue, ...categories]);

//     // Limpiamos el valor del input para que el campo quede vacío después de agregar la categoría
//     setInputValue(" ");
//   };

//   return (
//     // Formulario que contiene el campo de texto para ingresar la categoría
//     <form onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="Buscar gifs"
//         value={inputValue}
//         // Explicación:
//         // Este 'value' está vinculado al estado 'inputValue', lo que significa que el valor del input será
//         // siempre el valor que tengamos almacenado en 'inputValue'.
//         onChange={onInputChange}
//         // Aquí, el evento 'onChange' se activa cada vez que el usuario escribe algo en el input,
//         // actualizando el estado 'inputValue' con el nuevo valor ingresado.
//       />
//     </form>
//   );
// };

// Código Comentado:
// A continuación, tenemos fragmentos de código que fueron comentados en el desarrollo,
// pero el profesor los usó como ejemplos para enseñar cómo cambiar ciertos aspectos del flujo:

// Código comentado 1: Manejo del cambio en el input
// const onInputChange = (event) => {
//   console.log(event.target.value); // Esta línea muestra en consola el valor que el usuario está ingresando en el input
//   setInputValue("Hola Mundo"); // Aquí el profesor mostró cómo podríamos actualizar el estado con un valor fijo para probar el input.
//   setInputValue(event.target.value); // Esta línea muestra cómo actualizar el estado con el valor real del input.
// };

// Explicación:
// Este fragmento de código comentado ilustra que podríamos agregar un log para depurar el valor del input,
// o podríamos forzar un valor específico como "Hola Mundo", lo cual no sería útil en una app real.
// Lo más adecuado es actualizar el estado con el valor del input, como se muestra en el código activo.

// Código comentado 2: Manejo del formulario
// const onSubmit = (event) => {
//   event.preventDefault(); // Se evita el comportamiento por defecto de recargar la página
//   console.log(inputValue); // Mostrar el valor del input en la consola
//   setCategories((categories) => [inputValue, ...categories]); // Agrega la nueva categoría al listado
//   setInputValue(""); // Resetea el valor del input a vacío
// };

// Explicación:
// Este código comentado ilustra cómo podríamos manejar el evento de enviar el formulario.
// El profesor explicó que si usáramos `console.log()` dentro de `onSubmit()`, podríamos ver en la consola
// el valor que el usuario ingresó antes de agregarlo a la lista de categorías. Aunque el ejemplo no es necesario
// en una app real, es útil para ver cómo funcionan las funciones de manejo de eventos.

// Código comentado 3: Varios inputs (como ejemplo)
{
  /* 
  <AddCategory />
  <AddCategory /> 
*/
}
// Este código comentado fue utilizado para mostrar que podemos tener múltiples instancias de un mismo componente.
// Si quisiéramos agregar más de un input, podríamos incluir varias instancias de <AddCategory /> como se muestra aquí.
// El profesor explicó cómo esto podría ser útil si necesitáramos múltiples formularios de entrada en la aplicación.
