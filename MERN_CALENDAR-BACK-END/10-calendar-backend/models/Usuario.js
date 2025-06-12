// importación de mongoose y lo desestructuro para ocupar un esquema y un modelo
const { Schema, model } = require("mongoose");

/*
Primero definamos cómo quiero que luzca ese esquema, que es como la información que yo voy a grabar en la base de datos.
*/
const UsuarioSchema = Schema({
  // eso es un objeto con la configuración que yo necesito
  // Cualquier objeto de mis usuarios va a tener o debe detener el name
  // Voy a definir la configuración del mismo, el type, el type va a ser string , y luego voy a ponerle que va a ser requerido
  // Es decir, la información que se graba son string y es obligatorio

  name: {
    type: String,
    require: true,
  },
  /*
  Ahora hagamos el otro campo que sería el e-mail orillero. Llaves El tip también es un string. También va a ser requerido los puntos centro
   y adicionalmente quiero que sea único y puedo ponerle aquí y lo escribimos bien. Así, esto va a ser en Tru. De esta manera le estoy diciendo
    de que no pueden haber correos electrónicos duplicados
  */
  email: {
    type: String,
    require: true,
    unique: true,
  },

  /*
  Por último, también vamos a tener el password, password dos puntos, abrir las llaves para tener su type de tipo string ,y require en true.
  */
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
