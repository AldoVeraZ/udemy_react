// Objetos literales
// Lo crearemos como una constante, persona, va a ser igual a un objeto,  esto {} es nuestro objeto literal.
const persona = {
  // En general los objetos trabajan con pares de valores.
  //Tenemos una llave, en este caso lo voy a poner nombre y el valor va a ser Tony.
  // En este caso tenemos la llave nombre y el valor al que apunta esa llave es 'Tony'.
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  /*  Ustedes pueden anidar también objetos dentro de objetos.
 Pueden añadir funciones, pueden añadir métodos, pueden añadir otros objetos. */
  direccion: {
    cuidad: "New York",
    zip: 10001,
    lat: 40.7128,
    lng: 73.935242,
  },
};

// De esta manera, si yo quisiera recuperar el nombre de Tony, diría persona.nombre

// También, aprovechando el momento, si quieren imprimir este objeto.
//Hay varias formas de hacerlo, porque aquí yo no sé qué nombre es el que le estoy dando a esta variable en la consola,
//entonces yo no sé qué nombre tiene acá.
// Si ustedes ponen  persona entre llaves, aquí también, en pocas palabras.
// Estamos creando un objeto.
// Si estamos creando un objeto que dentro tiene una propiedad que se llama persona y le estamos asignando
// el valor dos puntos, persona.
// Básicamente estamos creando un nuevo objeto.
// Cómo hacer eso?
/* De esta manera, estamos creando un nuevo objeto que tiene una propiedad llamada persona 
y el valor al que apunta es a mi objeto y por eso es lo que estamos viendo
aquí, en la consola la viista de la consola  Ejemplo:*/
/* console.log({
  persona: persona,
}); */
/* pero en JavaScript, desde el ECMAScript 6, cuando 
ustedes tienen una propiedad de un objeto y el valor de esa, bueno, de esta llave es exactamente o tiene el mismo nombre
a una variable con ese, con esta propiedad, entonces pueden obviar ponerlo así, o sea pueden obviar poner
esos dos puntos. 
pero por el momento esta es una manera de imprimir en consola que les ayuda a tener el nombre de la variable por si acaso
Ustedes tienen muchas variables y si quieren saber cuál es la primera, cuál imprimimos segundo y etc.  ejemplo:
console.table({ persona });
*/

/* 
otra forma mas ordenada de verlo en consola
console.table(persona); */
/* console.log(persona); */

// que si nosotros
/* queremos crear otro objeto, digamos que quiero clonar todo esto. Quiero crear una persona dos. */
/* const persona2 = persona; */

/* 
En teoría, podemos ver que tenemos por lo menos los mismos resultados, uno con persona y el otro con persona2,
pero esto que estamos haciendo acá cuando estamos haciendo una asignación de este tipo, realmente lo
estamos copiando, no es el valor de la misma.
Estamos copiando la referencia al espacio en memoria de esta variable (persona).
Y podemos demostrarlo de la siguiente manera, si yo quiero cambiar el nombre de persona2, persona2,

punto. y voy a ponerle acá

Digamos que el nombre va a ser igual a 'Peter'.

Van a ver qué interesante esto, voy a grabar los cambios.
Se recarga navegador web y eso puede darme un falso positivo, es decir, podría pensar que todo está

correcto.

Bueno, así tenemos la primera propiedad.

La primera variable que tiene el valor de Tony.

Y la segunda, que es la persona2.

El valor de Peter, se podría pensar de que eso está bien.

Lo que pasa y se imprime de esa manera, porque cuando ejecutamos el programa JavaScript va haciéndolo

línea por línea, llegó a hacer esta impresión y esta impresión.

En su momento tenía el valor de Tony.
Luego hicimos, esta, bueno, entre comillas, clonación, pero realmente es una asignación de referencia.
Luego cambiamos el nombre persona2 y luego se imprime en consola y aparece acá.
Pero miren qué interesante que si yo me voy al console.log y lo pongo al lado, o sea Persona y luego persona2,

*/

/* const persona2 = persona;
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2); */

/* grabo los cambios, van a ver que realmente modificamos el objeto en su posición de memoria y por eso
tenemos aquí Peter y Peter iguales. */

/* Entonces esta asignación ustedes no la tienen que hacer jamás porque estamos haciendo la copia de la

referencia.  const persona2 = persona; */

/* Entonces, si yo quiero crear un clon, lo más fácil es que ustedes creen un nuevo objeto y pongan todas

las propiedades, como por ejemplo nombre va a ser 'Peter', dos puntos 'Peter'. */
/* const persona2 = {
  nombre: "Peter",
}; */
/* Y qué pereza escribir todo, porque es un objeto grandísimo y son muchas propiedades y yo no quiero

hacer eso y no estoy diciendo que lo hagan, pero entre comillas, si ustedes hacen un objeto nuevo, entonces

apunta a un espacio memoria nuevo, pero ya JavaScript en el ECMAScript 6 incluyó lo que es el operador

spread y puedo utilizarlo para hacer un clon o extraer cada una de esas propiedades y asignarselas a

este nuevo objeto que estoy creando. sonará complicado, pero solo es utilizar tres puntos, puntos 3 puntos, y luego el nombre del objeto.

Este caso sería persona, voy a grabar los cambios y ahora van a ver que creamos una copia de persona.

Y si le asignamos a persona2, de esta manera, ustedes van a tener un clon del objeto */
const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
