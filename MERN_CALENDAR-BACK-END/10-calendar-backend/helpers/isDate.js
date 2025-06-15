// Funcion para validar el campo de las fechas

// para validar fechas necesito moment e instalarlo
const moment = require("moment");

const isDate = (value, rest) => {
  //   console.log(value);
  //   console.log(rest);
  // verificar si el value existe
  if (!value) {
    // si no existe el value
    return false;
    // si regresa false quiere decir que ese campo no es correcto
  }

  // de lo contrario si el campo existe
  // momento me va a indicar si es una fecha correcta o no
  const fecha = moment(value);
  if (fecha.isValid()) {
    // funcion propia de moment isValid
    return true;
  } else {
    return false;
    // la fecha no fue correcta
  }
};

module.exports = {
  isDate,
};
