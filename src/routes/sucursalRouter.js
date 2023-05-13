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
sucursalRouter.get("/", buscarSucursalesHandler);

sucursalRouter.get("/administracion", buscarSucursalesAdministracionHandler);

sucursalRouter.get("/:idSucursal", buscarSucursalIdHandler);

sucursalRouter.post("/nuevo", crearSucursalHandler);

sucursalRouter.put("/editar", editarSucursalHandler);

sucursalRouter.put("/reasignarSucursal", reasignarSucursalHandler);

sucursalRouter.delete("/borrado/:idSucursal", borrarSucursalHandler);

sucursalRouter.delete("/:idSucursal/eliminar", eliminarSucursalHandler);

module.exports = sucursalRouter;
