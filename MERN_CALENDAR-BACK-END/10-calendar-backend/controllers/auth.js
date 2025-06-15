/*

Controladores de mis rutas
 son las funciones definidas en el auth.js que esta dentro de routes

*/

/* 
hay una manera de que recuperemos todo el Inteligence.
 Eso es opcional, pero se lo recomendaría para que así tengan el tipado.
Voy a colocar aquí una constante llamada express y voy a volver a requerir express.
Recuerden, esto no es que vuelva a ser la carga de Express, va a usar la librería ya cargada y ahora
voy a definirle a la response, que realmente solo con lo que voy a trabajar lo voy a establecer el
 valor por defecto, que será igual a Express Punto Response.
 y desestructuramos de express la response para que no se vea tan largo ; express.response y se vera solo response
 */
const { response } = require("express");

// Importar libreria de hasheo de contraseña
const bcrypt = require("bcryptjs");

// Importar el modelo de usuarios
const Usuario = require("../models/Usuario");

// Imortar Json Web Token
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  // La parte del request o req es lo que la persona solicita
  // console.log(req.body);

  const { email, password } = req.body;

  try {
    // validar email
    let usuario = await Usuario.findOne({ email });
    // console.log(usuario);
    if (usuario) {
      // si el usuario existe significaría que voy a mandar un error al usuario o a la persona que está consumiendo mi servicio.
      return res.status(400).json({
        ok: false,
        msg: "Un usuario existe con ese correo",
      });
    }
    // de lo contrario
    // Si el usuario no existe, se procede a grabar en la base de datos
    // Crear una nueva instancia de mi usuario
    // constante usuario con la minúscula, porque esto ya va a ser la instancia, por decirlo así
    // Yo este nuevo usuario le puedo mandar el req.body que aquí tiene toda esta información { name, email, password }
    // En pocas palabras, lo que le mando es esta información { name, email, password } , lo que viene en req.body
    //  Ya Mongoose sabe qué estructura tiene, qué valores son los que me interesan y va a ignorar todo lo adicional que yo no le dije que iba a tener.
    usuario = new Usuario(req.body);

    // Antes de hacer la grabacion en la base de datos
    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // Si yo lo quiero grabar ahora en base de datos, sería:
    // Eso save() también trabaja con una promesa. O sea, esto es una promesa, lo regresa, por lo cual también puedo trabajar o convertir la funciona a async
    // arriba en la funcion de flecha se convierte a async ej: async (req, res = response)
    // y decir await o se espera hasta que esto se graba
    // CUANDO CREO EL USUARIO
    await usuario.save();

    // GENERAR JASON WEB TOKEN
    const token = await generarJWT(usuario.id, usuario.name);

    // Va a regresar el documento guardado? Si lo hace correctamente o nos va a decir un error,
    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

// LOGIN
const loginUsuario = async (req, res = response) => {
  // destructuracion de email y password para usarlos, que vienen de request body de ls peticiones
  const { email, password } = req.body;

  try {
    // confirmar si tenemos un usuario con ese email, porque si no existe ese email Para qué vamos a continuar
    const usuario = await Usuario.findOne({ email });
    // console.log(usuario);
    if (!usuario) {
      // si el usuario NO EXISTE significaría que voy a mandar un error al usuario o a la persona que está consumiendo mi servicio.
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese email",
      });
    }

    // de lo contrario si el usuario si existe:
    // Confirmar los passowrd, se compara el password de la peticion de postman o lo que se trae de login con el password que esta en la BD Mongo
    const validPassword = bcrypt.compareSync(password, usuario.password);
    // Esto va a regresar un true si es válido o false si no lo es.
    if (!validPassword) {
      // si las password no coinciden
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }
    // DE LO CONTRARIO SI TODO SALE CORRECTO Y LAS CONTRASEÑAS HACEN MACH, SOMOS USUARIOS AUTENTICADOS
    // ya puedo generar nuestro JASON WEB TOKEN DE ACCESO
    // Generar Json Web Token
    const token = await generarJWT(usuario.id, usuario.name);

    // digamos que ya generamos el token, ahora voy hacer una respuesta
    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

//*****REVALIDAR TOKEN*********\\
const revalidarToken = async (req, res = response) => {
  // const uid = req.uid;
  // const name = req.name;
  // mas elegante:
  const { uid, name } = req;

  // Generar un nuevo JWT Y RETORNARLO EN ESTA PETICIÓN
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    token,
  });
};

// exportamos un objeto para exportar varias funciones
module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
