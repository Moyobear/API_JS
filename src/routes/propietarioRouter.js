const { Router } = require("express");
// *importamos los handlers de propietario:

// *importamos los middlewares de propietario:

// *definimos el router de propietario:
const propietarioRouter = Router();

// *creamos las rutas de propietario:
propietarioRouter.get("/propietarios", getPropietariosClienteHandler);

propietarioRouter.get(
  "/propietarios/administracion",
  getPropietariosAdministracionHandler
);

propietarioRouter.get("/:id", getPropietariosIdHandler);

propietarioRouter.post("/nuevo", crearPropietariosHandler);

propietarioRouter.put("/editar", editarPropietariosHandler);

propietarioRouter.delete("/borrado", borrarPropietariosHandler);

propietarioRouter.delete("/eliminar", eliminarPropietariosHandler);

module.exports = propietarioRouter;
