//Promesas

import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /* console.log("2 segundos despues"); */
//     // Tarea
//     // importar
//     const p1 = getHeroeById(2);
//     resolve(p1);
//     /*  reject("No se pudo encontrar el héroe"); */

//     /* console.log(heroe); */
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el heroe");
      }
    }, 2000);
  });

  // return promesa;
};

getHeroeByIdAsync(5)
  // .then((heroe) => {console.log("Heroe", heroe);
  // })
  .then(console.log)
  .catch(console.warn);
// .catch((err) => console.warn(err));

// Mas explicaciones
// // 1. Crear una nueva promesa
// const promesa = new Promise((resolve, reject) => {
//   // 2. Usamos setTimeout para simular una tarea que tarda 2 segundos
//   setTimeout(() => {
//     const tareaHecha = true; // Simulamos que la tarea fue exitosa

//     if (tareaHecha) {
//       resolve('Reporte listo'); // Si la tarea fue exitosa, resolvemos la promesa
//     } else {
//       reject('Hubo un error al hacer el reporte'); // Si hay un error, rechazamos la promesa
//     }
//   }, 2000); // 2 segundos de espera (simulando que tarda en completarse la tarea)
// });

// // 3. Usar .then() para manejar el caso de éxito
// promesa
//   .then((mensaje) => {
//     console.log(mensaje); // Esto se ejecutará si la promesa fue resuelta exitosamente
//   })
//   .catch((error) => {
//     console.log(error); // Esto se ejecutará si la promesa fue rechazada (error)
//   })
//   .finally(() => {
//     console.log('La promesa se completó'); // Esto se ejecutará independientemente del resultado
//   });

// // Simulando una API que devuelve un héroe por su ID
// const getHeroeById = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heroes = [
//         { id: 1, nombre: 'Spider-Man' },
//         { id: 2, nombre: 'Iron Man' },
//         { id: 3, nombre: 'Hulk' }
//       ];

//       const heroe = heroes.find(h => h.id === id);

//       if (heroe) {
//         resolve(heroe); // Si encontramos el héroe, resolvemos la promesa
//       } else {
//         reject('Héroe no encontrado'); // Si no lo encontramos, rechazamos la promesa
//       }
//     }, 1000); // Simulamos un retardo de 1 segundo
//   });
// };

// // Usamos la función para obtener el héroe con ID 2
// getHeroeById(2)
//   .then(heroe => {
//     console.log(`Héroe encontrado: ${heroe.nombre}`); // Si se encuentra el héroe, se muestra el nombre
//   })
//   .catch(error => {
//     console.log(error); // Si hubo un error, se muestra el mensaje de error
//   });

// // Importamos la función 'getHeroeById' para simular obtener un héroe desde un API.
// import { getHeroeById } from "./bases/08-imp-exp";

// // Creamos una función que devuelve una promesa, que es una representación asíncrona de un proceso que puede tener éxito o fallar.
// const getHeroeByIdAsync = (id) => {
//   return new Promise((resolve, reject) => {
//     // Aquí simulamos un retraso de 2 segundos para representar el tiempo de espera de una operación asíncrona.
//     setTimeout(() => {
//       // Simulamos que tenemos una base de datos de héroes y tratamos de obtener un héroe por su ID.
//       const p1 = getHeroeById(id);

//       // Si encontramos el héroe con el ID, resolvemos la promesa (promesa exitosa).
//       if (p1) {
//         resolve(p1);
//       } else {
//         // Si no encontramos el héroe, rechazamos la promesa (promesa fallida).
//         reject("No se pudo encontrar el héroe");
//       }
//     }, 2000); // Este es el tiempo simulado en milisegundos (2 segundos de espera).
//   });
// };

// // Llamamos a la función que devuelve una promesa y manejamos su resultado.
// getHeroeByIdAsync(2)
//   .then((heroe) => {
//     // Si la promesa se resuelve correctamente, mostramos el héroe encontrado.
//     console.log("Heroe encontrado:", heroe);
//   })
//   .catch((err) => {
//     // Si la promesa falla, mostramos un error en la consola.
//     console.warn(err);
//   });

// Resumen del flujo de trabajo:
// 1. **Promesas en la vida real**: El profesor explica cómo una promesa en JavaScript es similar a un compromiso real. Como cuando un jefe te dice "Necesito este reporte para mañana", y tú le dices "Te prometo que lo tendrás".
//
// 2. **El concepto de Promesas**: En JavaScript, una promesa es algo que puede tener dos resultados:
//    - Si se cumple, se "resuelve" (se cumple el compromiso).
//    - Si falla, se "rechaza" (no se pudo cumplir el compromiso).
//
// 3. **La función `setTimeout`**: Es como decirle a tu jefe que vas a entregar el reporte en 2 segundos, lo cual simula el tiempo de espera. Aquí usas `setTimeout` para retrasar la ejecución y simular un trabajo asíncrono.
//
// 4. **Uso de `resolve` y `reject`**: Cuando se llama a `resolve()`, significa que todo salió bien y se cumplió el compromiso (el reporte está listo). Si se llama a `reject()`, es porque algo salió mal, y le notificas a tu jefe que no pudiste hacerlo.
//
// 5. **Métodos de la promesa: `then`, `catch` y `finally`**:
//    - **`then()`**: Se ejecuta cuando la promesa se resuelve correctamente. Es el callback que maneja el resultado exitoso (ejemplo: mostrar el reporte en la mesa).
//    - **`catch()`**: Se ejecuta si la promesa falla. Es el callback para manejar los errores o problemas (ejemplo: "No pude hacer el reporte").
//
// 6. **`finally()`**: Este método se ejecuta **siempre** después de que la promesa se resuelve o se rechaza. Esto es útil para ejecutar código que necesitas que se ejecute sin importar el resultado final (por ejemplo, limpiar una interfaz, cerrar una conexión).
//
// 7. **Importación y Uso de `getHeroeById`**: El profesor hace un refuerzo adicional, mostrándote cómo importar la función `getHeroeById` desde otro archivo. Esto simula una petición a un API, y puedes usarlo para obtener datos reales que podrías necesitar en tu aplicación.
//    - Si el héroe existe, `resolve` se ejecuta, y si no, `reject` se invoca con un mensaje de error.

// 8. **Ejercicio para la práctica**: El profesor te pide practicar importando correctamente la función `getHeroeById` y asegurarte de que el código esté funcionando correctamente. Esto es para que practiques la interacción con APIs (o la simulación de estas) y cómo gestionar los resultados con promesas.
