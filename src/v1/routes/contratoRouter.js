const { Router } = require("express");
// *importamos los handlers de contrato:
const {
  buscarContratosInmuebleHandler,
  crearContratoHandler,
  borrarContratoHandler,
} = require("../../handlers/contratoHandlers");
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
 *        fecha:
 *          type: dateonly
 *          description: Fecha de creacion o renovacion del contrato
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
 * /contrato/buscarContratosInmueble/{idInmueble}:
 *  get:
 *    summary: Este endpoint permite buscar todos los contratos inherentes a un inmueble.
 *    tags: [Contrato]
 *    parameters:
 *      - in: path
 *        name: idInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Inmueble a consultar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Contrato'
 */
contratoRouter.get(
  "/buscarContratosInmueble/:idInmueble",
  buscarContratosInmuebleHandler
);

/**
 * @swagger
 * /contrato/nuevo:
 *  post:
 *    summary: Este endpoint permite crear un Contrato. Recibe el idInmueble por body asociado.
 *    tags: [Contrato]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idInmueble, fecha,duracion y precio_venta.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Contrato'
 *    responses:
 *      201:
 *        description: El nuevo contrato se ha establecido en fecha xxxx/xx/xx, con una duración de xx días y un precio de venta de $x.xxx.xxx
 */
contratoRouter.post("/nuevo", crearContratoHandler);

/**
 * @swagger
 * /contrato/borrado/{idContrato}:
 *  delete:
 *    summary: Este endpoint permite buscar un Contrato por id y aplicar borrado lógico al registro.
 *    tags: [Contrato]
 *    parameters:
 *      - in: path
 *        name: idContrato
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del contrato a borrar.
 *    responses:
 *      200:
 *        description: Tipo de Inmueblel borrado exitosamente.
 */
contratoRouter.delete("/borrado/:idContrato", borrarContratoHandler);

module.exports = contratoRouter;
