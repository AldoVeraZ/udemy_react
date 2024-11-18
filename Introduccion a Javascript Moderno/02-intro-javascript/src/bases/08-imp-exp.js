//import { heroes } from "./data/heroes";
//import { heroes } from "./data/heroes";
/* console.log(heroes);*/

/* import heroes, { owners } from "./data/heroes"; */

import heroes, { owners } from "../data/heroes";

console.log(owners);

/* import { heroes } from "./data/heroes"; */

/* onst getHeroeById = (id) => {
  return heroes.find((heroe) => {
    if (heroe.id === id) {
      return true;
    } else {
      return false;
    }
  });
}; */

//Simplificacion de la funcion
/* const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}; */
// se puede simplificar aun mas quitando el return y las llaves
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));

// find ? filter
const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner("Marvel"));

// CLASE IMPORT, EXPORT Y FUNCIONES COMUNES DE ARREGLOS (CLASE 21 INTRO A JAVASCRIPT MODERNO)
// Vamos a importar los héroes desde un archivo heroes.js.
// Para hacerlo, usamos la palabra reservada 'import' junto con la desestructuración de objetos.
//import { heroes } from './data/heroes'; // Ruta relativa al archivo heroes.js

// Verificamos si la importación fue correcta imprimiendo el contenido de 'heroes'
//console.log(heroes); // Esto debería mostrar el arreglo de héroes en la consola.

// Ahora creamos una función que buscará un héroe por su id. Recibimos el id como argumento.
//const getHeroeById = (id) => {
//console.log('getHeroeById', id); // Imprimimos el id recibido para verificar que está funcionando correctamente.

// Aquí usamos el método 'find' para buscar un héroe dentro del arreglo 'heroes' por su id.
// 'find' acepta una función de callback que se ejecutará para cada héroe en el arreglo.
// El callback recibe un 'héroe' de cada iteración, y retornamos el primero que coincida con el id.
//return heroes.find((hero) => hero.id === id); // Si encuentra un héroe, lo retorna.
//}

// Probamos la función con diferentes ids para ver si funciona correctamente.
//console.log(getHeroeById(2)); // Debemos obtener el héroe con id 2 (Spiderman)
//console.log(getHeroeById(1)); // Deberíamos obtener el héroe con id 1 (Batman)
//console.log(getHeroeById(3)); // Deberíamos obtener el héroe con id 3 (Superman)

// La función 'find' recorre todo el arreglo 'heroes' y devuelve el primer héroe que coincida con el id dado.
// Si no encuentra ninguna coincidencia, 'find' retornará 'undefined'.

// CLASE 22 MULTIPLES EXPORTACIONES Y EXPORTACIONES POR DEFECTO
// Creamos un arreglo llamado `heroes` que contiene algunos héroes
/* const heroes = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  { id: 3, name: 'Wonder Woman' }
]; */

// Exportación por defecto: Exportamos el arreglo de héroes
// Esto significa que en otro archivo, si importamos sin llaves, estaremos trayendo este arreglo.
/* export default heroes; */

// También podemos crear un arreglo `owners` que contiene los dueños de los héroes
/* const owners = ['DC', 'Marvel']; */

// Exportación individual: Exportamos el arreglo `owners` de manera separada
// Esto permite importarlo por separado, usando llaves en otro archivo.
/* export { owners }; */

// En otro archivo, podemos importar los valores de la siguiente manera:
// 1. `heroes` se importa como la exportación por defecto (sin llaves)
// 2. `owners` se importa entre llaves, ya que es una exportación individual.

// Ejemplo de cómo realizar las importaciones:
/* import heroes, { owners } from "./data/heroes"; */

// Ahora podemos usar las variables importadas
//console.log(heroes);  // Imprime el arreglo completo de héroes
//console.log(owners);  // Imprime el arreglo de propietarios, 'DC' y 'Marvel'

// Ejemplo de función que utiliza el arreglo `heroes`
/* const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
}; */

// Uso de la función con un ejemplo
//console.log(getHeroeById(2)); // Imprime el héroe con id 2: { id: 2, name: 'Batman' }
