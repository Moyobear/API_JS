const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "documentosDigitales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      copia_ci_propietarios: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      copia_doc_propiedad: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      copia_rif_propietarios: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      ced_catastral: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      doc_condominio_parcelamiento: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      solvencia_municipal: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      hidrocentro: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      acta_matrimonio: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      reg_viv_ppal_format33: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      llaves_inmueble: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      liberacion_hipoteca: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      poder_registrado: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      plano_tipo_planta: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      observaciones_docs_dig: {
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
