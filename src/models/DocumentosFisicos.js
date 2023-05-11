const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "documentosFisicos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      copia_ci_propietarios: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      copia_doc_propiedad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      copia_rif_propietarios: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ced_catastral: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      doc_condominio_parcelamiento: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      solvencia_municipal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hidrocentro: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      acta_matrimonio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      reg_viv_ppal_format33: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      llaves_inmueble: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      liberacion_hipoteca: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      poder_registrado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      plano_tipo_planta: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      observaciones_docs: {
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
