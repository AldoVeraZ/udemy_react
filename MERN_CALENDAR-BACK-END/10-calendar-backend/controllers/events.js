const { response } = require("express");

// necesito la referencia a mi modelo para poder insertar en la BD
const Evento = require("../models/Evento");

const getEventos = async (req, res = response) => {
  // Retornar la lista de todos los eventos
  const eventos = await Evento.find()
    // para rellenar los datos del usuario puedo usar el emtodo populate() y especifico en este caso que solo quiero el name
    .populate("user", "name");

  res.status(201).json({
    ok: true,
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  // verificar que tenga el evento
  // console.log(req.body);
  /*
  necesito validar que la información obligatoria venga aquí antes de intentar hacer grabaciones
  en base de datos y no desperdiciar recursos.
  */
  const evento = new Evento(req.body);
  // ya tengo una nueva instancia de mi modelo lista para trabajaar

  try {
    // Entonces sería evento. Y cuál es la propiedad que necesito especificar para ponerle el id del usuario?
    // Si miramos el modelo nuevamente, aquí ustedes van a ver que viene el user y el user tiene que ser el id.
    // Entonces viene el evento.user va a ser igual a la request req.uid
    evento.user = req.uid;
    // Para grabarlo en la Bd
    const eventoGuardado = await evento.save();
    // si todo sale bien
    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  // tomar valor del id que viene por el url
  // Yo sé que va a ser un id del evento y esto viene de la request params.id
  const eventoId = req.params.id;
  // uid del usuario
  const uid = req.uid;

  // try and cach para errores de la BD
  try {
    // verificar si el id del evento existe en la BD esto se hace con el modelo de mongoose, comparar el evento que se recibe con el de la BD
    // para ver si existe
    const evento = await Evento.findById(eventoId);

    // validar el evento id que se recibe
    // si el evento no existe
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }

    /*
    verificar si la persona que creó este evento es exactamente la misma persona que lo quiere actualizar y si es así, entonces lo dejo pasar.
    Pero si fueran diferentes, entonces no quiero que la persona pueda grabarlo. No está autorizado para hacer eso.
    
    */
    if (evento.user.toString() !== uid) {
      // si el usuario es diferente al uid significa que es una persona que quiere editar el evento de otra persona
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegio de editar este evento",
      });
    }

    // de lo ontrario es la misma persona que creo el evento por lo cual puede editarlo
    const nuevoEvento = {
      ...req.body,
      user: uid,
    };
    // actualizar la data
    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    );

    res.json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const eliminarEvento = async (req, res = response) => {
  // capturo el id del evento que viene en le request
  // Este es el id que viene por el URL
  const eventoID = req.params.id;

  // id del usuario que quiere borrar
  const uid = req.uid;

  // try and cash para capturar errores de la BD
  try {
    // verificar si el id del evento existe en la BD esto se hace con el modelo de mongoose, comparar el evento que se recibe con el de la BD
    // para ver si existe (Verificar si el evento existe)
    const evento = await Evento.findById(eventoID);

    // validar el evento id que se recibe
    // si el evento no existe
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }
    /*
    verificar si la persona que creó este evento es exactamente la misma persona que lo quiere actualizar y si es así, entonces lo dejo pasar.
    Pero si fueran diferentes, entonces no quiero que la persona pueda grabarlo. No está autorizado para hacer eso.
    */
    if (evento.user.toString() !== uid) {
      // si el id del usuario que creo el registro de evento es diferente al id del usuario que quiere eliminar en este caso, significa que una persona
      // quiere eliminar el evento de otra persona y eso no se permite
      return res.status(401).json({
        ok: false,
        msg: "No tiene los privilegios de eliminar este evento",
      });
    }
    // de lo ontrario es la misma persona que creo el evento por lo cual puede eliminarlo y envio el id con eventoID
    await Evento.findByIdAndDelete(eventoID);
    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
