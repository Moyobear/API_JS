const { Router } = require("express");
// *importamos los handlers de inmueble:
const {
  buscarInmueblesClienteHandler,
  buscarInmueblesAdministracionHandler,
  buscarInmueblesSucursalHandler,
  buscarAgenteInmobiliarioInmueblesHandler,
  buscarInmuebleIdHandler,
  crearInmuebleHandler,
  editarInmuebleHandler,
  mostrarInmuebleHandler,
  destacarInmuebleHandler,
  cambiarOperacionInmuebleHandler,
  borrarInmuebleHandler,
  eliminarInmuebleHandler,
  buscarInmueblesCodigoHandler,
} = require("../../handlers/inmuebleHandlers.js");
// *importamos los middlewares de inmueble:

// *definimos el router de inmueble:
const inmuebleRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Inmueble:
 *      type: object
 *      properties:
 *        ced_catastral:
 *          type: string
 *          description: Cédula catastral del Inmueble
 *        fecha:
 *          type: dateonly
 *          description: fecha de la ocurrencia del registro
 *        direccion:
 *          type: string
 *          description: Dirección del Inmueble
 *        habs:
 *          type: integer
 *          description: Número de habitaciones
 *        hab_servicio:
 *          type: integer
 *          description: Número de habitaciones de servicio
 *        banios:
 *          type: integer
 *          description: Número de baños
 *        banio_servicio:
 *          type: integer
 *          description: Número de baños de servicio
 *        puesto_estacionamiento:
 *          type: integer
 *          description: Numero de puestos de estacionamiento
 *        mts_terreno:
 *          type: integer
 *          description: Metros cuadrados del terreno. Opcional
 *        mts_construccion:
 *          type: integer
 *          description: Metros cuadrados de construcción
 *        antiguedad:
 *          type: integer
 *          description: Años de construcción
 *        observ_inmueble:
 *          type: string
 *          description: Observaciones respecto al inmueble. Opcional
 *        otras_caracteristicas:
 *          type: string
 *          description: Características adicionales que posea el inmueble. Opcional
 *        operacion:
 *          type: string
 *          description: Indicar si es compra, venta, alquiler o traspaso
 *      required:
 *        - ced_catastral
 *        - fecha
 *        - direccion
 *        - habs
 *        - hab_servicio
 *        - banios
 *        - banio_servicio
 *        - puesto_estacionamiento
 *        - mts_terreno
 *        - mts_construccion
 *        - antiguedad
 *        - operacion
 */
// *creamos las rutas de inmueble:
/**
 * @swagger
 * /inmueble/:
 *  get:
 *    summary: Ruta específica para la vista del cliente, en la que devolverá todos los Inmuebles y se incluiran los modelos AgenteInmobiliario, Contrato, TipoInmueble, CodigoInmueble, Sucursal, Comodidades, Ambientes, Estado, Ciudad, Sector, ImagenesInmueble.
 *    tags: [Inmueble]
 *    responses:
 *      200:
 *        description: Carga Ansiosa Cliente. Devuelve un array con todos los registros de Inmuebles que hay en base de datos con los modelos asociados para la vista del cliente.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get("/", buscarInmueblesClienteHandler);

/**
 * @swagger
 * /inmueble/codigoInmueble:
 *  get:
 *    summary: Ruta específica en la que se devolverá un Inmueble a través de su código de inmueble asociado y se incluiran los modelos AgenteInmobiliario, Contrato, TipoInmueble, CodigoInmueble, Sucursal, Comodidades, Ambientes, Estado, Ciudad, Sector, ImagenesInmueble, Propietario.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el codigo_inmueble.
 *    responses:
 *      200:
 *        description: Carga Ansiosa Cliente. Devuelve un objeto con el registro encontrado y los modelos definidos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get("/codigoInmueble", buscarInmueblesCodigoHandler);

/**
 * @swagger
 * /inmueble/administracion:
 *  get:
 *    summary: Ruta específica para la vista de la administración, en la que devolverá todos los Inmuebles y se incluiran los TODOS los modelos asociados.
 *    tags: [Inmueble]
 *    responses:
 *      200:
 *        description: Carga Ansiosa administración. Devuelve un array con todos los registros de Inmuebles que hay en base de datos con los modelos asociados.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get("/administracion", buscarInmueblesAdministracionHandler);

/**
 * @swagger
 * /inmueble/sucursal:
 *  get:
 *    summary: Ruta específica para la vista de la administración, en la que devolverá todos los Inmuebles y se incluiran los modelos AgenteInmobiliario, Contrato, TipoInmueble, CodigoInmueble, Sucursal, Propietario, PropietarioSecundario, Apoderado, Intermediacion, DocumentosFisicos, DocumentosDigitales.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idSucursal.
 *    responses:
 *      200:
 *        description: Carga Ansiosa administración. Devuelve un array con todos los registros de Inmuebles que hay en base de datos con los modelos asociados, pertenecientes a una sucursal específica.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get("/sucursal", buscarInmueblesSucursalHandler);

/**
 * @swagger
 * /inmueble/agenteInmobiliario:
 *  get:
 *    summary: Ruta específica para la vista de la administración, en la que devolverá todos los Inmuebles y se incluiran los modelos Contrato, TipoInmueble, CodigoInmueble, Propietario, PropietarioSecundario, Apoderado, DocumentosFisicos, DocumentosDigitales.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body el idAgente.
 *    responses:
 *      200:
 *        description: Carga Ansiosa administración. Devuelve un array con todos los registros de Inmuebles filtrados que hay en base de datos con los modelos asociados, pertenecientes a un Agente Inmobiliario específico.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get(
  "/agenteInmobiliario",
  buscarAgenteInmobiliarioInmueblesHandler
);

/**
 * @swagger
 * /inmueble/{idInmueble}:
 *  get:
 *    summary: Este endpoint permite buscar un Inmueble por id y devuelve una carga ansiosa.
 *    tags: [Inmueble]
 *    parameters:
 *      - in: path
 *        name: idInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Inmueble a buscar.
 *    responses:
 *      200:
 *        description: Devuelve un objeto con los datos del registro solicitado y  TODOS sus modelos relacionados.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              $ref: '#/components/schemas/Inmueble'
 */
