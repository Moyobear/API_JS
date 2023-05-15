const { Contrato, Inmueble } = require("../db");

const buscarContratosInmueble = async (idInmueble) => {
  const request = await Contrato.findAll({
    where: {
      inmuebleId: idInmueble,
    },
  });
  return request;
};

const crearContrato = async (idInmueble, duracion, fecha, precio_venta) => {
  const contrato = await Contrato.create({
    duracion,
    fecha,
    precio_venta,
  });

  const inmueble = await Inmueble.findByPk(idInmueble);
  await inmueble.addContrato(contrato);
  await inmueble.save();

  return `El nuevo contrato se ha establecido en fecha ${fecha}, con una duración de ${duracion} días y un precio de venta de ${precio_venta}`;
};

const borrarContrato = async (idContrato) => {
  const request = await Contrato.findByPk(idContrato);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "El contrato ha sido borrado exitosamente";
};

module.exports = {
  buscarContratosInmueble,
  crearContrato,
  borrarContrato,
};
