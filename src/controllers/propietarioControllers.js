const {
  Propietario,
  Sucursal,
  Inmueble,
  AgenteInmobiliario,
} = require("../db.js");

const buscarPropietarios = async () => {
  const request = await Propietario.findAll();
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarPropietariosAdministracion = async () => {
  const request = await Propietario.findAll({
    include: [
      {
        model: Sucursal,
      },
      {
        model: Inmueble,
      },
      {
        model: AgenteInmobiliario,
      },
    ],
  });
  const filtered = request.filter((item) => item.borrado !== true);
  return filtered;
};

const buscarPropietarioCedula = async (ci) => {
  const request = await Propietario.findOne({
    where: {
      ci: ci,
    },
    include: [
      {
        model: Sucursal,
      },
      {
        model: Inmueble,
      },
      {
        model: AgenteInmobiliario,
      },
    ],
  });
  return request;
};

const buscarPropietariosId = async (idPropietario) => {
  const request = await Propietario.findByPk(idPropietario, {
    include: [
      {
        model: Sucursal,
      },
      {
        model: Inmueble,
      },
      {
        model: AgenteInmobiliario,
      },
    ],
  });
  return request;
};

const nuevoPropietario = async (
  idSucursal,
  idAgente,
  nombre_apellido,
  ci,
  estado_civil,
  telf_ofic,
  telf_hab,
  telf_cel,
  email,
  nacionalidad
) => {
  const propietario = await Propietario.create({
    nombre_apellido,
    ci,
    estado_civil,
    telf_ofic,
    telf_hab,
    telf_cel,
    email,
    nacionalidad,
  });
  const sucursal = await Sucursal.findByPk(idSucursal);
  const agente = await AgenteInmobiliario.findByPk(idAgente);

  await sucursal.addPropietario(propietario);
  await sucursal.save();

  await agente.addPropietario(propietario);
  await agente.save();

  return "El registro del cliente Propietario se creó correctamente";
};

const reasignarPropietario = async (
  idSucursal,
  idAgente,
  idInmueble,
  nombre_apellido,
  ci,
  estado_civil,
  telf_ofic,
  telf_hab,
  telf_cel,
  email,
  nacionalidad
) => {
  const propietario = await Propietario.create({
    nombre_apellido,
    ci,
    estado_civil,
    telf_ofic,
    telf_hab,
    telf_cel,
    email,
    nacionalidad,
  });

  const sucursal = await Sucursal.findByPk(idSucursal);
  const agente = await AgenteInmobiliario.findByPk(idAgente);
  const inmueble = await Inmueble.findByPk(idInmueble);

  await sucursal.addPropietario(propietario);
  await sucursal.save();

  await agente.addPropietario(propietario);
  await agente.save();

  await propietario.addInmueble(inmueble);
  await propietario.save();

  return "El registro del nuevo cliente Propietario se creó correctamente y se realizó la reasignación";
};

const editarPropietario = async (idPropietario, telf_cel, email) => {
  const request = await Propietario.findByPk(idPropietario);
  await request.set({
    telf_cel,
    email,
  });
  await request.save();
  return "El registro se ha actualizacio correctamente!";
};

const borrarPropietario = async (idPropietario) => {
  const request = await Propietario.findByPk(idPropietario);
  await request.set({
    borrado: true,
  });
  await request.save();
  return "El Propietario fue borrado exitosamente";
};

const eliminarPropietario = async (idPropietario) => {
  const request = await Propietario.findByPk(idPropietario);
  await request.destroy();

  return "El Propietario fue eliminado exitosamente";
};

module.exports = {
  buscarPropietarios,
  buscarPropietariosAdministracion,
  buscarPropietarioCedula,
  buscarPropietariosId,
  nuevoPropietario,
  reasignarPropietario,
  editarPropietario,
  borrarPropietario,
  eliminarPropietario,
};
