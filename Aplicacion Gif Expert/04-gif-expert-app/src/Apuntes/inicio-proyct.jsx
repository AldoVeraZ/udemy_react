// Archivo: main.jsx
// Este archivo es el punto de entrada de nuestra aplicación. Aquí montamos nuestro componente principal 'GifExpertApp' en el DOM.

// Importamos React y las herramientas necesarias para renderizar la aplicación
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// Importamos el componente principal de la aplicación
// import { GifExpertApp } from "./GifExpertApp";

// Renderizamos el componente principal dentro del elemento con id "root" en el HTML
// createRoot(document.getElementById("root")).render(
//   <StrictMode>
{
  /* StrictMode es una herramienta para detectar problemas potenciales en la aplicación */
}
{
  /* <GifExpertApp />
  </StrictMode>
); */
}

/* 
RESUMEN:
1. Creamos un proyecto nuevo usando Vite (o una herramienta similar) y configuramos el entorno base.
2. Este archivo 'main.jsx' es donde montamos nuestra aplicación en el DOM, utilizando la API de React para ello.
3. Utilizamos <StrictMode> para ayudar a identificar problemas en el desarrollo.
*/

// Archivo: GifExpertApp.jsx
// Este archivo define el componente principal de la aplicación. Aquí iniciaremos la lógica de nuestra aplicación.

// export const GifExpertApp = () => {
//   return (
//     <>
{
  /* Título principal de la aplicación */
}
{
  /* <h1>GifExpertApp</h1>
    </>
  );
}; */
}

/* 
RESUMEN:
1. 'GifExpertApp' es un Functional Component (componente funcional) que será la raíz de nuestra aplicación.
2. Por ahora, solo muestra un título en pantalla.
3. Los fragmentos (<></>) nos permiten agrupar elementos sin añadir nodos extra al DOM.
4. Este componente se importó y utilizó en el archivo 'main.jsx'.
*/

/* 
NOTAS ADICIONALES DE LA CLASE:
- Se explicó cómo eliminar archivos innecesarios del proyecto base de Vite para mantener el proyecto limpio.
- En la versión moderna de React (17+), ya no es necesario importar explícitamente React para usar JSX.
- Se recomienda mantener un orden en los archivos, como colocar el punto inicial de la aplicación en la carpeta 'src'.
- La estructura modular y el uso de archivos organizados facilita la escalabilidad de la aplicación.
*/
