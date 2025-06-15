// Un Middleware es casi en un 99 por ciento igual a cualquier controlador de los que tenemos acá, es casi, casi igual.
// Tiene la respuesta en la response tiene todo esto, pero adicionalmente hay una pequeña función adicional

// Nuevamente me gustaría tener el tipado con la respuesta, entonces voy a importarlo.
// pero como lo que yo necesito es poner el tipado a la response, puedo extraer de ahí de ese paquete la response.
const { response } = require("express");

// para obtener lo errores y desestructuramos algo que viene de require express-validator, y lo que necesitamos es validationResult o resultado de la validacion
const { validationResult } = require("express-validator");

// Esto va a ser igual, voy a recibir la request, la response y un argumento más que es el NEX. Esto es un callback
const validarCampos = (req, res = response, next) => {
  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  // Si no hay nigun error entonces llamamos el next()
  next();
};

module.exports = {
  validarCampos,
};
