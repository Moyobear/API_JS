const { Router } = require("express");
// *importamos los handlers de intermediacion:
const {
  buscarIntermediacionHandler,
  buscarIntermediacionAdminHandler,
  buscarIntermediacionIdHandler,
  crearIntermediacionHandler,
  borrarIntermediacionHandler,
  eliminarIntermediacionHandler,
} = require("../../handlers/intermediacionHandlers.js");
// *importamos los middlewares de intermediacion:

// *definimos el router de intermediacion:
const intermediacionRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Intermediacion:
 *      type: object
 *      properties:
 *        comision:
 *          type: string
 *          description: Porcentaje de la comisión de la intermediación
 *        autorizacion:
 *          type: boolean
 *          description: Verdadero o falso si posee autorización del propietario del inmueble
 *        exclusividad:
 *          type: boolean
 *          description: Verdadero o falso si es exclusiva la operacion con la agencia o intervienen otras más
 *        agencia_inmobiliaria:
 *          type: string
 *          description: Nombre de la agencia inmobiliaria que interviene en la operación
 *        agente_inmobiliario:
 *          type: string
 *          description: Nombre del agente inmobiliario que interviene en la operación
 *      required:
 *        - comision
 *        - autorizacion
 *        - exclusividad
 *        - agencia_inmobiliaria
 *        - agente_inmobiliario
 */
// *creamos las rutas de intermediacion:
/**
 * @swagger
 * /intermediacion/:
 *  get:
 *    summary: Este endpoint devuelve todas las intermediaciones registradas en la DB.
 *    tags: [Intermediacion]
 *    responses:
 *      200:
 *        description: Carga Perezoza. Devuelve un array con todas las Intermediaciones registradas en la base de datos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Intermediacion'
 */
intermediacionRouter.get("/", buscarIntermediacionHandler);

/**
 * @swagger
 * /intermediacion/administracion:
 *  get:
 *    summary: Este endpoint devuelve todas las Sucursales mediante una carga ansiosa con los modelos asociados.
 *    tags: [Intermediacion]
 *    responses:
 *      200:
 *        description: Carga Ansiosa. Devuelve un array con todas las Intermediaciones registradas en la base de datos y la información de los modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Intermediacion'
 */
intermediacionRouter.get("/administracion", buscarIntermediacionAdminHandler);

/**
 * @swagger
 * /intermediacion/{idIntermediacion}:
 *  get:
 *    summary: Este endpoint permite buscar una intermediacion por id.
 *    tags: [Intermediacion]
 *    parameters:
 *      - in: path
 *        name: idIntermediacion
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Intermediacion a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Intermediacion'
 */
intermediacionRouter.get("/:id", buscarIntermediacionIdHandler);

/**
 * @swagger
 * /intermediacion/nueva:
 *  post:
 *    summary: Este endpoint crea una nueva Intermediacion.
 *    tags: [Intermediacion]
 *    requestBody:
 *      required: true
 *      description: Este endpoint recibe por body el idSucursal, el idInmueble y los parámetros que define su schema
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Intermediacion'
 *    responses:
 *      201:
 *        description: La Intermediacion se ha creado exitosamente.
 */
intermediacionRouter.post("/nueva", crearIntermediacionHandler);

/**
 * @swagger
 * /intermediacion/borrado/{idIntermediacion}:
 *  delete:
 *    summary: Este endpoint permite buscar una Intermediacion por id y aplicar borrado lógico sobre ese registro.
 *    tags: [Intermediacion]
 *    parameters:
 *      - in: path
 *        name: idIntermediacion
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Intermediacion a borrar.
 *    responses:
 *      200:
 *        description: La Intermediacion fue borrada exitosamente.
 */
intermediacionRouter.delete(
  "/borrar/:idIntermediacion",
  borrarIntermediacionHandler
);

/**
 * @swagger
 * /intermediacion/{idIntermediacion}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar una Intermediacion por id y destruir ese registro de manera fisica.
 *    tags: [Intermediacion]
 *    parameters:
 *      - in: path
 *        name: idIntermediacion
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la Intermediacion a eliminar.
 *    responses:
 *      200:
 *        description: La Intermediacion fue eliminada exitosamente.
 */
intermediacionRouter.delete(
  "/:idIntermediacion/eliminar",
  eliminarIntermediacionHandler
);

module.exports = intermediacionRouter;
