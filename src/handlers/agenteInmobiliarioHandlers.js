const {
  eliminarAgente,
  borrarAgente,
  actualizarAgente,
  reasignarAgente,
  contraseniaAgente,
  crearAgente,
  buscarAgenteId,
  buscarAgentePorNombre,
  buscarNombresAgentes,
  buscarTodosAgentes,
  buscarAgentesAdministracion,
} = require("../controllers/agenteInmobiliarioControllers");

const buscarAgentesHandler = async (req, res) => {
  try {
    const { nombre } = req.query;
    const request = nombre
      ? await buscarAgentePorNombre(nombre)
      : await buscarTodosAgentes();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const buscarNombresAgentesHandler = async (req, res) => {
  try {
    const request = await buscarNombresAgentes();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const buscarAgenteIdHandler = async (req, res) => {
  try {
    const { idAgente } = req.params;
    if (!idAgente) throw Error("El Id es necesario para buscar al Agente");
    const request = await buscarAgenteId(idAgente);
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const crearAgenteHandler = async (req, res) => {
  try {
    const {
      nombre_apellido,
      ci,
      rol,
      telf_hab,
      telf_cel,
      email,
      contrasenia,
      imagen,
      nacionalidad,
      admin,
      idSucursal,
    } = req.body;

    const request = await crearAgente(
      nombre_apellido,
      ci,
      rol,
      telf_hab,
      telf_cel,
      email,
      contrasenia,
      imagen,
      nacionalidad,
      admin,
      idSucursal
    );
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const actualizarAgenteHandler = async (req, res) => {
  try {
    const { idAgente, telf_hab, telf_cel, email } = req.body;
    const request = await actualizarAgente(idAgente, telf_hab, telf_cel, email);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const contraseniaAgenteHandler = async (req, res) => {
  try {
    const { idAgente, contrasenia } = req.body;
    const request = await contraseniaAgente(idAgente, contrasenia);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const reasignarAgenteHandler = async (req, res) => {
  try {
    const { idInmueble, idNuevoAgente } = req.body;
    const request = await reasignarAgente(idInmueble, idNuevoAgente);
    return res.status(201).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const borrarAgenteHandler = async (req, res) => {
  try {
    const { idAgente } = req.params;
    const request = await borrarAgente(idAgente);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const eliminarAgenteHandler = async (req, res) => {
  try {
    const { idAgente } = req.params;
    const request = await eliminarAgente(idAgente);
    return res.status(200).json({ message: request });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const buscarAgentesAdministracionHandler = async (req, res) => {
  try {
    const request = await buscarAgentesAdministracion();
    return res.status(200).json(request);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  buscarNombresAgentesHandler,
  buscarAgentesAdministracionHandler,
  buscarAgentesHandler,
  buscarAgenteIdHandler,
  crearAgenteHandler,
  actualizarAgenteHandler,
  contraseniaAgenteHandler,
  reasignarAgenteHandler,
  borrarAgenteHandler,
  eliminarAgenteHandler,
};
