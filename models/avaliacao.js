/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avaliacao', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_usuario'
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_video'
    },
    valor: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'avaliacao',
    timestamps: false
  });
};
