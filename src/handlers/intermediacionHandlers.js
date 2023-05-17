const {
  buscarIntermediacion,
  buscarIntermediacionAdmin,
  buscarIntermediacionId,
  crearIntermediacion,
  borrarIntermediacion,
  eliminarIntermediacion,
} = require("../controllers/intermediacionControllers");

const buscarIntermediacionHandler = async (req, res) => {
  try {
    const request = await buscarIntermediacion();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarIntermediacionAdminHandler = async (req, res) => {
  try {
    const request = await buscarIntermediacionAdmin();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarIntermediacionIdHandler = async (req, res) => {
  try {
    const { idIntermediacion } = req.params;
    const request = await buscarIntermediacionId(idIntermediacion);
    return res.status(200).json(request);
  } catch (error) {
    return res.satus(404).json({ message: error.message });
  }
};

const crearIntermediacionHandler = async (req, res) => {
  try {
    const {
      idSucursal,
      idInmueble,
      comision,
      autorizacion,
      exclusividad,
      agencia_inmobiliaria,
      agente_inmobiliario,
    } = req.body;
    const request = await crearIntermediacion(
      idSucursal,
      idInmueble,
      comision,
      autorizacion,
      exclusividad,
      agencia_inmobiliaria,
      agente_inmobiliario
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const borrarIntermediacionHandler = async (req, res) => {
  try {
    const { idIntermediacion } = req.params;
    const request = await borrarIntermediacion(idIntermediacion);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const eliminarIntermediacionHandler = async (req, res) => {
  try {
    const { idIntermediacion } = req.params;
    const request = await eliminarIntermediacion(idIntermediacion);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  buscarIntermediacionHandler,
  buscarIntermediacionAdminHandler,
  buscarIntermediacionIdHandler,
  crearIntermediacionHandler,
  borrarIntermediacionHandler,
  eliminarIntermediacionHandler,
};
