const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "intermediacion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      comision: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      autorizacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      exclusividad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      agencia_inmobiliaria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agente_inmobiliario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
