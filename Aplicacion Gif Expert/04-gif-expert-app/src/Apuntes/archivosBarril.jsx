// // Lo que estamos a punto de ver en esta clase es un ejemplo de cómo centralizar las exportaciones
// // de nuestros componentes en un solo archivo, también conocido como archivo de barril (barrel file).
// // Esto facilita la importación y mantenimiento de nuestros componentes en proyectos grandes.

// // Iniciamos con el componente principal, que es el GifExpertApp, donde gestionamos las categorías de gifs.

// import { useState } from "react"; // Importamos useState para manejar el estado de las categorías
// import { AddCategory, GifGrid } from "./components"; // Importamos los componentes desde 'components' (a través del archivo 'index.js')

// const GifExpertApp = () => {
//   const [categories, setCategories] = useState(["One Punch"]); // Inicializamos el estado con una categoría predeterminada.

//   // Función que agrega una nueva categoría a la lista de categorías
//   const onAddCategory = (newCategory) => {
//     // Verificamos si la categoría ya está en la lista para evitar duplicados
//     if (categories.includes(newCategory)) return;
//     setCategories([newCategory, ...categories]); // Agregamos la nueva categoría al inicio del arreglo
//   };

//   return (
//     <>
//       {/* Título principal de la aplicación */}
//       <h1>GifExpertApp</h1>

//       {/* Componente AddCategory para agregar nuevas categorías */}
//       <AddCategory
//         // En este componente estamos pasando la función 'onNewCategory' que maneja el agregar categorías
//         onNewCategory={(value) => onAddCategory(value)} // Pasamos el valor de la nueva categoría al manejador
//       />

//       {/* Listado de GifGrid, donde cada componente muestra los gifs para la categoría correspondiente */}
//       {categories.map((category) => (
//         // Iteramos sobre las categorías y renderizamos un GifGrid para cada una
//         <GifGrid key={category} category={category} />
//       ))}

//       {/* A continuación, deberíamos tener el listado de gifs correspondientes a cada categoría */}
//     </>
//   );
// };

// export default GifExpertApp;

// // Ahora explicaremos cómo funciona el archivo de barril en 'components'. Este archivo ayuda a centralizar todas las exportaciones,
// // lo que hace que el código sea más limpio y fácil de manejar en proyectos grandes.

// // El archivo 'index.js' dentro de la carpeta 'components' es el archivo de barril que centraliza las exportaciones.

// export * from "./AddCategory"; // Exportamos todos los componentes de AddCategory
// export * from "./GifGrid"; // Exportamos todos los componentes de GifGrid
// export * from "./GifItem"; // Exportamos todos los componentes de GifItem

// // Este archivo permite que, cuando importemos desde './components', podamos acceder directamente
// // a todos estos componentes sin tener que hacer importaciones separadas de cada uno.
