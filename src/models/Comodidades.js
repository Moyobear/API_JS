const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "comodidades",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      planta_electrica: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      vigilancia_privada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      linea_telefonica: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      rejas_seguridad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      tv_cable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      aac: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      jacuzzi: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      vista_panoramica: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
