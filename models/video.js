/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Video_id_seq"::regclass)',
      primaryKey: true
    },
    id_repositorio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Video_id_repositorio_seq"::regclass)',
      primaryKey: true
    },
    sc_duracao: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_usu_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 'nextval("Video_id_usu_post_seq"::regclass)',
      primaryKey: true
    },
    xp_preco: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dt_publicacao: {
      type: DataTypes.TIME,
      allowNull: false
    },
    classificacao_idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    renda: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    xp_oferecido: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'video',
    timestamps: false
  });
};
