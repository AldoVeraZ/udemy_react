/*
 En esta clase vamos a mostrar las imágenes que ya tenemos colocadas en nuestros espacios.
 Para eso, creamos un nuevo componente especializado para mostrar las tarjetas de GIFs.
*/

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import GifExpertApp from "./GifExpertApp";
// import "./styles.css";

/*
 Renderizamos nuestra aplicación principal `GifExpertApp` dentro del `StrictMode`.
 Esto nos ayuda a detectar posibles problemas en el código durante el desarrollo.
*/
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GifExpertApp />
//   </StrictMode>
// );

/*
 Ahora creamos un nuevo componente llamado `GifGrid` que se encargará de mostrar
 las imágenes obtenidas desde nuestra API.
*/

// import { useEffect, useState } from "react";
// import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";

// export const GifGrid = ({ category }) => {
// Creamos un estado local para almacenar las imágenes obtenidas.
//   const [images, setImages] = useState([]);

// Función asíncrona para obtener las imágenes y actualizar el estado.
//   const getImages = async () => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
//   };

//   useEffect(() => {
//     // Llamamos a `getImages` cuando el componente se monta.
//     getImages();
//   }, []);

//   return (
//     <>
//       {/* Mostramos el título de la categoría */}
//       <h3>{category}</h3>

//       <div className="card-grid">
//         {/* Iteramos sobre `images` y renderizamos un `GifItem` por cada imagen */}
//         {images.map((image) => (
//           <GifItem
//             key={image.id} // Agregamos una key única para evitar advertencias en React.
//             {...image} // Pasamos todas las propiedades de la imagen como props.
//           />
//         ))}
//       </div>
//     </>
//   );
// };

/*
 Ahora creamos el componente `GifItem`, que representará cada una de las tarjetas individuales.
 Este componente recibe las propiedades `title`, `url` e `id`.
*/

// export const GifItem = ({ title, url, id }) => {
//   return (
//     <div className="card">
//       {/* Mostramos la imagen con su respectivo título */}
//       <img src={url} alt={title} />
//       <p>{title}</p>
//     </div>
//   );
// };
