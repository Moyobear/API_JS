const {
  Sucursal,
  Propietario,
  AgenteInmobiliario,
  Intermediacion,
  Inmueble,
} = require("../db");

const buscarSucursales = async () => {
  const request = await Sucursal.findAll();
  const filtered = request.filter((item) => item.borrado === false);
  return filtered;
};

const buscarSucursalesAdministracion = async () => {
  const request = await Sucursal.findAll({
    include: [
      {
        model: Propietario,
      },
      {
        model: AgenteInmobiliario,
      },
      {
        model: Intermediacion,
      },
      {
        model: Inmueble,
      },
    ],
  });
  const filtered = request.filter((item) => item.borrado === false);
  return filtered;
};

const buscarSucursalId = async (idSucursal) => {
  const request = await Sucursal.findByPk(idSucursal, {
    include: [
      {
        model: Propietario,
      },
      {
        model: AgenteInmobiliario,
      },
      {
        model: Intermediacion,
      },
      {
        model: Inmueble,
      },
    ],
  });
  return [request];
};

const crearSucursal = async (
  sucursal,
  direccion,
  telefono,
  imagen,
  acronimo
) => {
  const request = await Sucursal.create({
    sucursal,
    direccion,
    telefono,
    imagen,
    acronimo,
  });
  return `La sucursal ${sucursal} se ha creado exitosamente`;
};

const editarSucursal = async (idSucursal, telefono, imagen) => {
  const request = await Sucursal.findByPk(idSucursal);
  await request.set({
    telefono,
    imagen,
  });
  await request.save();
  return [request];
};

const reasignarSucursal = async (idSucursal, idSucursalNueva) => {};

const borrarSucursal = async (idSucursal) => {
  const request = await Sucursal.findByPk(idSucursal);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "La Sucursal fue borrada exitosamente";
};

const eliminarSucursal = async (idSucursal) => {
  const request = await Sucursal.findByPk(idSucursal);
  request.destroy();
  return "La Sucursal fue eliminada exitosamente";
};

module.exports = {
  buscarSucursales,
  buscarSucursalesAdministracion,
  buscarSucursalId,
  crearSucursal,
  editarSucursal,
  reasignarSucursal,
  borrarSucursal,
  eliminarSucursal,
};
