'use strict';
module.exports = (sequelize, DataTypes) => {
  const Timer = sequelize.define('Timer', {
    title: DataTypes.STRING
  }, {});
  Timer.associate = function(models) {
    // associations can be defined here
  };
  return Timer;
};