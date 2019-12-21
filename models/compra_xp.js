/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compra_xp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Compra_xp_id_seq"::regclass)',
      primaryKey: true
    },
    id_pacote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Compra_xp_id_pacote_seq"::regclass)',
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Compra_xp_id_usuario_seq"::regclass)',
      primaryKey: true
    },
    id_sis_comp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Compra_xp_id_sis_comp_seq"::regclass)',
      primaryKey: true
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
