const { Router } = require("express");
// *importamos los handlers de contrato:

// *importamos los middlewares de contrato:

// *definimos el router de contrato:
const contratoRouter = Router();

// *creamos las rutas de contrato:
contratoRouter.get("/:id", getContratoIdHandler);

contratoRouter.put("/editar", editarContratoHandler);

module.exports = contratoRouter;
