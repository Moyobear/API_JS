const { Router } = require("express");
// *importar todos los routers:
const agenteInmobiliarioRouter = require("./agenteInmobiliarioRouter.js");
const sucursalRouter = require("./sucursalRouter.js");
const tipoRouter = require("./tipoRouter.js");
const intermediacionRouter = require("./intermediacionRouter.js");
const inmuebleRouter = require("./inmuebleRouter.js");
const contratoRouter = require("./contratoRouter.js");
// const documentosFisicosRouter = require("./documentosFisicosRouter.js");
// const documentosDigitalesRouter = require("./documentosDigitalesRouter.js");
const propietarioRouter = require("./propietarioRouter.js");
// const imagenesInmuebleRouter = require("./imagenesInmuebleRouter.js");

const router = Router();

// *Configurar los routers
router.use("/agenteInmobiliario", agenteInmobiliarioRouter);
router.use("/sucursal", sucursalRouter);
router.use("/tipoInmueble", tipoRouter);
router.use("/intermediacion", intermediacionRouter);
router.use("/inmueble", inmuebleRouter);
router.use("/contrato", contratoRouter);
// router.use("/documentosFisicos", documentosFisicosRouter);
// router.use("/documentosDigitales", documentosDigitalesRouter);
router.use("/propietario", propietarioRouter);
// routeruse("/imagenesInmueble", imagenesInmuebleRouter);
module.exports = router;
