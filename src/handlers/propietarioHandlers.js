const {
  buscarPropietarios,
  buscarPropietariosAdministracion,
  buscarPropietarioCedula,
  buscarPropietariosId,
  nuevoPropietario,
  reasignarPropietario,
  editarPropietario,
  borrarPropietario,
  eliminarPropietario,
} = require("../controllers/propietarioControllers");

const buscarPropietariosHandler = async (req, res) => {
  try {
    const request = await buscarPropietarios();
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const buscarPropietariosAdministracionHandler = async (req, res) => {
  try {
    const request = await buscarPropietariosAdministracion();
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const buscarPropietarioCedulaHandler = async (req, res) => {
  try {
    const { ci } = req.body;
    const request = await buscarPropietarioCedula(ci);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const buscarPropietarioIdHandler = async (req, res) => {
  try {
    const { idPropietario } = req.params;
    const request = await buscarPropietariosId(idPropietario);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const nuevoPropietarioHandler = async (req, res) => {
  try {
    const {
      idSucursal,
      idAgente,
      nombre_apellido,
      ci,
      estado_civil,
      telf_ofic,
      telf_hab,
      telf_cel,
      email,
      nacionalidad,
    } = req.body;
    const request = await nuevoPropietario(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const reasignarPropietarioHandler = async (req, res) => {
  try {
    const {
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
      nacionalidad,
    } = req.body;
    const request = await reasignarPropietario(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const editarPropietarioHandler = async (req, res) => {
  try {
    const { idPropietario, telf_cel, email } = req.body;
    const request = await editarPropietario(idPropietario, telf_cel, email);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const borrarPropietarioHandler = async (req, res) => {
  try {
    const { idPropietario } = req.params;
    const request = await borrarPropietario(idPropietario);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const eliminarPropietarioHandler = async (req, res) => {
  try {
    const { idPropietario } = req.params;
    const request = await eliminarPropietario(idPropietario);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

module.exports = {
  buscarPropietariosHandler,
  buscarPropietariosAdministracionHandler,
  buscarPropietarioCedulaHandler,
  buscarPropietarioIdHandler,
  nuevoPropietarioHandler,
  reasignarPropietarioHandler,
  editarPropietarioHandler,
  borrarPropietarioHandler,
  eliminarPropietarioHandler,
};
