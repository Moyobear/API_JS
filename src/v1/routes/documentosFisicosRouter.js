const { Router } = require("express");
// *importamos los handlers de documentosFisicos:

// *importamos los middlewares de documentosFisicos:

// *definimos el router de documentosFisicos:
const documentosFisicosRouter = Router();

// *creamos las rutas de documentosFisicos:
documentosFisicosRouter.get("/:id", getDocumentosFisicosIdHandler);

documentosFisicosRouter.post("/crearDocumentos", crearDocumentosFisicosHandler);

documentosFisicosRouter.put("/editar", editarDocumentosFisicosHandler);

module.exports = documentosFisicosRouter;
