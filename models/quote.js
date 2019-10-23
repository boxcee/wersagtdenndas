'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Quote.associate = function(models) {
    // associations can be defined here
  };
  return Quote;
};