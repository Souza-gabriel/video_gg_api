/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Historico_id_seq"::regclass)',
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Historico_id_usuario_seq"::regclass)',
      primaryKey: true
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Historico_id_video_seq"::regclass)',
      primaryKey: true
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
