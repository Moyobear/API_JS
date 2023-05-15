const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const AgenteInmobiliarioModel = require("./models/AgenteInmobiliario");
const AmbientesModel = require("./models/Ambientes");
const ApoderadoModel = require("./models/Apoderado");
const CiudadModel = require("./models/Ciudad");
const CodigoInmuebleModel = require("./models/CodigoInmueble");
const ComodidadesModel = require("./models/Comodidades");
const ContratoModel = require("./models/Contrato");
const DocumentosDigitalesModel = require("./models/DocumentosDigitales");
const DocumentosFisicosModel = require("./models/DocumentosFisicos");
const EstadoModel = require("./models/Estado");
const ImagenesInmuebleModel = require("./models/ImagenesInmueble");
const InmuebleModel = require("./models/Inmueble");
const IntermediacionModel = require("./models/Intermediacion");
const PropietarioModel = require("./models/Propietario");
const PropietarioSecundarioModel = require("./models/PropietarioSecundario");
const SectorModel = require("./models/Sector");
const SucursalModel = require("./models/Sucursal");
const TipoInmuebleModel = require("./models/TipoInmueble");

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

AgenteInmobiliarioModel(sequelize);
AmbientesModel(sequelize);
ApoderadoModel(sequelize);
CiudadModel(sequelize);
CodigoInmuebleModel(sequelize);
ComodidadesModel(sequelize);
ContratoModel(sequelize);
DocumentosDigitalesModel(sequelize);
DocumentosFisicosModel(sequelize);
EstadoModel(sequelize);
ImagenesInmuebleModel(sequelize);
InmuebleModel(sequelize);
IntermediacionModel(sequelize);
PropietarioModel(sequelize);
PropietarioSecundarioModel(sequelize);
SectorModel(sequelize);
SucursalModel(sequelize);
TipoInmuebleModel(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  AgenteInmobiliario,
  Ambientes,
  Apoderado,
  Ciudad,
  CodigoInmueble,
  Comodidades,
  Contrato,
  DocumentosDigitales,
  DocumentosFisicos,
  Estado,
  ImagenesInmueble,
  Inmueble,
  Intermediacion,
  Propietario,
  PropietarioSecundario,
  Sector,
  Sucursal,
  TipoInmueble,
} = sequelize.models;

// !Relaciones 1 a 1:
// ?Inmueble vs Contrato
Inmueble.hasOne(Contrato);
Contrato.belongsTo(Inmueble);

// ?Inmueble vs Intermediacion
Inmueble.hasOne(Intermediacion);
Intermediacion.belongsTo(Inmueble);

// ?Inmueble vs Comodidades
Inmueble.hasOne(Comodidades);
Comodidades.belongsTo(Inmueble);

// ?Inmueble vs Ambientes
Inmueble.hasOne(Ambientes);
Ambientes.belongsTo(Inmueble);

// ?Inmueble vs CodigoInmueble
Inmueble.hasOne(CodigoInmueble);
CodigoInmueble.belongsTo(Inmueble);

// ?Propietario vs PropietarioSecundario
Propietario.hasOne(PropietarioSecundario);
PropietarioSecundario.belongsTo(Propietario);

// ?Propietario vs Apoderado
Propietario.hasOne(Apoderado);
Apoderado.belongsTo(Propietario);

// !Relaciones 1 a N:
// ?Sucursal vs Intermediacion
Sucursal.hasMany(Intermediacion);
Intermediacion.belongsTo(Sucursal);

// ?Sucursal vs AgenteInmobiliario
Sucursal.hasMany(AgenteInmobiliario);
AgenteInmobiliario.belongsTo(Sucursal);

// ?Sucursal vs Propietario
Sucursal.hasMany(Propietario);
Propietario.belongsTo(Sucursal);

// ?AgenteInmobiliario vs Propietario
AgenteInmobiliario.hasMany(Propietario);
Propietario.belongsTo(AgenteInmobiliario);

// ?Propietario vs DocumentosFisicos
Propietario.hasMany(DocumentosFisicos);
DocumentosFisicos.belongsTo(Propietario);

// ?Propietario vs DocumentosDigitales
Propietario.hasMany(DocumentosDigitales);
DocumentosDigitales.belongsTo(Propietario);

// ?Propietario vs CodigoInmueble
Propietario.hasMany(CodigoInmueble);
CodigoInmueble.belongsTo(Propietario);

// ?Propietario vs Inmueble
Propietario.hasMany(Inmueble);
Inmueble.belongsTo(Propietario);

// ?AgenteInmobiliario vs Inmueble
AgenteInmobiliario.hasMany(Inmueble);
Inmueble.belongsTo(AgenteInmobiliario);

// ?Sucursal vs Inmueble
Sucursal.hasMany(Inmueble);
Inmueble.belongsTo(Sucursal);

// ?Inmueble vs ImagenesInmueble
Inmueble.hasMany(ImagenesInmueble);
ImagenesInmueble.belongsTo(Inmueble);

// ?Estado vs Ciudad
Estado.hasMany(Ciudad);
Ciudad.belongsTo(Estado);

// ?Estado vs Inmueble
Estado.hasMany(Inmueble);
Inmueble.belongsTo(Estado);

// ?Sector vs Inmueble
Sector.hasMany(Inmueble);
Inmueble.belongsTo(Sector);

// ?Ciudad vs Sector
Ciudad.hasMany(Sector);
Sector.belongsTo(Ciudad);

// ?Ciudad vs Inmueble
Ciudad.hasMany(Inmueble);
Inmueble.belongsTo(Ciudad);

// ?Tipo vs Inmueble
TipoInmueble.hasMany(Inmueble);
Inmueble.belongsTo(TipoInmueble);

// !Relaciones N a N:

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
