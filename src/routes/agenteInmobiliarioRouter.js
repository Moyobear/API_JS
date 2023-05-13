const { Router } = require("express");
// *importamos los handlers de agenteInmobiliario:
const {
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
} = require("../handlers/agenteInmobiliarioHandler.js");
// *importamos los middlewares de agenteInmobiliario:

// *definimos el router de agenteInmobiliario:
const agenteInmobiliarioRouter = Router();

// *creamos las rutas de agenteInmobiliario:
agenteInmobiliarioRouter.get("/", buscarAgentesHandler); //?Probada

agenteInmobiliarioRouter.get(
  "/administracion",
  buscarAgentesAdministracionHandler
); //?Probada

agenteInmobiliarioRouter.get("/nombres", buscarNombresAgentesHandler); //?Probada

agenteInmobiliarioRouter.get("/:idAgente", buscarAgenteIdHandler); //?Probada

agenteInmobiliarioRouter.post("/nuevo", crearAgenteHandler); //?Probada

agenteInmobiliarioRouter.put("/actualizar", actualizarAgenteHandler); //?Probada

agenteInmobiliarioRouter.put("/contrasenia", contraseniaAgenteHandler); //?Probada

agenteInmobiliarioRouter.put("/reasignarAgente", reasignarAgenteHandler);

agenteInmobiliarioRouter.delete("/borrado/:idAgente", borrarAgenteHandler); //?Probada

agenteInmobiliarioRouter.delete("/:idAgente/eliminar", eliminarAgenteHandler); //?Probada

module.exports = agenteInmobiliarioRouter;
