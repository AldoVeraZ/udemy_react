// Desestructuración en JavaScript
// La desestructuración (o asignación desestructurante) es una técnica muy utilizada en React y en JavaScript moderno para extraer propiedades específicas de un objeto o elementos de un arreglo, evitando la repetición de referencias al objeto principal.

// Objeto inicial para desestructurar
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  // rango: "Soldado" // Esta propiedad puede no estar definida
};

// Ejemplo de acceso tradicional a las propiedades del objeto
// console.log(persona.nombre); // 'Tony'
// console.log(persona.edad);   // 45
// console.log(persona.clave);  // 'Ironman'

// Desestructuración básica
// Extraemos propiedades específicas directamente
const { nombre, edad, clave } = persona;
console.log(nombre, edad, clave); // 'Tony', 45, 'Ironman'

// Renombrado de variables en la desestructuración
// Si ya tenemos una variable llamada "nombre", podemos renombrarla en la desestructuración
const { nombre: nombre2 } = persona;
console.log(nombre2); // 'Tony'

// Valores por defecto en la desestructuración
// Podemos asignar valores por defecto en caso de que una propiedad no esté definida en el objeto
const { rango = "Capitán" } = persona;
console.log(rango); // 'Capitán', ya que "rango" no está definido en "persona"

// Función que utiliza desestructuración en sus parámetros
const getContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  // Retornamos un nuevo objeto con propiedades específicas y una anidación de objetos
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

// Llamamos a la función getContext y desestructuramos el resultado directamente
const {
  nombreClave,
  anios,
  latlng: { lat, lng }, // Extraemos propiedades anidadas directamente
} = getContext(persona);

console.log(nombreClave, anios); // 'Ironman', 45
console.log(lat, lng); // 14.1232, -12.3232

// Explicación adicional de cómo hacer la desestructuración en pasos separados:
// Alternativamente, podemos desestructurar el objeto en dos pasos:
// const { nombreClave, anios, latlng } = getContext(persona);
// const { lat, lng } = latlng; // Extraemos las coordenadas en un paso adicional

// Comentarios adicionales sobre el uso en React:
// Este tipo de desestructuración es sumamente común en React para manejar el estado y las propiedades de los componentes.
// También permite un código más limpio y fácil de leer.

// Resumen:
// La desestructuración simplifica el acceso a propiedades específicas de un objeto y permite renombrar variables o asignar valores por defecto.
// También facilita el manejo de objetos anidados y es una práctica recomendada en proyectos modernos de JavaScript, especialmente en React.
