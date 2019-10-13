'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};