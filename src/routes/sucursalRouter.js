const { Router } = require("express");
// *importamos los handlers de sucursal:
const {
  buscarSucursalesHandler,
  buscarSucursalIdHandler,
  crearSucursalHandler,
  editarSucursalHandler,
  reasignarSucursalHandler,
  borrarSucursalHandler,
  eliminarSucursalHandler,
  buscarSucursalesAdministracionHandler,
} = require("../handlers/sucursalHandlers.js");
// *importamos los middlewares de sucursal:

// *definimos el router de sucursal:
const sucursalRouter = Router();

// *creamos las rutas de sucursal:
sucursalRouter.get("/", buscarSucursalesHandler); // ?Probada

sucursalRouter.get("/administracion", buscarSucursalesAdministracionHandler); // ?Probada

sucursalRouter.get("/:idSucursal", buscarSucursalIdHandler); // ?Probada

sucursalRouter.post("/nueva", crearSucursalHandler); // ?Probada

sucursalRouter.put("/editar", editarSucursalHandler);

sucursalRouter.put("/reasignarSucursal", reasignarSucursalHandler); // ?Probada

sucursalRouter.delete("/borrado/:idSucursal", borrarSucursalHandler); // ?Probada

sucursalRouter.delete("/:idSucursal/eliminar", eliminarSucursalHandler); // ?Probada

module.exports = sucursalRouter;
