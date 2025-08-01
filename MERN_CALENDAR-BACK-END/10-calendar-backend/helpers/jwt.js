const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
  // Regresamos una nueva promesa
  return new Promise((resolve, reject) => {
    const payload = { uid, name };

    // Generar token
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }

        // si se hace correctamente
        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
