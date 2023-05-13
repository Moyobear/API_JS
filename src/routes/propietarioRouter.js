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

propietarioRouter.get("/cedula", getPropietarioCedulaHandler);

propietarioRouter.get("/:id", getPropietariosIdHandler);

// ?esta ruta permite crear un nuevo propietario y reasignarselo a un inmueble existente
propietarioRouter.post("/reasignarPropietario", reasignarPropietarioHandler);

propietarioRouter.put("/editar", editarPropietariosHandler);

propietarioRouter.delete("/borrado", borrarPropietariosHandler);

propietarioRouter.delete("/eliminar", eliminarPropietariosHandler);

module.exports = propietarioRouter;
