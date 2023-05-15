const { Router } = require("express");
// *importamos los handlers de tipoInmueble:
const {
  buscarTipoHandler,
  buscarTipoIdHandler,
  crearTipoHandler,
  eliminarTipoHandler,
  borrarTipoHandler,
} = require("../../handlers/tipoInmuebleHandlers.js");
// *importamos los middlewares de tipoInmueble:

// *definimos el router de tipoInmueble:
const tipoRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    TipoInmueble:
 *      type: object
 *      properties:
 *        tipo_inmueble:
 *          type: string
 *          description: Tipo de de inmueble que se registra
 *        acronimo:
 *          type: string
 *          description: Siglas que se usarán para identificar al tipo de inmueble
 *      required:
 *        - tipo_inmueble
 *        - acronimo
 */
// *creamos las rutas de tipoInmueble:
/**
 * @swagger
 * /tipoInmueble/:
 *  get:
 *    summary: Este endpoint devuelve todos los tipos de Inmuebles.
 *    tags: [TipoInmueble]
 *    responses:
 *      200:
 *        description: Carga Perezoza. Devuelve un array con todos los tipos de Inmuebles.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/TipoInmueble'
 */
tipoRouter.get("/", buscarTipoHandler);

/**
 * @swagger
 * /tipoInmueble/{idTipoInmueble}:
 *  get:
 *    summary: Este endpoint permite buscar un tipo de inmueble por id.
 *    tags: [TipoInmueble]
 *    parameters:
 *      - in: path
 *        name: idTipoInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del tipo de Inmueble a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/TipoInmueble'
 */
tipoRouter.get("/:id", buscarTipoIdHandler);

/**
 * @swagger
 * /tipoInmueble/nuevo:
 *  post:
 *    summary: Este endpoint crea un nuevo tipo de Inmueble.
 *    tags: [TipoInmueble]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/TipoInmueble'
 *    responses:
 *      201:
 *        description: Tipo de Inmueble crado exitosamente
 */
tipoRouter.post("/nuevo", crearTipoHandler);

tipoRouter.delete("/borrado/:idTipoInmueble", borrarTipoHandler);

/**
 * @swagger
 * /tipoInmueble/{idTipoInmueble}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar un tipo de Inmueble por id y destruir ese registro de manera fisica.
 *    tags: [TipoInmueble]
 *    parameters:
 *      - in: path
 *        name: idTipoInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del tipo de Inmueble a eliminar.
 *    responses:
 *      200:
 *        description: Tipo de Inmueblel eliminado exitosamente.
 */
tipoRouter.delete("/:idTipoInmueble/eliminar", eliminarTipoHandler);

module.exports = tipoRouter;
