const { Router } = require("express");
// *importamos los handlers de agenteInmobiliario:

// *importamos los middlewares de agenteInmobiliario:

// *definimos el router de agenteInmobiliario:
const agenteInmobiliarioRouter = Router();

// *creamos las rutas de agenteInmobiliario:
agenteInmobiliarioRouter.get("/", getAgentesHandler);

agenteInmobiliarioRouter.get("/nombres", getNombresAgentesHandler);

agenteInmobiliarioRouter.get("/:id", getAgenteIdHandler);

agenteInmobiliarioRouter.post("/nuevo", crearAgenteHandler);

// ?ruta auxiliar para crear registros masivos
agenteInmobiliarioRouter.post("/bulkCreateAgentes", bulkCreateAgentesHandler);

agenteInmobiliarioRouter.put("/editar", editarAgenteHandler);

agenteInmobiliarioRouter.delete("/borrado", borrarAgenteHandler);

agenteInmobiliarioRouter.delete("/eliminar", eliminarAgenteHandler);

module.exports = agenteInmobiliarioRouter;
