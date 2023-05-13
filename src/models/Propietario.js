const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "propietario",
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
      estado_civil: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telf_ofic: {
        type: DataTypes.STRING,
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "El campo tiene que ser un correo válido",
          },
        },
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propietario_actual: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      borrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
};
