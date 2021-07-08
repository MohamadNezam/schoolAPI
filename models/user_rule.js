'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id'});
      this.belongsTo(models.Rule, { foreignKey: 'rule_id'});
    }
  };
  User_Rule.init({
    user_id: DataTypes.INTEGER,
    rule_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Rule',
  });
  return User_Rule;
};