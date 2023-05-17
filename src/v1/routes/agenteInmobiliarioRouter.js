const { Router } = require("express");
// *importamos los handlers de agenteInmobiliario:
const {
  buscarNombresAgentesHandler,
  buscarAgentesAdministracionHandler,
  buscarAgentesHandler,
  buscarAgenteIdHandler,
  crearAgenteHandler,
  actualizarAgenteHandler,
  contraseniaAgenteHandler,
  reasignarAgenteHandler,
  borrarAgenteHandler,
  eliminarAgenteHandler,
} = require("../../handlers/agenteInmobiliarioHandlers.js");
// *importamos los middlewares de agenteInmobiliario:

// *definimos el router de agenteInmobiliario:
const agenteInmobiliarioRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    AgenteInmobiliario:
 *      type: object
 *      properties:
 *        nombre_apellido:
 *          type: string
 *          description: Nombre y apellido del Agente Inmobiliario
 *        ci:
 *          type: integer
 *          description: Cédula de identidad del Agente Inmobiliario
 *        rol:
 *          type: string
 *          description: Cargo que ocupará, por ejemplo gerente, agente, administrador
 *        telf_hab:
 *          type: string
 *          description: Número telefónico de casa
 *        telf_cel:
 *          type: string
 *          description: Número celular
 *        email:
 *          type: string
 *          description: Correo electrónico del agente
 *        contrasenia:
 *          type: string
 *          description: Contraseña
 *        imagen:
 *          type: string
 *          description: Dirección de la imagen del agente
 *        nacionalidad:
 *          type: integer
 *          description: Nacionalidad de la persona
 *        admin:
 *          type: boolean
 *          description: Indica si es usuario administrador o no
 *        super_user:
 *          type: boolean
 *          description: Indica si es super usuario o no
 *      required:
 *        - nombre_apellido
 *        - ci
 *        - rol
 *        - telf_hab
 *        - telf_cel
 *        - email
 *        - contrasenia
 *        - imagen
 *        - nacionalidad
 *        - admin
 */
// *creamos las rutas de agenteInmobiliario:
/**
 * @swagger
 * /agenteInmobiliario/:
 *  get:
 *    summary: Este endpoint permite buscar por nombre a un Agente Inmobiliario a través de una query, o devuelve todos los Agentes Inmobiliarios si no existe query.
 *    tags: [AgenteInmobiliario]
 *    responses:
 *      200:
 *        description: Carga Perezoza. En cualquier caso devuelve un array, bien con el registro de la busqueda por nombre o devuelve todos los registros de Agentes Inmobiliarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/AgenteInmobiliario'
 */
agenteInmobiliarioRouter.get("/", buscarAgentesHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/administracion:
 *  get:
 *    summary: Este endpoint devuelve todos los Agentes Inmobiliarios mediante una carga ansiosa con los modelos asociados.
 *    tags: [AgenteInmobiliario]
 *    responses:
 *      200:
 *        description: Carga Ansiosa. Devuelve un array con todos los registros de Agentes Inmobiliarios y la información de los modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/AgenteInmobiliario'
 */
agenteInmobiliarioRouter.get(
  "/administracion",
  buscarAgentesAdministracionHandler
); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/nombres:
 *  get:
 *    summary: Este endpoint devuelve sólo los nombres todos los Agentes Inmobiliarios.
 *    tags: [AgenteInmobiliario]
 *    responses:
 *      200:
 *        description: Devuelve un array con los nombres de los Agentes Inmobiliarios.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/AgenteInmobiliario'
 */
agenteInmobiliarioRouter.get("/nombres", buscarNombresAgentesHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/{idAgente}:
 *  get:
 *    summary: Este endpoint permite buscar un Agente Inmobiliario por id.
 *    tags: [AgenteInmobiliario]
 *    parameters:
 *      - in: path
 *        name: idAgente
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Agente Inmobiliario a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/AgenteInmobiliario'
 */
agenteInmobiliarioRouter.get("/:idAgente", buscarAgenteIdHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/nuevo:
 *  post:
 *    summary: Este endpoint crea un nuevo Agente Inmobiliario.
 *    tags: [AgenteInmobiliario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal a la que pertenece, nombre_apellido, ci, rol, telf_hab, telf_cel, email, contrasenia, imagen, nacionalidad, admin y super_user.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/AgenteInmobiliario'
 *    responses:
 *      201:
 *        description: "El registro del Agente Inmobiliario se creó correctamente"
 */
agenteInmobiliarioRouter.post("/nuevo", crearAgenteHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/actualizar:
 *  put:
 *    summary: Este endpoint permite actualizar teléfono de habitación, teléfono celular e email de un Agente Inmoviliario. Recibe el idAgente por body.
 *    tags: [AgenteInmobiliario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idAgente, telf_hab, telf_cel y el email.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/AgenteInmobiliario'
 *    responses:
 *      201:
 *        description: "El registro se ha actualizacio correctamente!"
 */
agenteInmobiliarioRouter.put("/actualizar", actualizarAgenteHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/contrasenia:
 *  put:
 *    summary: Este endpoint permite cambiar la contraseña del Agente Inmobiliario. Recibe el idAgente por body.
 *    tags: [AgenteInmobiliario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idAgente y la contrasenia.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/AgenteInmobiliario'
 *    responses:
 *      201:
 *        description: La contraseña ha sido modificada exitosamente.
 */
agenteInmobiliarioRouter.put("/contrasenia", contraseniaAgenteHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/reasignarAgente:
 *  put:
 *    summary: Este endpoint permite reasignar un inmueble y un propietario de un Agente Inmobiliario a otro. Recibe por body el idInmueble y el idNuevoAgente.
 *    tags: [AgenteInmobiliario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idInmueble y el idNuevoAgente.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/AgenteInmobiliario'
 *    responses:
 *      201:
 *        description: Se ha reasignado la operación correctamente.
 */
agenteInmobiliarioRouter.put("/reasignarAgente", reasignarAgenteHandler);

/**
 * @swagger
 * /agenteInmobiliario/borrado/{idAgente}:
 *  delete:
 *    summary: Este endpoint permite buscar un Agente Inmobiliario por id y aplicar borrado lógico sobre ese registro.
 *    tags: [AgenteInmobiliario]
 *    parameters:
 *      - in: path
 *        name: idAgente
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Agente Inmobiliario a borrar.
 *    responses:
 *      200:
 *        description: El Agente fue borrado exitosamente.
 */
agenteInmobiliarioRouter.delete("/borrado/:idAgente", borrarAgenteHandler); //?Probada

/**
 * @swagger
 * /agenteInmobiliario/{idAgente}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar un Agente Inmobiliario por id y destruir ese registro de manera fisica.
 *    tags: [AgenteInmobiliario]
 *    parameters:
 *      - in: path
 *        name: idAgente
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Agente Inmobiliario a eliminar.
 *    responses:
 *      200:
 *        description: El Agente fue eliminado exitosamente.
 */
agenteInmobiliarioRouter.delete("/:idAgente/eliminar", eliminarAgenteHandler); //?Probada

module.exports = agenteInmobiliarioRouter;
