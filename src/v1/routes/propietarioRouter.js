const { Router } = require("express");
// *importamos los handlers de propietario:
const {
  buscarPropietariosHandler,
  buscarPropietariosAdministracionHandler,
  buscarPropietarioCedulaHandler,
  buscarPropietarioIdHandler,
  nuevoPropietarioHandler,
  reasignarPropietarioHandler,
  editarPropietarioHandler,
  borrarPropietarioHandler,
  eliminarPropietarioHandler,
} = require("../../handlers/propietarioHandlers.js");
// *importamos los middlewares de propietario:

// *definimos el router de propietario:
const propietarioRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Propietario:
 *      type: object
 *      properties:
 *        nombre_apellido:
 *          type: string
 *          description: Nombre y apellido del cliente propietario
 *        ci:
 *          type: integer
 *          description: Cédula de identidad del cliente propietario
 *        estado_civil:
 *          type: string
 *          description: Estado civil del cliente propietario
 *        telf_ofic:
 *          type: string
 *          description: Número telefónico de la oficina. Opcional
 *        telf_hab:
 *          type: string
 *          description: Número telefónico de casa
 *        telf_cel:
 *          type: string
 *          description: Número celular
 *        email:
 *          type: string
 *          description: Correo electrónico del cliente propietario
 *        nacionalidad:
 *          type: integer
 *          description: Nacionalidad del cliente propietario
 *        propietario_actual:
 *          type: boolean
 *          description: Valor por defecto true
 *      required:
 *        - nombre_apellido
 *        - ci
 *        - estado_civil
 *        - telf_hab
 *        - telf_cel
 *        - email
 *        - nacionalidad
 */
// *creamos las rutas de propietario:
/**
 * @swagger
 * /propietario/:
 *  get:
 *    summary: Este endpoint permite solicitar a la base de datos todos los propietarios registrados mediante una carga perezoza.
 *    tags: [Propietario]
 *    responses:
 *      200:
 *        description: Carga Perezoza. Devuelve un array con todos los registros de propietarios que hay en base de datos, independientemente que esten seteados como propietarios actuales o no.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Propietario'
 */
propietarioRouter.get("/", buscarPropietariosHandler);

/**
 * @swagger
 * /propietario/administracion:
 *  get:
 *    summary: Este endpoint devuelve todos los propietarios registrados mediante una carga ansiosa con los modelos asociados.
 *    tags: [Propietario]
 *    responses:
 *      200:
 *        description: Carga Ansiosa. Devuelve un array con todos los registros de Propietarios y la información de los modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Propietario'
 */
propietarioRouter.get(
  "/administracion",
  buscarPropietariosAdministracionHandler
);

/**
 * @swagger
 * /propietario/cedula:
 *  get:
 *    summary: Este endpoint permite buscar a un Propietario por su cédula de identidad.
 *    tags: [Propietario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body la cédula de indentidad del Propietario.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Propietario'
 */
propietarioRouter.get("/cedula", buscarPropietarioCedulaHandler);

/**
 * @swagger
 * /propietario/{idPropietario}:
 *  get:
 *    summary: Este endpoint permite buscar un Propietario por id.
 *    tags: [Propietario]
 *    parameters:
 *      - in: path
 *        name: idPropietario
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Propietario a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Propietario'
 */
propietarioRouter.get("/:id", buscarPropietarioIdHandler);

/**
 * @swagger
 * /propietario/nuevo:
 *  post:
 *    summary: Este endpoint crea un nuevo Propietario.
 *    tags: [Propietario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal a la que pertenece, idAgente, nombre_apellido, ci, estado_civil, telf_ofic, telf_hab, telf_cel, email, nacionalidad.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Propietario'
 *    responses:
 *      201:
 *        description: "El registro del cliente Propietario se creó correctamente"
 */
propietarioRouter.post("/nuevo", nuevoPropietarioHandler);

/**
 * @swagger
 * /propietario/reasignarPropietario:
 *  post:
 *    summary: Este endpoint permite crear un nuevo propietario y asignarselo a un inmueble existente.
 *    tags: [Propietario]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal a la que pertenece, idAgente, idInmueble, nombre_apellido, ci, estado_civil, telf_ofic, telf_hab, telf_cel, email, nacionalidad.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Propietario'
 *    responses:
 *      201:
 *        description: "El registro del nuevo cliente Propietario se creó correctamente y se realizó la reasignación"
 */
propietarioRouter.post("/reasignarPropietario", reasignarPropietarioHandler);

/**
 * @swagger
 * /propietario/editar:
 *  put:
 *    summary: Este endpoint permite actualizar teléfono celular e email de un Propietario.
 *    tags: [Propietario]
 *    requestBody:
 *      required: true
 *      description: Recibe el idPropietario por body, telf_cel y el email.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Propietario'
 *    responses:
 *      201:
 *        description: "El registro se ha actualizacio correctamente!"
 */
propietarioRouter.put("/editar", editarPropietarioHandler);

/**
 * @swagger
 * /propietario/borrado/{idPropietario}:
 *  delete:
 *    summary: Este endpoint permite buscar un Propietario por id y aplicar borrado lógico sobre ese registro.
 *    tags: [Propietario]
 *    parameters:
 *      - in: path
 *        name: idPropietario
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Propietario a borrar.
 *    responses:
 *      200:
 *        description: "El Propietario fue borrado exitosamente"
 */
propietarioRouter.delete("/borrado/:idPropietario", borrarPropietarioHandler);

/**
 * @swagger
 * /propietario/{idPropietario}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar un Propietario por id y destruir ese registro de manera fisica.
 *    tags: [Propietario]
 *    parameters:
 *      - in: path
 *        name: idPropietario
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Propietario a eliminar.
 *    responses:
 *      200:
 *        description: "El Propietario fue eliminado exitosamente"
 */
propietarioRouter.delete(
  "/:idPropietario/eliminar",
  eliminarPropietarioHandler
);

module.exports = propietarioRouter;
