// Clase: Creación de un nuevo componente en React

/*
Resumen:
En esta clase, aprendimos a crear un nuevo componente funcional en React, integrarlo al archivo principal de entrada,
y renderizarlo en pantalla. El ejercicio consistió en crear un componente llamado FirstApp que muestra un mensaje
en un elemento <h1>. Además, el instructor destacó la importancia de cometer errores como parte del aprendizaje 
y de practicar los conceptos fundamentales antes de avanzar hacia desafíos más complejos.

Pasos realizados:
1. Creamos un nuevo archivo para el componente llamado `FirstApp.jsx`. 
   - Nota: Por convención, el nombre del archivo y del componente comienza con mayúscula (PascalCase).

2. En el componente FirstApp:
   - Se define como una función de flecha que retorna un elemento JSX.
   - Muestra un mensaje personalizado dentro de un <h1>. En este caso: "Aldo Esteban Vera Zúñiga".

3. Modificamos el archivo de entrada principal:
   - Importamos el nuevo componente `FirstApp` desde su archivo.
   - Lo usamos dentro del método `ReactDOM.createRoot().render()` para renderizarlo en lugar de un componente anterior.

4. Comprobamos que los cambios se reflejan correctamente en el navegador.
*/

// Código del componente FirstApp (FirstApp.jsx)
// export const FirstApp = () => {
//   return <h1>Aldo Esteban Vera Zúñiga</h1>;
// };

/*
Archivo de entrada principal:
Aquí se gestiona la renderización inicial de la aplicación React. 
Se reemplazó el componente anterior (`HelloWorldApp`) con el nuevo componente (`FirstApp`).
*/

// Código del archivo de entrada principal (main.jsx)
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp"; // Componente anterior comentado
// import { FirstApp } from "./FirstApp"; // Nuevo componente importado

// Renderización del componente FirstApp
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <FirstApp />
//   </React.StrictMode>
// );
