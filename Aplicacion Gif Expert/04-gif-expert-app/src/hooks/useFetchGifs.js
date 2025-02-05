import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook no es mas que una funcion que regresa algo y en este caso el return es un objeto que tiene las imagenes y el isLoading
export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    // getGifs(category).then((newImages) => setImages(newImages));
    getImages();
  }, []);

  // return {
  //   images: [],
  //   isLoading: true,
  // };
  // las imagenes las envio con el objeto que se retorna
  // return {
  //   images: images,
  //   isLoading: true,
  // };
  // cuando se tiene una propiedad que apunta a una variable con ese mismo nombre, se puede omitir y en este caso se pone solo
  // la propiedad que a la vez es la variable
  return {
    images,
    // isLoading: isLoading,
    isLoading,
  };
};
