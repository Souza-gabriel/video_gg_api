/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra_xp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_pacote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_pacote'
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "id_usuario"
    },
    id_sis_comp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    dt_compra: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'compra_xp',
    timestamps: false
  });
};
