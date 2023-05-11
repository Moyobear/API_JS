const { Router } = require("express");
// *importamos los handlers de inmueble:

// *importamos los middlewares de inmueble:

// *definimos el router de inmueble:
const inmuebleRouter = Router();

// *creamos las rutas de inmueble:
inmuebleRouter.get("/inmuebles", getInmueblesClienteHandler);

inmuebleRouter.get(
  "/inmuebles/administracion",
  getInmueblesAdministracionHandler
);

inmuebleRouter.get("/:id", getInmuebleIdHandler);

inmuebleRouter.post("/nuevo", crearInmuebleHandler);

// ?ruta auxiliar para crear registros masivos:
inmuebleRouter.post("/bulkCreateInmuebles", bulkCreateInmueblesHandler);

inmuebleRouter.put("/editar", editarInmuebleHandler);

inmuebleRouter.delete("/borrado", borrarInmuebleHandler);

inmuebleRouter.delete("/eliminar", eliminarInmuebleHandler);

module.exports = inmuebleRouter;
