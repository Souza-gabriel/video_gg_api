/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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
    dt_visualizacao: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'historico',
    timestamps: false
  });
};
