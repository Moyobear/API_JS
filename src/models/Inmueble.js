const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "inmueble",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      ced_catastral: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      habs: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hab_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      banios: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      banio_servicio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      puesto_estacionamiento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mts_terreno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mts_construccion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      antiguedad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      observ_inmueble: {
        type: DataTypes.STRING,
      },
      otras_caracteristicas: {
        type: DataTypes.STRING,
      },
      operacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visible: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      destacado: {
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
