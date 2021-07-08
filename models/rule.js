'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User_Rule,{ foreignKey: 'rule_id'})
      // define association here
    }
  };
  Rule.init({
    ruleName: DataTypes.STRING,
    ruleDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rule',
  });
  return Rule;
};