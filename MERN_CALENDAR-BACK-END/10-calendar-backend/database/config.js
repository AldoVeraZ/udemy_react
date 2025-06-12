// Imortacion Mongoose
const mongoose = require("mongoose");

// Esta va a ser una función que necesito ejecutar en mi index
const dbConnection = async () => {
  // Y cómo voy a usar await , voy a poner aquí que es una función async

  /* 
  Voy a crearme un try y un cotch, porque esto pudiera ser que falle y si falla, entonces necesito mostrar un error y que no continúe, 
  porque si no tengo base de datos mi aplicación no va a funcionar. Entonces sacamos un solo error sólo para tenerlo ahí.
  */
  try {
    // Todo esto es una promesa o todo esto va a retornar una promesa por la cual puedo hacer aquí una await
    await mongoose.connect(process.env.DB_CNN);

    console.log("DB Online");
  } catch (error) {
    console.log(error);

    throw new Error("Error a la hora de inicializar BD");
  }
};

// Debo llamar la funcion en el index por lo cual tengo que exportarla
module.exports = {
  dbConnection,
};
