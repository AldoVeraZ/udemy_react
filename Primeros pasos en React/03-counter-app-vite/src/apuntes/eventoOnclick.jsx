// import PropTypes from "prop-types";

// // export const CounterApp = ({ value }) => {
// //   function handleAdd(event) {
// //     console.log(event);
// //   }

// // con funcion de flecha, ejemplo afuera:
// // const handleAdd = (event) => {
// //   console.log(event);
// // };
// export const CounterApp = ({ value }) => {
//   // con funcion de flecha:
//   const handleAdd = () => {
//     // console.log(event);
//     console.log("+1");
//     value = 1000;
//     console.log(value);
//   };
//   // export const CounterApp = ({ value }) => {
//   //   // ejemplo de enviar recibir el evento y valor adiciona de string
//   //   function handleAdd(event, newValue) {
//   //     // console.log(event);
//   //     console.log(newValue);
//   //   }
//   //   return (
//   //     <>
//   //       <h1>CounterApp</h1>
//   //       <h2>{value}</h2>

//   //       <button onClick={(event) => handleAdd(event)}>+1</button>
//   //     </>
//   //   );
//   // };

//   //Simplificado:
//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2>{value}</h2>

//       {/* solo se envia la referencia a esta funcion: */}

//       <button onClick={handleAdd}>+1</button>
//     </>
//   );
// };

// // Otro caso, el vento con el value:
// //   return (
// //     <>
// //       <h1>CounterApp</h1>
// //       <h2>{value}</h2>

// //       {/* Se envia el evento y el value con una funcion de flecha y su referencia, o el valor adicional con el evento */}

// //       <button onClick={(event) => handleAdd(event, "hola")}>+1</button>
// //     </>
// //   );
// // };

// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

// RESUMEN Y APUNTE:

// import PropTypes from "prop-types";

/*
Resumen de la clase:

1. **Introducción al manejo de eventos en React**:
   - Se explicó cómo agregar eventos a elementos JSX, utilizando `onClick` como ejemplo.
   - Se discutió cómo definir funciones para manejar los eventos y diferentes formas de hacerlo.

2. **Primer ejemplo**:
   - Definir una función directamente dentro del atributo `onClick`.
   - Se mostró cómo imprimir el evento en consola para observar sus propiedades.
   - Problema: Esto hace que el código sea menos legible.

   Código:
   <button onClick={(event) => console.log(event)}>+1</button>

3. **Segundo ejemplo**:
   - Definir una función de flecha fuera del JSX y pasarla como referencia a `onClick`.
   - Permite mejor separación del código y es más legible.

   Código:
   const handleAdd = (event) => {
       console.log(event);
   };
   <button onClick={handleAdd}>+1</button>

4. **Tercer ejemplo**:
   - Manejo de parámetros adicionales en el evento (por ejemplo, un string).
   - Uso de funciones anónimas dentro del JSX para pasar múltiples argumentos.

   Código:
   const handleAdd = (event, newValue) => {
       console.log(newValue);
   };
   <button onClick={(event) => handleAdd(event, "hola")}>+1</button>

5. **Simplificación del código**:
   - Uso de una función directamente como referencia sin manejar explícitamente el evento, 
     aprovechando que React pasa automáticamente el evento como primer argumento.

   Código:
   const handleAdd = () => {
       console.log("+1");
   };
   <button onClick={handleAdd}>+1</button>

El último ejemplo fue el aplicado en el código activo.
*/

// export const CounterApp = ({ value }) => {
//   // Ejemplo activo: función de flecha simplificada.
//   const handleAdd = () => {
//     console.log("+1");
//     value = 1000; // Cambiar valor local (aunque esto no afecta al estado real de la aplicación).
//     console.log(value); // Se muestra el nuevo valor en consola.
//   };

//   return (
//     <>
//       <h1>CounterApp</h1>
//       <h2>{value}</h2>
//       {/* Se envía la referencia de la función directamente al evento */}
//       <button onClick={handleAdd}>+1</button>
//     </>
//   );
// };

// // Ejemplo 1: Función dentro del evento (menos legible).
// // export const CounterApp = ({ value }) => {
// //   function handleAdd(event) {
// //     console.log(event);
// //   }
// //   return (
// //     <>
// //       <h1>CounterApp</h1>
// //       <h2>{value}</h2>
// //       <button onClick={(event) => handleAdd(event)}>+1</button>
// //     </>
// //   );
// // };

// // Ejemplo 2: Función de flecha definida fuera del JSX (más legible).
// // const handleAdd = (event) => {
// //   console.log(event);
// // };
// // export const CounterApp = ({ value }) => {
// //   return (
// //     <>
// //       <h1>CounterApp</h1>
// //       <h2>{value}</h2>
// //       <button onClick={handleAdd}>+1</button>
// //     </>
// //   );
// // };

// // Ejemplo 3: Manejo de parámetros adicionales.
// // const handleAdd = (event, newValue) => {
// //   console.log(newValue);
// // };
// // export const CounterApp = ({ value }) => {
// //   return (
// //     <>
// //       <h1>CounterApp</h1>
// //       <h2>{value}</h2>
// //       <button onClick={(event) => handleAdd(event, "hola")}>+1</button>
// //     </>
// //   );
// // };

// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };
