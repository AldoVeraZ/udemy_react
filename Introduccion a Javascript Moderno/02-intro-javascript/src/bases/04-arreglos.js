// Es momento de hablar sobre los arreglos en JavaScript.
/* hay que pensar que un arreglo no es más que una colección de información que se encuentra dentro de una misma variable. */
/* Usualmente no me van a ver a mí hacerlo de esta forma y no se recomienda hacerlo de esta manera const arreglo = new Array(), 
la única excepción cuando ustedes quieren crearse un arreglo con valores, por decir así, un tamaño fijo o un tamaño predefinido
Al iniciar, no un tamaño fijo, porque inclusive cuando, por ejemplo, si yo quiero crear 100 posiciones.
Puedo hacerlo de esta manera y ahora tengo un arreglo vacio que tiene 100 posiciones, o sea 100 elementos  o sea 100 elementos
dentro del arreglo y cada una de sus posiciones está vacía. Ustedes pueden hacerlo de esta manera.
Es la única excepción, pero no quiere decir que esto le pone un candado a este arreglo y que yo no lo puedo seguir expandiendo.*/
/* const arreglo = new Array(100); */

/* Perfectamente puedo hacer un arreglo, un arreglo.push parentesis.
Y voy a añadir que sé yo, un uno, voy a grabar los cambios y ahora tenemos un arreglo que tiene 100 posiciones 
vacías y luego añadimos una adicional, perfectamente se puede hacer, ok, que se puede añadir.Ejemplo:*/
/* En pocas palabras, esto no quiere decir que pone un candado y que ya no se puede expandir más.
OK, pero es muy raro que nosotros utilicemos eso, pero es importante que sepan que existe. */
/* const arreglo = new Array(100);
 */
/* Voy a crearme el arreglo como normalmente lo haríamos, que sería arreglo y entre llaves cuadradas de esta manera
voy a grabar los cambios y ahora tengo un arreglo que dentro sólo tiene el valor de 1
y esta sintaxis que está aquí adentro se mirara un poquito raro, pero esa es la posición índice y la
posición índice cero va a apuntar al valor de 1 (lo que se ve en la consola) */
/* const arreglo = []; */
/* Perfectamente. Ustedes pueden clonar esta línea 2, 3, 4 grabo los cambios y una vez que tenemos valores de 1 2 3 4, el primer valor es la posición 0 1 2 3. */
/* arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4); */
/* Otra cosa que les quiero hablar, es que no es recomendable que utilicemos el push porque el push modifica el objeto principal.
Yo sé que le digo un objeto, pero los arreglos son objetos en JavaScript también. Entonces nosotros no vamos a utilizar el push. */
/* Cuando queramos insertar algo a un arreglo, lo vamos a ser utilizando el operador spread. Ya lo van a ver */

/* En fin, cuando estamos creando este arreglo, yo puedo inicializarlo de una vez, por ejemplo, de esta manera 1,2, 3, 4. Y aquí lo tenemos igual. */
const arreglo = [1, 2, 3, 4];

/* Voy a crearme un problema similar, como lo vimos en el video anterior de los objetos literales. Voy a hacerme una constante. Definamosla como let porque luego lo vamos a cambiar.
ya van a ver, ya van ver, se va a llamar arreglo2. Va a ser igual al arreglo. Punto y coma.*/

/* let arreglo2 = arreglo; */
/* Si yo hago un arreglo2.push, voy a mandar el valor o adicionar el valor de 5 punto y coma. */

/* Voy a grabar los cambios y van a ver que tenemos cinco en ambos arreglos. A pesar de que yo solo hice un push al arreglo2 
y aquí viene la primera tarea que les voy a dejar, yo no voy a utilizar este push. */
/* arreglo2.push(5); */
/* Necesito que de alguna manera Uds. expandan ese arreglo y adicionen el valor de cinco, ok, haganlo más o menos así. 
Hay que adicionar algo más.

Este código es correcto. Si ustedes graban los cambios, de esta manera, lo que hace es crearse un nuevo arreglo que dentro tiene
el arreglo anterior y una posición adicional que es el 5. Necesito que ustedes rompan esta referencia y añadan cada uno de los elementos ahi, y miren el video anterior.
No tienen que hacer ninguna modificación al código, simplemente tienen que añadir algo más Aquí adentro,aqui adentro tienen que añadir algo.
Pruebenlo a intentar resolverlo y regreso con ustedes unos segundos.*/
/* let arreglo2 = [arreglo, 5];  OK, espero que no hayan tenido mayor inconveniente y aquí también podemos utilizar el operador spread
grabo los cambios y tenemos el resultado esperado. Recuerden, el operador spread es sumamente usado para crear, por decirlo así, copias, pero realmente
lo que hace es extraer la información de aquí adentro y como estamos creando un nuevo arreglo, y el operador spread
manda individualmente cada uno de los elementos de ese arreglo*/
let arreglo2 = [...arreglo, 5];

/* Voy a crearme un nuevo arreglo que va a ser una constante arreglo3 Arreglo 3 que va a ser igual
Y aquí vamos a tocar un método que es muy usado en React, que es el método map que viene en los arreglos. */
/* const arreglo3 = arreglo2.map(); */
/* Vamos a ver, voy a poner aquí arreglo2 .map, Parentesis, si yo pongo aquí un punto y coma voy a imprimir el arreglo3.
Grabo los cambios. Vamos a ver que tenemos un error y esto es normal porque dice que undefined no es una función y eso es porque
el método map está esperando una función. */

/* Si ustedes abren aquí el objeto en su prototype, van a ver que hay muchos métodos y propiedades. 
Uno de ellos es el map y noten que el map es una función cada vez que ustedes crean un arreglo.
Los arreglos tienen esto implícito en su prototype. */
/* En fin, hay una palabra clave acá que tiene el método map y dice que crea un nuevo arreglo.
Esto implícitamente rompe la referencia que hay en JavaScript de los objetos y nos crea un nuevo arreglo
que nosotros ya vamos a poder trabajar perfectamente en él. Noten que aquí tenemos un arreglo de números y aquí está pasándolo por el operador.
map manda una función que lo que hace es hacer un return de este X por dos.
Ya vamos a ver qué es esto y al final salen como que los valores duplicados, ok o los valores multiplicados
por dos. Vamos a hacer este ejercicio */

/* Vamos a hacer este ejercicio Nosotros también, vamos a ver si yo quiero multiplicar cada uno de los valores que tiene el arreglo2
y decir ahorita tenemos de del 1 al 5, y si yo quiero multiplicar cada uno de sus valores por 2, lo
puedo utilizar con el operador map, aqui adentro Vamos a tener una función parentesis, abren y cierran llaves.
Esto se mirará raro y esto es conocido como un callback, es decir, una función que se va a ejecutar dentro  de este metodo map, aunque esta función se va a ejecutar por cada uno de los elementos que esté dentro
de el arreglo de arreglo2*/
/* El argumento que recibe esta función va a ser el número.
El número individual que tenemos acá, es decir, la primera, es como un ciclo. Entonces la primera vez va a tomar el valor de 1, entonces número va a ser uno hace todo el cálculo,
luego va el valor 2, entonces el número va a ser 2, luego tres y así sucesivamente. Va a seguir haciendo este cuerpo*/

/* const arreglo3 = arreglo2.map(function (numero) {}); */

/* Si ustedes graban los cambios vamos a tener el siguiente resultado y dice donde undefined, undefined, undefined hasta
cinco veces.
Por qué?
Recuerden ustedes que cada función en JavaScript, cuando no tiene un return explícito, entonces retorna
undefined y eso es lo que está haciendo.
Está transformando todos los valores de mi arreglo, que son cinco, es este de acá, y los esta transformando undefined. */
/* Si yo pongo un rostro de Hola y grabo los cambios, ahora tenemos un arreglo que dice Hola, hola,
hola hola. Cinco veces porque tenemos cinco elementos acá. 
Bien, si yo quiero multiplicar el número por dos, entonces tomaría el número y lo multiplico por dos.
Punto y coma, grabo los cambios.*/
const arreglo3 = arreglo2.map(function (numero) {
  return numero * 2;
});
/* Y ahora tendremos 2, 4, 6, 8 y 10, porque son los valores que tenemos acá.
Y recuerden, esto crea un nuevo arreglo, por lo cual si yo modificara de alguna manera el arreglo3 
entonces solo el arreglo3, ese el que se va a cambiar y noten que no estamos modificando los arreglos
anteriores. */

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
