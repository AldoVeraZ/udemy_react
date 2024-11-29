// const getImagenPromesa = () => {
//   const promesa = new Promise((resolve, reject) => {
//     resolve("https://totalspirits.cl/en/");
//   });

//   return promesa;
// };

// mas simplificado
// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://totalspirits.cl/en/"));

// getImagenPromesa().then(console.log);

// lo mismo pero con Async:
// const getImagen = async () => {
//   return "https://totalspirits.cl/en/";
// };

// // console.log(getImagen());
// getImagen().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "6x7IRomHWVGl9GnyJxdmwgPmmlV4u41S";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  } catch (error) {
    // manego del error
    console.error(error);
  }
};

// console.log(getImagen());
getImagen();

//   .catch(console.warn);

// Resumen y explicacion
// En esta clase hablaremos sobre el async y el await.

// Primero, el profesor explicó cómo crear una promesa de manera tradicional
// usando la clase `Promise`. Esto nos ayuda a entender cómo manejar promesas
// en JavaScript y cómo simplificarlas posteriormente.

/*
const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve("https://totalspirits.cl/en/"); // Simula una URL devuelta por la promesa.
  });

  return promesa;
};

// Uso de la promesa creada
getImagenPromesa().then(console.log);
*/

// A continuación, el código se simplifica usando una función de flecha más compacta.
// Esto demuestra cómo hacer que el código sea más legible.

/*
const getImagenPromesa = () =>
  new Promise((resolve) => resolve("https://totalspirits.cl/en"));

// Uso de la función simplificada
getImagenPromesa().then(console.log);
*/

// Luego, se introdujo el concepto de `async`, que transforma una función
// para que retorne automáticamente una promesa. Esto hace que el código sea
// más limpio y fácil de leer. Aquí se muestra una implementación básica.

/*
const getImagen = async () => {
  return "https://totalspirits.cl/en/"; // Simula un valor retornado de forma asíncrona.
};

// Llamando a la función y manejando la promesa devuelta.
getImagen().then(console.log);
*/

// Ahora se muestra el ejemplo principal utilizando `async` y `await`.
// Este enfoque permite manejar código asíncrono de manera que parezca síncrono.
// La función obtiene una imagen aleatoria desde la API de Giphy.

// const getImagen = async () => {
//   try {
//     // La API Key para realizar las solicitudes
//     const apiKey = "6x7IRomHWVGl9GnyJxdmwgPmmlV4u41S";

//     // Realizando la petición HTTP usando fetch
//     const resp = await fetch(
//       `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
//     );

//     // `await` permite esperar a que la promesa se resuelva
//     // La respuesta se transforma a JSON
//     const { data } = await resp.json();

//     // Extracción del URL de la imagen original
//     const { url } = data.images.original;

//     // Creación de un elemento de imagen (img) en el DOM
//     const img = document.createElement("img");
//     img.src = url;

//     // Agregando la imagen al cuerpo del documento
//     document.body.append(img);

//   } catch (error) {
//     // Manejo de errores en caso de que falle la petición
//     console.error(error);
//   }
// };

// // Llamando a la función principal
// getImagen();

// Explicación adicional:
// - `async` permite definir funciones que retornan promesas automáticamente.
// - `await` pausa la ejecución hasta que la promesa sea resuelta, haciendo
//   el flujo del código más fácil de entender.
// - Es importante manejar los errores usando bloques `try-catch`.

// Notas finales:
// Este ejemplo es útil para mostrar cómo simplificar el manejo de promesas
// y cómo transformar funciones que antes dependían de `.then` a un formato más moderno.
