/*
 Rutas de Usuarios / Auth
 host + api/auth
*/

// importar express
// desestructuramos express para objetener directamente el Router
const { Router } = require("express");
// se necesita extraer del express validator el check
// el check es el middleware que se va a encargar de validar un campo en particular, lo va hacer uno a la vez
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");

// importamos las funciones del controlador
//  Se extrae la funcion de controllers
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

// importar validar token
const { validarJWT } = require("../middlewares/valida-jwt");

// configurar un router
// const router = express.Router;
const router = Router(); // ejecutamos su funcion

router.post(
  "/new",
  [
    // middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  [
    // Middlewares
    check("email", "El email es oligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

//  renew del token, Cuando hablo del token, nosotros vamos a generar un Jayson Web Token que nos va a permitir mantener autenticado a nuestros usuarios de forma pasiva.
// Es decir, el servidor no va a tener una sesión del usuario.
router.get("/renew", validarJWT, revalidarToken);

// para exportr en node es asi:
module.exports = router;

// app.get("/", (req, res) => {
//   //   console.log("Se requiere el /");
//   res.json({
//     ok: true,
//   });
// });
