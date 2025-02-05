// /*
//   Es momento de trabajar con un Custom Hook.
//   Un custom hook significa un hook que yo voy a crear desde cero.
//   La idea es reutilizar lógica y simplificar los componentes, aplicando el principio DRY (Don't Repeat Yourself).
//   Los custom hooks permiten agrupar lógica relacionada y hacer que los componentes sean más limpios y reutilizables.
// */

// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";

// // Un hook no es más que una función que regresa algo, en este caso un objeto con las imágenes y el estado de carga
// export const useFetchGifs = (category) => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   /*
//     Cuando el componente se monta, necesitamos obtener las imágenes.
//     En lugar de llamar a getGifs directamente en un useEffect dentro del componente, encapsulamos esta lógica aquí.
//   */
//   const getImages = async () => {
//     const newImages = await getGifs(category);
//     setImages(newImages);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getImages();
//   }, []);

//   // Retornamos un objeto con las imágenes y el estado de carga para que pueda ser usado en los componentes
//   return {
//     images,
//     isLoading,
//   };
// };

// /*
//   Ahora creamos el componente GifGrid, que usará el custom hook para obtener y mostrar las imágenes.
// */
// import { GifItem } from "./GifItem";
// import { useFetchGifs } from "../hooks/useFetchGifs";

// export const GifGrid = ({ category }) => {
//   // Utilizamos el custom hook para obtener las imágenes y el estado de carga
//   const { images, isLoading } = useFetchGifs(category);

//   return (
//     <>
//       <h3>{category}</h3>

//       {/* Mostramos un mensaje mientras las imágenes están cargando */}
//       {isLoading && <p>Cargando...</p>}

//       <div className="card-grid">
//         {/* Mapeamos las imágenes para mostrarlas en el componente GifItem */}
//         {images.map((image) => (
//           <GifItem key={image.id} {...image} />
//         ))}
//       </div>
//     </>
//   );
// };

// /*
//   Finalmente, tenemos el componente GifItem, que es el que mostrará cada imagen individualmente.
//   Recibe el título, la URL y el ID de cada imagen.
// */
// export const GifItem = ({ title, url, id }) => {
//   return (
//     <div className="card">
//       <img src={url} alt={title} />
//       <p>{title}</p>
//     </div>
//   );
// };
