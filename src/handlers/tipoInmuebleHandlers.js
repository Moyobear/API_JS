const {
  buscarTipo,
  buscarTipoId,
  crearTipo,
  eliminarTipo,
  borrarTipo,
} = require("../controllers/tipoInmuebleControllers.js");

const buscarTipoHandler = async (req, res) => {
  try {
    const request = await buscarTipo();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarTipoIdHandler = async (req, res) => {
  try {
    const { idTipoInmueble } = req.params;
    const request = await buscarTipoId(idTipoInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const crearTipoHandler = async (req, res) => {
  try {
    const { tipo_inmueble, acronimo } = req.body;
    const request = await crearTipo(tipo_inmueble, acronimo);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const borrarTipoHandler = async (req, res) => {
  try {
    const { idTipoInmueble } = req.params;
    const request = await borrarTipo(idTipoInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const eliminarTipoHandler = async (req, res) => {
  try {
    const { idTipoInmueble } = req.params;
    const request = await eliminarTipo(idTipoInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  buscarTipoHandler,
  buscarTipoIdHandler,
  crearTipoHandler,
  eliminarTipoHandler,
  borrarTipoHandler,
};
