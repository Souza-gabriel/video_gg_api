/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pacote_xp', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qtd_xp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    tableName: 'pacote_xp',
    timestamps: false
  });
};
