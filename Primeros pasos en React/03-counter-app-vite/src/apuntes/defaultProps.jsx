// // **Resumen y Código de la Clase sobre PropTypes y DefaultProps**

// // En esta clase, el profesor explicó cómo utilizar `PropTypes` y `defaultProps`
// // para manejar las propiedades de los componentes en React. Esto permite
// // validar los tipos de las propiedades y establecer valores predeterminados,
// // facilitando la detección de errores y mejorando la claridad del código.

// // El flujo fue: definir las propiedades requeridas (`PropTypes`),
// // establecer valores por defecto (`defaultProps`), y probar diferentes
// // escenarios para ver cómo se comporta el componente.

// // **main.jsx**
// import React from "react";
// import ReactDOM from "react-dom/client";
// // Importación del componente FirstApp
// import { FirstApp } from "./FirstApp";

// import "./styles.css";

// // Renderización del componente en el DOM. No se pasan propiedades aquí,
// // por lo que se usarán los valores predeterminados definidos en defaultProps.
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <FirstApp />
//   </React.StrictMode>
// );

// /*
// El profesor explicó que si no se pasa un valor para una propiedad,
// React usará el valor definido en `defaultProps`. Por ejemplo, en este caso:
//   - title mostrará "No hay título".
//   - subTitle mostrará "No hay subtítulo".
//   - name mostrará "Aldo Vera".
// */

// // **firstApp.jsx**
// import PropTypes from "prop-types";

// // Definición del componente FirstApp. Se desestructuran las propiedades: title, subTitle y name.
// // Esto hace que el código sea más limpio y fácil de leer.
// export var FirstApp = ({ title, subTitle, name }) => {
//   return (
//     <>
//       {/* Uso de las propiedades para renderizar contenido dinámico */}
//       <h1>{title}</h1>
//       <p>{subTitle}</p>
//       <p>{name}</p>
//     </>
//   );
// };

// /*
// El profesor destacó que `defaultProps` permite establecer valores por defecto
// para las propiedades, útil cuando no se proporcionan valores desde el componente padre.
// */

// // Definición de valores por defecto. Si no se pasan valores desde el padre:
// // - title mostrará "No hay título".
// // - subTitle mostrará "No hay subtítulo".
// // - name mostrará "Aldo Vera".
// FirstApp.defaultProps = {
//   name: "Aldo Vera",
//   subTitle: "No hay subtítulo",
//   title: "No hay titulo",
// };

// /*
// `PropTypes` se utiliza para validar los tipos de las propiedades que se pasan al componente.
// - title es obligatorio (`isRequired`) y debe ser de tipo string.
// - subTitle es opcional, pero también debe ser de tipo string.
// Si se pasa un tipo incorrecto, React mostrará un error en la consola.
// */
// FirstApp.propTypes = {
//   subTitle: PropTypes.string,
//   title: PropTypes.string.isRequired,
// };

// /*
// Durante la clase, se hizo énfasis en la importancia de usar `PropTypes` y `defaultProps`
// en equipos de trabajo, ya que ayudan a:
//   - Prevenir errores comunes, como pasar tipos de datos incorrectos.
//   - Documentar el comportamiento esperado del componente.
//   - Facilitar el debugging con mensajes claros en la consola.

// El profesor también explicó cómo depurar usando las Developer Tools de React para inspeccionar
// las props y cómo estos valores cambian dinámicamente dependiendo de los datos que reciba
// el componente. Además, mencionó que es una buena práctica definir las configuraciones (`defaultProps` y `PropTypes`)
// al final del archivo para mantener un orden lógico.
// */
