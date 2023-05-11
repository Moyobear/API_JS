const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "ambientes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      cocina_empotrada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      estar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      estudio_biblioteca: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      gimnasio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      vestier: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      jardines: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      estacionamiento_visita: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      maletero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      patio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      lavandero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      piscina: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      sauna: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
