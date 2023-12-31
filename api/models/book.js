"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsToMany(models.Genre, {
        through: models.GenreBook,
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  // Book.sync({
  //   force:true
  // })
  return Book;
};
