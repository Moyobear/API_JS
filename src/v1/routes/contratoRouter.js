const { Router } = require("express");
// *importamos los handlers de contrato:

// *importamos los middlewares de contrato:

// *definimos el router de contrato:
const contratoRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Contrato:
 *      type: object
 *      properties:
 *        duracion:
 *          type: integer
 *          description: Tiempo de duración establecido para el contrato del inmueble con la agencia
 *        precio_venta:
 *          type: string
 *          description: Cédula de identidad del Agente
 *      required:
 *        - duracion
 *        - precio_venta
 */
// *creamos las rutas de contrato:
/**
 * @swagger
 * /contrato/{idContrato}:
 *  get:
 *    summary: Este endpoint permite buscar un Contrato por id.
 *    tags: [Contrato]
 *    parameters:
 *      - in: path
 *        name: idContrato
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Contrato a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Contrato'
 */
contratoRouter.get("/:idContrato", getContratoIdHandler);

/**
 * @swagger
 * /contrato/editar:
 *  put:
 *    summary: Este endpoint permite editar precio_venta y duracion de un Contrato. Recibe el idContrato por body.
 *    tags: [Contrato]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idContrato, duracion y precio_venta.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Contrato'
 *    responses:
 *      201:
 *        description: El contrato fue correctamente actualizado
 */
contratoRouter.put("/editar", editarContratoHandler);

module.exports = contratoRouter;
