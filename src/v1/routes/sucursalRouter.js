const { Router } = require("express");
// *importamos los handlers de sucursal:
const {
  buscarSucursalesHandler,
  buscarSucursalIdHandler,
  crearSucursalHandler,
  editarSucursalHandler,
  reasignarSucursalHandler,
  borrarSucursalHandler,
  eliminarSucursalHandler,
  buscarSucursalesAdministracionHandler,
} = require("../../handlers/sucursalHandlers.js");
// *importamos los middlewares de sucursal:

// *definimos el router de sucursal:
const sucursalRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Sucursal:
 *      type: object
 *      properties:
 *        sucursal:
 *          type: string
 *          description: Nombre de la nueva sucursal
 *        direccion:
 *          type: string
 *          description: Dirección de la nueva sucursal
 *        telefono:
 *          type: string
 *          description: Telefono de la nueva sucursal
 *        imagen:
 *          type: string
 *          description: Ruta de la imagen de la nueva sucursal
 *        acronimo:
 *          type: string
 *          description: Siglas que se usarán para identificar a la sucursal
 *        borrado:
 *          type: boolean
 *          description: Atributo que permite realizar un borrado lógico del registro
 *      required:
 *        - sucursal
 *        - direccion
 *        - telefono
 *        - imagen
 *        - acronimo
 */
// *creamos las rutas de sucursal:
/**
 * @swagger
 * /sucursal/:
 *  get:
 *    summary: Este endpoint devuelve todas las Sucursales.
 *    tags: [Sucursal]
 *    responses:
 *      200:
 *        description: Carga Perezoza. Devuelve un array con todas las Sucursales registradas en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Sucursal'
 */
sucursalRouter.get("/", buscarSucursalesHandler); // ?Probada

/**
 * @swagger
 * /sucursal/administracion:
 *  get:
 *    summary: Este endpoint devuelve todas las Sucursales mediante una carga ansiosa con los modelos asociados.
 *    tags: [Sucursal]
 *    responses:
 *      200:
 *        description: Carga Ansiosa. Devuelve un array con todas las Sucursales registradas en la base de datos y la información de los modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Sucursal'
 */
sucursalRouter.get("/administracion", buscarSucursalesAdministracionHandler); // ?Probada

/**
 * @swagger
 * /sucursal/{idSucursal}:
 *  get:
 *    summary: Este endpoint permite buscar una sucursal por id.
 *    tags: [Sucursal]
 *    parameters:
 *      - in: path
 *        name: idSucursal
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Sucursal a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Sucursal'
 */
sucursalRouter.get("/:idSucursal", buscarSucursalIdHandler); // ?Probada

/**
 * @swagger
 * /sucursal/nueva:
 *  post:
 *    summary: Este endpoint crea una nueva Sucursal.
 *    tags: [Sucursal]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Sucursal'
 *    responses:
 *      201:
 *        description: La sucursal JS XXXXXXX se ha creado exitosamente.
 */
sucursalRouter.post("/nueva", crearSucursalHandler); // ?Probada

/**
 * @swagger
 * /sucursal/editar:
 *  put:
 *    summary: Este endpoint permite actualizar teléfono e imagen de una Sucursal. Recibe el idSucursal por body.
 *    tags: [Sucursal]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal, telefono y la nueva imagen en string.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Sucursal'
 *    responses:
 *      201:
 *        description: Devuelve un objeto con el registro actualizado.
 */
sucursalRouter.put("/editar", editarSucursalHandler);

/**
 * @swagger
 * /sucursal/reasignarSucursal:
 *  put:
 *    summary: Este endpoint permite reasignar todos los inmuebles, agentes inmobiliarios, propietarios e intermediaciones a otra sucursal. Recibe por body el idSucursal de la sucursal a extinguir y el idSucursalNueva de la sucursal a la que se le cargaran todos los registros.
 *    tags: [Sucursal]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal y el idSucursalNueva.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Sucursal'
 *    responses:
 *      201:
 *        description: Reasignacion exitosa.
 */
sucursalRouter.put("/reasignarSucursal", reasignarSucursalHandler); // ?Probada

/**
 * @swagger
 * /sucursal/borrado/{idSucursal}:
 *  delete:
 *    summary: Este endpoint permite buscar una Sucursal por id y aplicar borrado lógico sobre ese registro.
 *    tags: [Sucursal]
 *    parameters:
 *      - in: path
 *        name: idSucursal
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Sucursal a borrar.
 *    responses:
 *      200:
 *        description: La Sucursal fue borrada exitosamente.
 */
sucursalRouter.delete("/borrado/:idSucursal", borrarSucursalHandler); // ?Probada

/**
 * @swagger
 * /sucursal/{idSucursal}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar una Sucursal por id y destruir ese registro de manera fisica.
 *    tags: [Sucursal]
 *    parameters:
 *      - in: path
 *        name: idSucursal
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Sucursal a eliminar.
 *    responses:
 *      200:
 *        description: La Sucursal fue eliminada exitosamente.
 */
sucursalRouter.delete("/:idSucursal/eliminar", eliminarSucursalHandler); // ?Probada

module.exports = sucursalRouter;
