'use strict';
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Quote.associate = function (models) {
    // associations can be defined here
  };
  return Quote;
};
