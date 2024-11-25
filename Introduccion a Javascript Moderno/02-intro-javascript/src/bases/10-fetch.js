// FetchAPI

const apiKey = "6x7IRomHWVGl9GnyJxdmwgPmmlV4u41S";

// como funciona el FetchAPI que ya viene en el navegador:
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

// peticion
//   .then((resp) => {
//     /* console.log(resp); */
//     resp.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.warn);

//Encadenamiento de promesas:
peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;
    // console.log(url);
    const img = document.createElement("img");

    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);

// EXPLICACION
// Aquí definimos nuestra clave API, que es la que nos dará acceso a la API de Giphy
// const api_key = 'tu_api_key_aqui'; // Sustituye con tu propia API Key obtenida en Giphy

// La URL base que vamos a utilizar para hacer la petición
// Aquí concatenamos la URL de la API de Giphy con nuestra API Key usando template literals
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

// Hacemos la petición a la API utilizando fetch
// const peticion = fetch(url) // fetch ya está disponible en todos los navegadores modernos
//   .then((respuesta) => {  // Entonces, cuando la promesa se resuelve con una respuesta
// Verificamos si la petición fue exitosa, 'ok' es true si todo salió bien
//     if (respuesta.ok) {
// Si la respuesta fue exitosa, procesamos los datos de la respuesta
//       return respuesta.json();  // Retornamos la respuesta en formato JSON (debe ser otra promesa)
//     } else {
// Si la respuesta no fue exitosa, lanzamos un error
//       throw new Error('Error en la solicitud de datos');
//     }
//   })
//   .then((data) => {  // Cuando la promesa de respuesta.json() se resuelva, obtenemos los datos
// Mostramos los datos en consola para ver la estructura
//     console.log(data);

// Aquí accedemos a la imagen del gif dentro de la estructura de la respuesta JSON
//     const gifURL = data.data[0].images.original.url;  // Nos da la URL del gif

// Creamos un nuevo elemento <img> y le asignamos la URL del gif
//     const imgElement = document.createElement('img');
//     imgElement.src = gifURL;  // Asignamos el src con la URL del gif obtenido

// Agregamos la imagen al body del documento para mostrarla en la pantalla
//     document.body.appendChild(imgElement);
//   })
//   .catch((error) => {  // En caso de que haya un error en la petición o el procesamiento
// Mostramos el error en la consola
//     console.error('Error al obtener el gif:', error);
//   });
