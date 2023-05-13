const {
  buscarSucursales,
  buscarSucursalesAdministracion,
  buscarSucursalId,
  crearSucursal,
  editarSucursal,
  reasignarSucursal,
  borrarSucursal,
  eliminarSucursal
} = require("../controllers/sucursalControllers.js");

const buscarSucursalesHandler = async (req, res) => {
  try {
    const request = await buscarSucursales();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const buscarSucursalesAdministracionHandler = async (req, res) => {
  try {
    const request = await buscarSucursalesAdministracion();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const buscarSucursalIdHandler = async (req, res) => {
  try {
    const { idSucursal } = req.params;
    const request = await buscarSucursalId(idSucursal);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const crearSucursalHandler = async (req, res) => {
  try {
    const { sucursal, direccion, telefono, imagen, acronimo } = req.body;
    const request = await crearSucursal(
      sucursal,
      direccion,
      telefono,
      imagen,
      acronimo
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const editarSucursalHandler = async (req, res) => {
  try {
    const { idSucursal, telefono, imagen } = req.body;
    const request = await editarSucursal(idSucursal, telefono, imagen);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const reasignarSucursalHandler = async (req, res) => {
  try {
    const { idSucursal, idSucursalNueva } = req.body;
    const request = await reasignarSucursal(idSucursal, idSucursalNueva);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const borrarSucursalHandler = async (req, res) => {
  try {
    const { idSucursal } = req.params;
    const request = await borrarSucursal(idSucursal);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const eliminarSucursalHandler = async (req, res) => {
  try {
    const { idSucursal } = req.params;
    const request = await eliminarSucursal(idSucursal);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  buscarSucursalesHandler,
  buscarSucursalIdHandler,
  crearSucursalHandler,
  editarSucursalHandler,
  reasignarSucursalHandler,
  borrarSucursalHandler,
  eliminarSucursalHandler,
  buscarSucursalesAdministracionHandler,
};
