// ACA VA TODO LO QUE ES EL MANTENEDOR O CRUD , CREAD , READ, UPDATE Y DELETE
/*
Especificar las rutas
   Event Routes 
   /api/events
*/
// Definir la importacion del Router y desestructurarla
const { Router } = require("express");

// Importar check validator para validar campos
const { check } = require("express-validator");
// Importar middleware para mostrar errores
const { validarCampos } = require("../middlewares/validar-campos");

// Importar de validador personalizado de fechas
const { isDate } = require("../helpers/isDate");

// Importar JWT
const { validarJWT } = require("../middlewares/valida-jwt");

const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

// ejecutar la funcion del router y asignarle una variable router
const router = Router();

// Para validar los endpoint de abajo con el token se puede aplicar el middleware de la siguiente manera:
// Al hacer esto le digo que cualquier petición que se encuentre justo abajo de esto va a tener que tener su token.
// Todas las peticiones deben de pasar por validar token.
router.use(validarJWT);

// Todas tienen que pasar por la validación del JWT
// Petición de obtener eventos
// aca se llaman los controladores
// READ

router.get("/", getEventos);
// Crear un nuevo evento O CREATE

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    // con el check o express validator se puede n crear validaciones personalizadas con custom(), el Custom está esperando que yo le mande aquí
    // una función o un callback que se va a ejecutar para validar este campo
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),

    validarCampos,
  ],
  crearEvento
);

// Actualizar evento O UPDATE
// router.put("/:id", actualizarEvento);
// Actualizar Evento
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

// Borrar evento O DELETE
router.delete("/:id", eliminarEvento);

module.exports = router;
