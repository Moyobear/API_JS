const { Router } = require("express");
// *importamos los handlers de inmueble:

// *importamos los middlewares de inmueble:

// *definimos el router de inmueble:
const inmuebleRouter = Router();

// *creamos las rutas de inmueble:
inmuebleRouter.get("/", buscarInmueblesClienteHandler);

inmuebleRouter.get("/administracion", buscarInmueblesAdministracionHandler);

inmuebleRouter.get("/sucursal", buscarInmueblesSucursalHandler);

inmuebleRouter.get("/:id", getInmuebleIdHandler);

inmuebleRouter.post("/nuevo", crearInmuebleHandler);

inmuebleRouter.put("/editar", editarInmuebleHandler);

inmuebleRouter.delete("/borrado", borrarInmuebleHandler);

inmuebleRouter.delete("/eliminar", eliminarInmuebleHandler);

module.exports = inmuebleRouter;
