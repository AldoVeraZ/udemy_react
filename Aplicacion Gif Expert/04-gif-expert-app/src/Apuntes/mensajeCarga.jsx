// import { GifItem } from "./GifItem";
// import { useFetchGifs } from "../hooks/useFetchGifs";

// // En esta lección se implementa un indicador de carga para mostrar un mensaje mientras se obtienen imágenes.
// // Sabemos que inicialmente no tenemos imágenes, por lo que el contenido del componente se renderiza condicionalmente.

// export const GifGrid = ({ category }) => {
//   // Se usa un custom hook para obtener las imágenes y el estado de carga
//   const { images, isLoading } = useFetchGifs(category);

//   return (
//     <>
//       {/* Se muestra la categoría que se está consultando */}
//       <h3>{category}</h3>

//       {/* Diferentes formas de manejar la carga: */}
//       {/*
//         1. Usar un componente separado que internamente maneje la lógica del loading
//         <LoadingMessage isLoading={isLoading} />
//       */}

//       {/*
//         2. Usar un operador ternario para mostrar el mensaje "Cargando..." si isLoading es true
//         isLoading ? (<h2>Cargando...</h2>) : null
//       */}

//       {/*
//         3. Usar un "if corto" con && lógico: si isLoading es true, se muestra el mensaje
//         - Si isLoading es false, la evaluación se detiene y no se muestra nada.
//         - Esta técnica evita usar ternarios innecesarios y hace que el código sea más legible.
//       */}
//       {isLoading && <h2>Cargando...</h2>}

//       {/* Una vez que las imágenes han sido cargadas, se renderizan en un contenedor */}
//       <div className="card-grid">
//         {images.map((image) => (
//           <GifItem
//             key={image.id}
//             {...image} // Se pasan las props de la imagen directamente
//           />
//         ))}
//       </div>
//     </>
//   );
// };
