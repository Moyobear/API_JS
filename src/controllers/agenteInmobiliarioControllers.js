const {
  AgenteInmobiliario,
  Inmueble,
  Propietario,
  Sucursal,
} = require("../db");
const { Op } = require("sequelize");

const buscarAgentePorNombre = async (nombre) => {
  const request = await AgenteInmobiliario.findOne({
    where: { nombre_apellido: { [Op.iLike]: `%${nombre}%` } },
    include: [
      {
        model: Inmueble,
      },
      {
        model: Propietario,
      },
      {
        model: Sucursal,
      },
    ],
  });
  if (request && request.borrado === false) {
    return [request];
  } else {
    return "No existe Agente con ese nombre";
  }
};

const buscarAgentesAdministracion = async () => {
  const request = await AgenteInmobiliario.findAll({
    include: [
      {
        model: Inmueble,
      },
      {
        model: Propietario,
      },
      {
        model: Sucursal,
      },
    ],
  });
  const filtered = request.filter((item) => item.borrado === false);
  return filtered;
};

const buscarTodosAgentes = async () => {
  const request = await AgenteInmobiliario.findAll();
  const filtered = request.filter((item) => item.borrado === false);
  return filtered;
};

const buscarAgenteId = async (idAgente) => {
  const request = await AgenteInmobiliario.findByPk(idAgente, {
    include: [
      {
        model: Inmueble,
      },
      {
        model: Propietario,
      },
      {
        model: Sucursal,
      },
    ],
  });
  if (request && request.borrado === false) {
    return request;
  } else {
    return "No existe Agente con ese id";
  }
};

const buscarNombresAgentes = async () => {
  const request = await AgenteInmobiliario.findAll();
  const nombres = request
    .filter((item) => item.borrado !== true)
    .map((item) => item.nombre_apellido);
  return nombres;
};

const crearAgente = async (
  nombre_apellido,
  ci,
  rol,
  telf_hab,
  telf_cel,
  email,
  contrasenia,
  imagen,
  nacionalidad,
  admin,
  idSucursal
) => {
  const requestAgente = await AgenteInmobiliario.create({
    nombre_apellido,
    ci,
    rol,
    telf_hab,
    telf_cel,
    email,
    contrasenia,
    imagen,
    nacionalidad,
    admin,
  });
  const requestSucursal = await Sucursal.findByPk(idSucursal);
  requestSucursal.addAgenteInmobiliario(requestAgente);
  await requestSucursal.save();

  return "El registro del Agente Inmobiliario se creó correctamente";
};

const actualizarAgente = async (idAgente, telf_hab, telf_cel, email) => {
  const request = await AgenteInmobiliario.findByPk(idAgente);
  await request.set({
    telf_hab: telf_hab,
    telf_cel: telf_cel,
    email: email,
  });
  await request.save();
  return "El registro se ha actualizacio correctamente!";
};

const contraseniaAgente = async (idAgente, contrasenia) => {
  const request = await AgenteInmobiliario.findByPk(idAgente);
  await request.set({
    contrasenia: contrasenia,
  });
  await request.save();

  return "La contraseña ha sido modificada exitosamente";
};

const reasignarAgente = async (idInmueble, idNuevoAgente) => {
  const requestNuevoAgente = await AgenteInmobiliario.findByPk(idNuevoAgente);
  const requestInmueble = await Inmueble.findByPk(idInmueble);
  const idPropietario = requestInmueble.propietarioId;
  const requestPropietario = await Propietario.findByPk(idPropietario);
  await requestNuevoAgente.setInmueble(requestInmueble);
  await requestNuevoAgente.save();

  await requestNuevoAgente.setPropietario(requestPropietario);
  await requestNuevoAgente.save();

  return "Se ha reasignado la operación correctamente";
};

const borrarAgente = async (idAgente) => {
  const request = await AgenteInmobiliario.findByPk(idAgente);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "El Agente fue borrado exitosamente";
};

const eliminarAgente = async (idAgente) => {
  const request = await AgenteInmobiliario.findByPk(idAgente);
  request.destroy();
  return "El Agente fue eliminado exitosamente";
};

module.exports = {
  eliminarAgente,
  borrarAgente,
  actualizarAgente,
  reasignarAgente,
  contraseniaAgente,
  crearAgente,
  buscarAgenteId,
  buscarAgentePorNombre,
  buscarNombresAgentes,
  buscarTodosAgentes,
  buscarAgentesAdministracion,
};
