/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_usuario'
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_video'
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dt_comentario: {
      type: DataTypes.TIME,
      allowNull: false
    }
  }, {
    tableName: 'comentario',
    timestamps: false
  });
};
