/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    min_idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'categoria',
    timestamps: false
  });
};
