const { TipoInmueble, Inmueble } = require("../db.js");

const buscarTipo = async () => {
  const request = await TipoInmueble.findAll();
  return request;
};

const buscarTipoId = async (idTipoInmueble) => {
  const request = await TipoInmueble.findByPk(idTipoInmueble, {
    include: [
      {
        model: Inmueble,
      },
    ],
  });
  return request;
};

const crearTipo = async (tipo_inmueble, acronimo) => {
  const request = await TipoInmueble.create({
    tipo_inmueble,
    acronimo,
  });
  return "Tipo de Inmueble crado exitosamente";
};

const borrarTipo = async (idTipoInmueble) => {
  const request = await TipoInmueble.findByPk(idTipoInmueble);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "Tipo de Inmueblel borrado exitosamente";
};

const eliminarTipo = async (idTipoInmueble) => {
  const request = await TipoInmueble.findByPk(idTipoInmueble);
  request.destroy();
  return "Tipo de Inmueblel eliminado exitosamente";
};

module.exports = {
  buscarTipo,
  buscarTipoId,
  crearTipo,
  eliminarTipo,
  borrarTipo,
};
