module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  // Person.associate = function (models) {
  //   // associations can be defined here
  // };
  return Person;
};
