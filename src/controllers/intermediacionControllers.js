const { Intermediacion, Sucursal, Inmueble } = require("../db.js");

const buscarIntermediacion = async () => {
  const request = await Intermediacion.findAll();
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarIntermediacionAdmin = async () => {
  const request = await Intermediacion.findAll({
    include: [
      {
        model: Sucursal,
      },
      {
        model: Inmueble,
      },
    ],
  });
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarIntermediacionId = async (idIntermediacion) => {
  const request = await Intermediacion.findByPk(idIntermediacion, {
    include: [
      {
        model: Sucursal,
      },
      {
        model: Inmueble,
      },
    ],
  });
  return request;
};

const crearIntermediacion = async (
  idSucursal,
  idInmueble,
  comision,
  autorizacion,
  exclusividad,
  agencia_inmobiliaria,
  agente_inmobiliario
) => {
  const request = await Intermediacion.create({
    comision,
    autorizacion,
    exclusividad,
    agencia_inmobiliaria,
    agente_inmobiliario,
  });

  const sucursal = await Sucursal.findByPk(idSucursal);
  const inmueble = await Inmueble.findByPk(idInmueble);

  await sucursal.addIntermediacion(request);
  await sucursal.save();

  await request.setInmueble(inmueble);
  await request.save();

  return "La Intermediacion se ha creado exitosamente";
};

const borrarIntermediacion = async (idIntermediacion) => {
  const request = await Intermediacion.findByPk(idIntermediacion);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "La Intermediación fue borrada exitosamente";
};

const eliminarIntermediacion = async (idIntermediacion) => {
  const request = await Intermediacion.findByPk(idIntermediacion);
  await request.destroy();
  return "La Intermediación fue eliminada exitosamente";
};

module.exports = {
  buscarIntermediacion,
  buscarIntermediacionAdmin,
  buscarIntermediacionId,
  crearIntermediacion,
  borrarIntermediacion,
  eliminarIntermediacion,
};
