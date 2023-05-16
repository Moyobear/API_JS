const { Router } = require("express");
// *importamos los handlers de inmueble:

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
 *          description: Observaciones respecto al inmueble
 *        otras_caracteristicas:
 *          type: string
 *          description: Características adicionales que posea el inmueble
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
 *        - observ_inmueble
 *        - otras_caracteristicas
 *        - operacion
 */
// *creamos las rutas de inmueble:
inmuebleRouter.get("/", buscarInmueblesClienteHandler);

inmuebleRouter.get("/administracion", buscarInmueblesAdministracionHandler);

inmuebleRouter.get("/sucursal", buscarInmueblesSucursalHandler);

inmuebleRouter.get("/agenteInmobiliario", agenteInmobiliarioInmueblesHandler);

inmuebleRouter.get("/:id", getInmuebleIdHandler);

inmuebleRouter.post("/nuevo", crearInmuebleHandler);

inmuebleRouter.put("/editar", editarInmuebleHandler);

inmuebleRouter.put("/mostrarInmueble", mostrarInmuebleHandler);

inmuebleRouter.put("/cambiarOperacion", cambiarOperacionInmuebleHandler);

inmuebleRouter.put("/destacarInmueble", destacarInmuebleHandler);

inmuebleRouter.delete("/borrado", borrarInmuebleHandler);

inmuebleRouter.delete("/eliminar", eliminarInmuebleHandler);

module.exports = inmuebleRouter;
