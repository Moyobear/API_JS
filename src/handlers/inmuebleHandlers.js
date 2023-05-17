const {
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
} = require("../controllers/inmuebleControllers.js");

const buscarInmueblesClienteHandler = async (req, res) => {
  try {
    const request = await buscarInmueblesCliente();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarInmueblesAdministracionHandler = async (req, res) => {
  try {
    const request = await buscarInmueblesAdministracion();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarInmueblesSucursalHandler = async (req, res) => {
  try {
    const { idSucursal } = req.body;
    const request = await buscarInmueblesSucursal(idSucursal);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarAgenteInmobiliarioInmueblesHandler = async (req, res) => {
  try {
    const { idAgente } = req.body;
    const request = await buscarAgenteInmobiliarioInmuebles(idAgente);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarInmuebleIdHandler = async (req, res) => {
  try {
    const { idInmueble } = req.params;
    const request = await buscarInmuebleId(idInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const buscarInmueblesCodigoHandler = async (req, res) => {
  try {
    const { codigo_inmueble } = req.body;
    const request = await buscarInmueblesCodigo(codigo_inmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const crearInmuebleHandler = async (req, res) => {
  try {
    const {
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
      idCiudad,
    } = req.body;
    const request = await crearInmueble(
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
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const editarInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble, observ_inmueble, otras_caracteristicas } = req.body;
    const request = await editarInmueble(
      idInmueble,
      observ_inmueble,
      otras_caracteristicas
    );
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const mostrarInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble, visible } = req.body;
    const request = await mostrarInmueble(idInmueble, visible);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const destacarInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble, destacado } = req.body;
    const request = await destacarInmueble(idInmueble, destacado);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const cambiarOperacionInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble, operacion } = req.body;
    const request = await cambiarOperacionInmueble(idInmueble, operacion);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const borrarInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble } = req.body;
    const request = await borrarInmueble(idInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const eliminarInmuebleHandler = async (req, res) => {
  try {
    const { idInmueble } = req.body;
    const request = await eliminarInmueble(idInmueble);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  buscarInmueblesClienteHandler,
  buscarInmueblesAdministracionHandler,
  buscarInmueblesSucursalHandler,
  buscarAgenteInmobiliarioInmueblesHandler,
  buscarInmuebleIdHandler,
  crearInmuebleHandler,
  editarInmuebleHandler,
  mostrarInmuebleHandler,
  destacarInmuebleHandler,
  cambiarOperacionInmuebleHandler,
  borrarInmuebleHandler,
  eliminarInmuebleHandler,
  buscarInmueblesCodigoHandler,
};
