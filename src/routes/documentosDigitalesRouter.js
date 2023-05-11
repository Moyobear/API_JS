const { Router } = require("express");
// *importamos los handlers de documentosDigitales:

// *importamos los middlewares de documentosDigitales:

// *definimos el router de documentosDigitales:
const documentosDigitalesRouter = Router();

// *creamos las rutas de documentosDigitales:
documentosDigitalesRouter.get("/:id", getDocumentosDigitalesIdHandler);

documentosDigitalesRouter.post(
  "/crearDocumentos",
  crearDocumentosDigitalesHandler
);

documentosDigitalesRouter.put("/editar", editarDocumentosDigitalesHandler);

module.exports = documentosDigitalesRouter;
