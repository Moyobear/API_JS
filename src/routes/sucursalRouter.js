const { Router } = require("express");
// *importamos los handlers de sucursal:

// *importamos los middlewares de sucursal:

// *definimos el router de sucursal:
const sucursalRouter = Router();

// *creamos las rutas de sucursal:
sucursalRouter.get("/", getSucursalHandler);

sucursalRouter.get("/:id", getSucursalIdHandler);

sucursalRouter.post("/nuevo", crearSucursalHandler);

// ?ruta auxiliar para crear registros masivos:
sucursalRouter.post("/bulkCreateSucursal", bulkCreateSucursalHandler);

sucursalRouter.put("/editar", editarSucursalHandler);

sucursalRouter.delete("/borrado", borrarSucursalHandler);

sucursalRouter.delete("/eliminar", eliminarSucursalHandler);

module.exports = sucursalRouter;