inmuebleRouter.get("/:idInmueble", buscarInmuebleIdHandler);

/**
 * @swagger
 * /inmueble/nuevo:
 *  post:
 *    summary: Este endpoint crea un nuevo Inmueble.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body ced_catastral, fecha, direccion, habs, hab_servicio, banios, banio_servicio, puesto_estacionamiento, mts_terreno, mts_construccion, antiguedad, observ_inmueble, otras_caracteristicas, operacion, duracion, precio_venta, codigo_inmueble, idTipoInmueble, idScursal, idAgente, idPropietario, idEstado, idCiudad.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Inmueble'
 *    responses:
 *      201:
 *        description: "El registro del Inmueble se creó correctamente"
 */
inmuebleRouter.post("/nuevo", crearInmuebleHandler);

/**
 * @swagger
 * /inmueble/actualizar:
 *  put:
 *    summary: Este endpoint permite actualizar los campos otras_caracteristicas y observ_inmueble.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body idInmueble, observ_inmueble y otras_caracteristicas.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Inmueble'
 *    responses:
 *      201:
 *        description: "El registro del Inmueble se actualizó correctamente"
 */
inmuebleRouter.put("/actualizar", editarInmuebleHandler);

/**
 * @swagger
 * /inmueble/mostrarInmueble:
 *  put:
 *    summary: Este endpoint permite modificar el atributo visible de un inmueble para mostrarlo u ocultarlo.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body idInmueble y el valor del atributo visibe.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Inmueble'
 *    responses:
 *      201:
 *        description: "El registro del Inmueble se actualizó correctamente"
 */
inmuebleRouter.put("/mostrarInmueble", mostrarInmuebleHandler);

/**
 * @swagger
 * /inmueble/destacarInmueble:
 *  put:
 *    summary: Este endpoint permite modificar el atributo destacado de un Inmueble para mostrarlo en la sección especial de Inmuebles destacados de la página de clientes.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body idInmueble y el valor del atributo destacado.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Inmueble'
 *    responses:
 *      201:
 *        description: "El registro del Inmueble se actualizó correctamente"
 */
inmuebleRouter.put("/destacarInmueble", destacarInmuebleHandler);

/**
 * @swagger
 * /inmueble/cambiarOperacion:
 *  put:
 *    summary: Este endpoint permite actualizar el campo operacion y cambiar su valor.
 *    tags: [Inmueble]
 *    requestBody:
 *      required: true
 *      description: Debe recibir por body idInmueble y el nuevo valor de operacion.
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Inmueble'
 *    responses:
 *      201:
 *        description: "La operación del Inmueble se modificó correctamente"
 */
inmuebleRouter.put("/cambiarOperacion", cambiarOperacionInmuebleHandler);

/**
 * @swagger
 * /inmueble/borrado/{idInmueble}:
 *  delete:
 *    summary: Este endpoint permite buscar un Inmueble por id y aplicar borrado lógico sobre ese registro.
 *    tags: [Inmueble]
 *    parameters:
 *      - in: path
 *        name: idInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Inmueble a borrar.
 *    responses:
 *      200:
 *        description: "El Inmueble fue borrado exitosamente"
 */
inmuebleRouter.delete("/borrado/:idInmueble", borrarInmuebleHandler);

/**
 * @swagger
 * /inmueble/{idInmueble}/eliminar:
 *  delete:
 *    summary: Este endpoint permite buscar un Inmueble por id y destruir ese registro de manera fisica.
 *    tags: [Inmueble]
 *    parameters:
 *      - in: path
 *        name: idInmueble
 *        schema:
 *          type: string
 *        required: true
 *        description: Id del Inmueble a eliminar.
 *    responses:
 *      200:
 *        description: "El Inmueble fue eliminado exitosamente"
 */
inmuebleRouter.delete("/:idInmueble/eliminar", eliminarInmuebleHandler);

module.exports = inmuebleRouter;
