/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Comentario_id_seq"::regclass)',
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Comentario_id_usuario_seq"::regclass)'
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Comentario_id_video_seq"::regclass)'
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
