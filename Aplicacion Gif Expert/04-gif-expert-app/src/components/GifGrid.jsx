import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //custom hook:
  const { images, isLoading } = useFetchGifs(category);
  // console.log({ images, isLoading });
  // console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {/* otra forma seria con componente que internamente hace la logica necesaria para mostrarse de manera condicional o no */}
      {/* <loadingMessage isLoading={isLoading} /> */}
      {
        // primera forma con ternario
        // isLoading ? (<h2>Cargando...</h2>) : null
        // otra form con if corto con una sol condicion:
        // si isloading esta en true va a ejecutar la segunda parte de la instruccion, si isloading esta en false eso es lo que segresa y no continua
        // haciendo las demas evaluaciones , la instrccion de abajo tiene un && logico
        isLoading && <h2>Cargando...</h2>
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image}
            // image={image}
            // title={image.title}
            // url={image.url}
          />
        ))}
        {/* {images.map((image) => (
          <li key={image.id}>{image.title}</li>
        ))} */}
      </div>
    </>
  );
};
