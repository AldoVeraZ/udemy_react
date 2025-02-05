// Importamos StrictMode de React para ayudar con el desarrollo, asegurándonos de que los componentes se comporten correctamente
// import { StrictMode } from "react";
// // Creamos el contenedor raíz donde se renderiza la app
// import { createRoot } from "react-dom/client";
// // Importamos el componente principal donde estará toda nuestra aplicación
// import GifExpertApp from "./GifExpertApp";

// // Importamos el archivo de estilos
// import "./styles.css";

// // Creamos el contenedor raíz de la app y la renderizamos dentro del div con id "root"
// createRoot(document.getElementById("root")).render(
//   // StrictMode ayuda a identificar problemas en el código
//   <StrictMode>
//     <GifExpertApp /> {/* El componente principal donde se maneja todo */}
//   </StrictMode>
// );

// /////////////////////////////////////////////////////

// // Ahora vamos con el componente GifGrid.jsx

// // Importamos los hooks useEffect y useState de React para manejar el ciclo de vida y el estado
// import { useEffect, useState } from "react";
// // Importamos una función para obtener los gifs desde un archivo helper
// import { getGifs } from "../helpers/getGifs";

// // El componente GifGrid recibe la categoría de los gifs como prop
// export const GifGrid = ({ category }) => {
//   // Definimos un estado local "images" que almacenará los gifs que obtengamos
//   const [images, setImages] = useState([]);

//   // Función asíncrona que va a obtener los gifs de la API (o de nuestro helper) y actualizar el estado
//   const getImages = async () => {
//     // Llamamos a la función getGifs y esperamos la respuesta
//     const newImages = await getGifs(category);
//     // Actualizamos el estado con las nuevas imágenes
//     setImages(newImages);
//   };

//   // El profesor explica que usamos useEffect para manejar el ciclo de vida del componente
//   // Este efecto se ejecutará una sola vez cuando el componente se monte por primera vez
//   useEffect(() => {
//     // El profesor menciona que al llamar a la función asincrónica se debe hacerlo fuera de useEffect
//     // Aquí estamos llamando la función getImages para obtener los gifs cuando se renderice el componente
//     getImages();

//     // También podría haberse usado el siguiente código, utilizando .then, pero el profesor recomienda usar la función directamente
//     // getGifs(category).then((newImages) => setImages(newImages));
//   }, []); // El arreglo vacío significa que el efecto solo se ejecuta una vez, al montarse el componente

//   return (
//     <>
//       {/* Mostramos el título de la categoría recibida como prop */}
//       <h3>{category}</h3>

//       {/* El profesor explica que debemos mostrar los gifs en una lista ordenada */}
//       <ol>
//         {/* Aquí mapeamos el array de imágenes para renderizar cada título de las imágenes */}
//         {/* El profesor usa desestructuración para obtener id y title de cada imagen */}
//         {images.map(({ id, title }) => (
//           <li key={id}>{title}</li>  {/* Mostramos el título de cada imagen en una lista */}
//         ))}
//         {/* Alternativamente, el código también podría escribirse de esta forma, que es más verbosa */}
//         {/* {images.map((image) => (
//           <li key={image.id}>{image.title}</li>
//         ))} */}
//       </ol>
//     </>
//   );
// };

// Explicación resumida en comentarios:
// 1. **Importación de Dependencias**:
//    - Se importa `StrictMode` de React, que se usa para asegurarse de que los componentes sigan las mejores prácticas y se comporten correctamente durante el desarrollo.
//    - Se importa `createRoot` para obtener el contenedor raíz donde se renderizará nuestra aplicación.
//    - Se importa `GifExpertApp`, el componente principal que va a manejar toda la aplicación.
//    - Se importa el archivo de estilos `styles.css` que define el aspecto visual de nuestra app.

// 2. **Renderizado Inicial**:
//    - `createRoot` se usa para crear el contenedor donde se va a renderizar la aplicación. El contenedor es el div con id `"root"`.
//    - `StrictMode` se usa para detectar problemas en el código durante el desarrollo y ayudar con posibles errores.
//    - El componente principal `GifExpertApp` es lo que se renderiza dentro de `StrictMode`, iniciando la app.

// 3. **Componente GifGrid**:
//    - Este componente recibe una categoría como prop (por ejemplo, "funny" o "cats").
//    - La idea es mostrar los gifs relacionados con esa categoría, por lo que necesitamos tener un estado donde se guarde la lista de gifs obtenidos.

// 4. **Uso de `useState`**:
//    - `useState` se utiliza para crear un estado local que almacenará las imágenes que vamos a obtener. Este estado se llama `images`.
//    - Inicialmente, `images` es un array vacío `[]`.

// 5. **Obteniendo los Gifs con `getGifs`**:
//    - La función `getImages` es asíncrona y se encarga de obtener los gifs a través de la función `getGifs`, que está definida en un archivo auxiliar `getGifs.js`.
//    - Luego de obtener los gifs, actualizamos el estado con `setImages`, lo que hace que el componente se renderice de nuevo con la nueva lista de gifs.

// 6. **Uso de `useEffect`**:
//    - `useEffect` se utiliza para ejecutar código cuando el componente se monta por primera vez.
//    - Dentro del `useEffect`, llamamos a la función `getImages` para que obtenga los gifs. Este efecto solo se ejecutará una vez, ya que el arreglo de dependencias `[]` está vacío.
//    - El profesor menciona que esta es una forma más moderna y recomendada de manejar la lógica asíncrona en lugar de usar el método `.then`.

// 7. **Mostrar los Gifs**:
//    - En el JSX, mostramos el título de la categoría con `{category}`.
//    - Usamos `map` para iterar sobre el array de imágenes y renderizar una lista de títulos. Cada imagen tiene un `id` único, que es utilizado como `key` en el componente `li` para asegurar una correcta reactividad.
//    - El profesor muestra una alternativa para mapear el array sin desestructurar, pero prefiere la desestructuración para hacer el código más limpio y fácil de entender.
