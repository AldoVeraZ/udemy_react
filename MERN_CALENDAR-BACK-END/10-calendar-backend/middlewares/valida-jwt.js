const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req, res = response, next) => {
  // Saber como voy a recibir el JWT , Lo voy a pedir en el x-token en los headers
  // Para leer los headers ya express cuenta con funciones para hacerlo
  const token = req.header("x-token");
  //   console.log(token);

  // validar el token recibido
  // Lo importante acá es que la manera como ustedes lean el token va a tener que ser igual como ustedes lo generaron.
  // validacion, preguntar si el token no viene
  if (!token) {
    // si tengo null o undefine en el token,
    // significa que el token no esta autenticado
    // voy a sacar el usuario mediante un return
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  // Ahora puede ser que tengamos un token o algo ahí, hay que revisar ese toquen Ni lo voy a hacer mediante un try y un catch
  // Ahora este catch básicamente solo se va a disparar si no podemos o si la validación del token falla
  try {
    // verificacion del token
    // extraer el payload, porque me interesa saber el uid del usuario
    // desestructuramos payload para tener uid y name
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    // console.log(payload);
    // puedo modificarla la request Y la request va a ser pasada por referencia a cualquier función que siga después llamada con este.
    req.uid = uid;
    req.name = name;
  } catch (error) {
    // si la validacion del token falla
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
