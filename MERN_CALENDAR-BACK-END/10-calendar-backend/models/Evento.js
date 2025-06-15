// importación de mongoose y lo desestructuro para ocupar un esquema y un modelo
const { Schema, model } = require("mongoose");

/*
Primero definamos cómo quiero que luzca ese esquema, que es como la información que yo voy a grabar en la base de datos.
*/
const EventoSchema = Schema({
  // eso es un objeto con la configuración que yo necesito
  // Cualquier objeto de mis eventos va a tener o debe tener la siguiente estructura de datos:

  title: {
    type: String,
    required: true,
  },

  notes: {
    type: String,
  },

  start: {
    type: Date,
    required: true,
  },

  end: {
    type: Date,
    required: true,
  },

  // El usuario que creo este registro, Esto después me va a servir para hacer validaciones, pero lo importante aquí es saber quién grabó este registro.
  user: {
    //Esto le va a decir a Mongoose que va a ser una referencia
    type: Schema.Types.ObjectId,
    // y esa referencia la especificamos de la siguiente manera
    // y va a ser la referencia al usuario en este caso, que es el nombre del otro Schema
    ref: "Usuario",
    required: true,
  },
});

EventoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Evento", EventoSchema);
