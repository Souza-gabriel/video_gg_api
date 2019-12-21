/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avaliacao', {
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Avaliacao_id_usuario_seq"::regclass)',
      primaryKey: true
    },
    id_video: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Avaliacao_id_video_seq"::regclass)',
      primaryKey: true
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
