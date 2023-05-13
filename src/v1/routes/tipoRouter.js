const { Router } = require("express");
// *importamos los handlers de tipo:

// *importamos los middlewares de tipo:

// *definimos el router de tipo:
const tipoRouter = Router();

// *creamos las rutas de tipo:
tipoRouter.get("/", getTipoHandler);

tipoRouter.get("/:id", getTipoIdHandler);

tipoRouter.post("/nuevo", crearTipoHandler);

// ?ruta auxiliar para crear registros masivos:
tipoRouter.post("/bulkCreateTipos", bulkCreateTiposHandler);

tipoRouter.put("/editar", editarTipoHandler);

tipoRouter.delete("/borrado", borrarTipoHandler);

tipoRouter.delete("/eliminar", eliminarTipoHandler);

module.exports = tipoRouter;
