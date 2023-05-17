const {
  buscarContratosInmueble,
  crearContrato,
  borrarContrato,
} = require("../controllers/contratoControllers.js");

const buscarContratosInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble } = req.params;
    const request = await buscarContratosInmueble(idInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const crearContratoHandler = async (req, res) => {
  try {
    const { idInmueble, duracion, fecha, precio_venta } = req.body;
    const request = await crearContrato(
      idInmueble,
      duracion,
      fecha,
      precio_venta
    );
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const borrarContratoHandler = async (req, res) => {
  try {
    const { idContrato } = req.params;
    const request = await borrarContrato(idContrato);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  buscarContratosInmuebleHandler,
  crearContratoHandler,
  borrarContratoHandler,
};
