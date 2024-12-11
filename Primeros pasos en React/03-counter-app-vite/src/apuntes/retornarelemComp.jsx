// En esta clase aprendimos sobre la importancia de tener un nodo padre para componentes en React.
// El profesor explicó varias alternativas y sus implicaciones. Veamos cómo quedó el código final
// y analicemos las soluciones planteadas a lo largo de la clase.

// Solución final usando un fragmento implícito: <>...</>
// Esto permite agrupar elementos JSX sin generar un nodo HTML extra en el DOM.
export const FirstApp = () => {
  return (
    // El fragmento implícito (<>) actúa como nodo padre para el h1 y el p
    // evitando la necesidad de un div o la importación explícita de Fragment.
    <>
      <h1>Aldo</h1>
      <p>Soy un subtitulo</p>
    </>
  );
};

// -------------------------------------------------------------------------

// Otra solución usando Fragment explícito:
// Aquí se utiliza el Fragment importado desde React para agrupar los elementos.
// Este enfoque evita crear nodos HTML adicionales, similar al fragmento implícito.
// import { Fragment } from "react";
// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Aldo</h1>
//       <p>Soy un subtitulo</p>
//     </Fragment>
//   );
// };

// -------------------------------------------------------------------------

// Solución inicial usando un div:
// Aunque funcional, este enfoque introduce un nodo HTML innecesario (div),
// lo que puede afectar el diseño o el rendimiento si no es requerido.
// export const FirstApp = () => {
//   return (
//     <div className="row">
//       <h1>Aldo</h1>
//       <p>Soy un subtitulo</p>
//     </div>
//   );
// };

// -------------------------------------------------------------------------

/* Resumen de los conceptos explicados por el profesor:

1. **Error por falta de nodo padre:**
   - Si intentamos devolver múltiples elementos JSX sin un nodo padre, React mostrará un error.
   - Es necesario envolver los elementos en un contenedor común (div, Fragment, o un fragmento implícito).

2. **Div como nodo padre:**
   - Inicialmente se usó un div para agrupar los elementos, pero esto puede generar problemas en el DOM
     como estilos inesperados al añadir un nodo HTML extra.

3. **Fragment explícito:**
   - React ofrece el componente Fragment para agrupar elementos sin crear nodos adicionales.
   - Esto evita sobrecargar el DOM y es más limpio visualmente.

4. **Fragmento implícito:**
   - Alternativa más elegante que utiliza <>...</> como sinónimo de un Fragment.
   - No requiere importar Fragment desde React y es comúnmente usada.

Conclusión:
- Siempre debe haber un nodo padre en los componentes.
- Usa fragmentos (implícitos o explícitos) para evitar añadir nodos innecesarios.
*/

// import { Fragment } from "react";
// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h1>Aldo</h1>
//       <p>Soy un subtitulo</p>
//     </Fragment>
//   );
// };

// export const FirstApp = () => {
//   return (
//     <div className="row">
//       <h1>Aldo</h1>
//       <p>Soy un subtitulo</p>
//     </div>
//   );
// };
