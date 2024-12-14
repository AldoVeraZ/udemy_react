// Importamos React y ReactDOM para renderizar nuestro componente en el DOM
// import React from "react";
// import ReactDOM from "react-dom/client";

// Aquí importamos el componente FirstApp que hemos creado
// import { HelloWorldApp } from "./HelloWorldApp";
// import { FirstApp } from "./FirstApp";

// Renderizamos el componente FirstApp dentro del div con id 'root' en el HTML
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     {/* Componente principal FirstApp que vamos a renderizar */}
//     <FirstApp />
//   </React.StrictMode>
// );

// -----
// Componente FirstApp.jsx
// -----
// En este archivo vamos a manejar cómo imprimir dinámicamente información en el HTML.

// Primero, creamos una constante llamada 'simbiont' que es una función que retorna un objeto.
// const simbiont = () => ({
//   name: "Venom", // Nombre del simbionte
//   user: "Tom Hardy", // Actor que interpreta al simbionte
// });

// El código comentado muestra diferentes formas de manejar funciones para realizar cálculos
// Como un ejemplo, se tiene la función 'getResult', que puede ser una función que devuelve un cálculo,
// o simplemente una suma de dos valores pasados como argumentos.

// Ejemplo de función comentada que devuelve un valor calculado:
// const getResult = (a, b) => {
//   return a + b; // Retorna la suma de los dos números recibidos
// };

// Si descomentamos esta parte, podríamos ver el resultado de la función en el HTML.

// A continuación, tenemos un objeto 'newMessage' que almacena un mensaje y un título.

// const newMessage = {
//   message: "Hola Mundo", // Mensaje
//   title: "Fernando", // Título
// };

// Este objeto también se podría mostrar en el HTML, pero está comentado para este ejemplo.

// Aquí viene lo interesante: vamos a renderizar información dinámica dentro de nuestro JSX.
// Primero, renderizamos un título estático con "Aldo", un nombre que aparece dentro del <h1>.

// Luego, tenemos un <code> que utiliza la función simbiont() para mostrar un objeto de forma dinámica.
// Utilizamos JSON.stringify() para convertir el objeto en una cadena y mostrarla en el HTML.

// export const FirstApp = () => {
//   return (
//     <>
//       {/* <h1>{getResult(1, 2)}</h1> */}
//       {/* El h1 muestra el resultado de la función getResult si estuviera descomentado. */}
//       <h1>Aldo</h1> {/* Título estático */}
//       {/* Mostramos el objeto generado por la función simbiont() en formato JSON */}
//       <code>{JSON.stringify(simbiont())}</code>{" "}
//       {/* Muestra el objeto como cadena JSON */}
//       {/* <code>{JSON.stringify(newMessage)}</code> */}
//       {/* Otra opción que hemos comentado, muestra el contenido del objeto newMessage */}
//       <p>Soy un subtitulo</p> {/* Un subtítulo estático */}
//     </>
//   );
// };

// Resumen de los conceptos clave explicados:
// 1. Cómo pasar y mostrar variables dentro de JSX utilizando llaves `{}`.
// 2. Expresión de JavaScript dentro de JSX: se pueden ejecutar operaciones como sumar, dividir, etc.
// 3. No se pueden renderizar objetos directamente dentro de JSX. Necesitamos convertirlos a una cadena.
// 4. Uso de `JSON.stringify()` para convertir objetos a cadenas JSON y poder mostrarlas en el HTML.
// 5. Creación de funciones y cómo usarlas dentro del JSX para hacer cálculos o manipular datos dinámicamente.

// Expresión dentro de JSX:

// El profesor comienza explicando que dentro de los elementos JSX podemos colocar cualquier expresión de JavaScript encerrada entre llaves ({}). Por ejemplo, se puede mostrar el resultado de una operación aritmética o el valor de una variable.
// Ejemplo: 1 + 2 o simbiont() son expresiones que React puede procesar y mostrar.
// Trabajar con objetos:

// Se muestra cómo podemos manipular y mostrar objetos dentro de JSX. Por ejemplo, simbiont() devuelve un objeto que luego convertimos en una cadena con JSON.stringify() para poder mostrarlo de manera legible.
// Importante: No se puede directamente mostrar un objeto dentro de JSX. En su lugar, se usa JSON.stringify() para convertirlo a texto.
// Comentarios:

// El profesor usa /* ... */ para comentar bloques de código. Esto es útil cuando se quiere explicar una porción de código sin ejecutarla.
// En el código se comentan ejemplos de cómo se podrían usar funciones como getResult para mostrar resultados dentro del componente.
// Modificaciones en tiempo real:

// El profesor hace cambios en el código mientras muestra cómo se afectan los resultados visuales en el navegador. Es una demostración de cómo React maneja el flujo de datos y cómo se reflejan los cambios de estado dentro del renderizado.
// Funciones en JSX:

// El profesor explica cómo se pueden llamar funciones dentro de JSX. En el ejemplo, comenta una posible función getResult para sumar dos números.
// Aunque no se usó en el código final, la idea es cómo podrías usar funciones dentro de JSX para mostrar resultados calculados.
// Resumen adicional sobre conceptos tratados:
// Variables y Objetos en JSX: Se mostró cómo se integran variables y objetos dentro de JSX usando llaves. También se explicó por qué no se puede insertar directamente un objeto, pero sí un valor o expresión dentro de llaves.
// JSON.stringify: Se utiliza cuando necesitamos mostrar un objeto en su forma legible para humanos dentro del HTML.
// Comentar código: El profesor mostró cómo comentar el código tanto en línea como en bloque para organizar el código y hacerlo más entendible.

// {
//   /* El profesor explica que podemos colocar cualquier tipo de expresión de JavaScript dentro de los corchetes.
//       Por ejemplo, podemos colocar una función o una variable. Aquí se muestra cómo colocar directamente un texto. */
// }
// <h1>Aldo</h1>;

// {
//   /* Aquí mostramos el resultado de la ejecución de la función simbiont, que devuelve un objeto con las propiedades 'name' y 'user'.
//       Utilizamos JSON.stringify para mostrar el objeto como una cadena de texto dentro del código. */
// }
// <code>{JSON.stringify(simbiont())}</code>;

// {
//   /* El código que se encuentra comentado sería una alternativa para mostrar el contenido del objeto newMessage.
//       Si se descomenta, mostrará el mensaje y el título. */
// }
// {
//   /* <code>{JSON.stringify(newMessage)}</code> */
// }

// {
//   /* Aquí mostramos un subtítulo, el profesor explicó cómo podemos colocar texto estático o dinámico. */
// }
// <p>Soy un subtitulo</p>;

// const getResult = async () => {
//   return 4 + 4;
// };
// const getResult = () => {
//   return 4 + 4;
// };
// const getResult = (a, b) => {
//   return a + b;
// };

// const newMessage = {
//   message: "Hola Mundo",
//   title: "Fernando",
// };

// const simbiont = () => ({
//   name: "Venom",
//   user: "Tom Hardy",
// });

// export const FirstApp = () => {
//   // const getResult = (a, b) => {
//   //   return a + b;
//   // };
//   return (
//     <>
//       {/* <h1>{getResult(1, 2)}</h1> */}
//       <h1>Aldo</h1>
//       <code>{JSON.stringify(simbiont())}</code>
//       {/* <code>{JSON.stringify(newMessage)}</code> */}
//       <p>Soy un subtitulo</p>
//     </>
//   );
// };
// // export const FirstApp = () => {
// //   return (
// //     <>
// //       <h1>{newMessage.message}</h1>
// //       <p>Soy un subtitulo</p>
// //     </>
// //   );
// // };
