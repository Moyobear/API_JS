const { Router } = require("express");
// *importamos los handlers de imagenesInmueble:

// *importamos los middlewares de imagenesInmueble:

// *definimos el router de imagenesInmueble:
const imagenesInmuebleRouter = Router();

// *creamos las rutas de imagenesInmueble:
imagenesInmuebleRouter.put("/editar", editarImagenesHandler);

module.exports = imagenesInmuebleRouter;
