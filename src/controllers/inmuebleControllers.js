const {
  Inmueble,
  Sucursal,
  Propietario,
  AgenteInmobiliario,
  TipoInmueble,
  Contrato,
  CodigoInmueble,
  Sector,
  Estado,
  Ciudad,
  Ambientes,
  Comodidades,
  ImagenesInmueble,
  Intermediacion,
} = require("../db.js");

const buscarInmueblesCliente = async () => {
  const request = await Inmueble.findAll({
    include: [
      {
        model: Sucursal,
      },
      {
        model: AgenteInmobiliario,
      },
      {
        model: Contrato,
      },
      {
        model: TipoInmueble,
      },
      {
        model: CodigoInmueble,
      },
      {
        model: Comodidades,
      },
      {
        model: Ambientes,
      },
      {
        model: Estado,
      },
      {
        model: Ciudad,
      },
      {
        model: Sector,
      },
      {
        model: ImagenesInmueble,
      },
    ],
  });

  const filtered = request.filter(
    (item) => !(item.borrado === true && visible !== true)
  );
  return filtered;
};

const buscarInmueblesAdministracion = async () => {
  const request = await Inmueble.findAll({
    include: { all: true, nested: true },
  });
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarInmueblesSucursal = async (idSucursal) => {
  const request = await Inmueble.findAll({
    where: {
      sucursalId: idSucursal,
    },
  });
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarAgenteInmobiliarioInmuebles = async (idAgente) => {
  const request = await Inmueble.findAll({
    where: {
      agenteInmobiliarioId: idAgente,
    },
  });
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarInmuebleId = async (idInmueble) => {
  const request = await Inmueble.findByPk(idInmueble, {
    include: { all: true, nested: true },
  });
  return request;
};

const buscarInmueblesCodigo = async (codigo_inmueble) => {
  const request = await CodigoInmueble.findOne({
    where: {
      codigo_inmueble: codigo_inmueble,
    },
    include: { all: true, nested: true },
  });
  return request;
};

const crearInmueble = async (
  ced_catastral,
  fecha,
  direccion,
  habs,
  hab_servicio,
  banios,
  banio_servicio,
  puesto_estacionamiento,
  mts_terreno,
  mts_construccion,
  antiguedad,
  observ_inmueble,
  otras_caracteristicas,
  operacion,
  duracion,
  precio_venta,
  codigo_inmueble,
  idTipoInmueble,
  idScursal,
  idAgente,
  idPropietario,
  idEstado,
  idCiudad
) => {
  const inmueble = await Inmueble.create({
    ced_catastral,
    fecha,
    direccion,
    habs,
    hab_servicio,
    banios,
    banio_servicio,
    puesto_estacionamiento,
    mts_terreno,
    mts_construccion,
    antiguedad,
    observ_inmueble,
    otras_caracteristicas,
    operacion,
  });
  const contrato = await Contrato.create({
    fecha,
    duracion,
    precio_venta,
  });
  const codigoInmueble = await CodigoInmueble.create({
    codigo_inmueble: codigo_inmueble,
  });

  const propietario = await Propietario.findByPk(idPropietario);
  const tipoInmueble = await TipoInmueble.findByPk(idTipoInmueble);
  const sucursal = await Sucursal.findByPk(idScursal);
  const agente = await AgenteInmobiliario.findByPk(idAgente);
  const estado = await Estado.findByPk(idEstado);
  const ciudad = await Ciudad.findByPk(idCiudad);

  await propietario.addCodigoInmueble(codigoInmueble);
  await propietario.save();

  await inmueble.setCodigoInmueble(codigoInmueble);
  await inmueble.save();

  await inmueble.addContrato(contrato);
  await inmueble.save();

  await sucursal.addInmueble(inmueble);
  await sucursal.save();

  await agente.addInmueble(inmueble);
  await agente.save();

  await propietario.addInmueble(inmueble);
  await propietario.save();

  await tipoInmueble.addInmueble(inmueble);
  await tipoInmueble.save();

  await estado.addInmueble(inmueble);
  await estado.save();

  await ciudad.addInmueble(inmueble);
  await ciudad.save();

  return "El registro del Inmueble se creó correctamente";
};

const editarInmueble = async (
  idInmueble,
  observ_inmueble,
  otras_caracteristicas
) => {
  const request = await Inmueble.findByPk(idInmueble);
  await request.set({
    observ_inmueble: observ_inmueble,
    otras_caracteristicas: otras_caracteristicas,
  });
  await request.save();

  return "El registro del Inmueble se actualizó correctamente";
};

const mostrarInmueble = async (idInmueble, visible) => {
  const request = await Inmueble.findByPk(idInmueble);
  await request.set({
    visible: visible,
  });
  await request.save();

  return "El registro del Inmueble se actualizó correctamente";
};

const destacarInmueble = async (idInmueble, destacado) => {
  const request = await Inmueble.findByPk(idInmueble);
  await request.set({
    destacado: destacado,
  });
  await request.save();

  return "El registro del Inmueble se actualizó correctamente";
};

const cambiarOperacionInmueble = async (idInmueble, operacion) => {
  const request = await Inmueble.findByPk(idInmueble);
  await request.set({
    operacion: operacion,
  });
  await request.save();

  return "La operación del Inmueble se modificó correctamente";
};

const borrarInmueble = async (idInmueble) => {
  const request = await Inmueble.findByPk(idInmueble);
  await request.set({
    borrado: true,
  });
  await request.save();

  return "El Inmueble fue borrado exitosamente";
};

const eliminarInmueble = async (idInmueble) => {
  const request = await Inmueble.findByPk(idInmueble, {
    include: [
      {
        model: Contrato,
      },
      {
        model: CodigoInmueble,
      },
      {
        model: ImagenesInmueble,
      },
      {
        model: Ambientes,
      },
      {
        model: Comodidades,
      },
      {
        model: Intermediacion,
      },
    ],
  });
  // await request.destroy();

  return request;
};

module.exports = {
  buscarInmueblesCliente,
  buscarInmueblesAdministracion,
  buscarInmueblesSucursal,
  buscarAgenteInmobiliarioInmuebles,
  buscarInmuebleId,
  buscarInmueblesCodigo,
  crearInmueble,
  editarInmueble,
  mostrarInmueble,
  destacarInmueble,
  cambiarOperacionInmueble,
  borrarInmueble,
  eliminarInmueble,
};
