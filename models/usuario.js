/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    qtd_xp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    biografia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dt_nascimento: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usuario',
    timestamps: false
  });
};
