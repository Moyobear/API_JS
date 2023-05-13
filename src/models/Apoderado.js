const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "apoderado",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      nombre_apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ci: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      telf_hab: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telf_cel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentezco: {
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
