const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "tipoInmueble",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      tipo_inmueble: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      acronimo: {
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
