'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GenreBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Genre.belongsToMany(models.Book, { through: GenreBook });
      models.Book.belongsToMany(models.Genre, { through: GenreBook });
    }
  }
  GenreBook.init({
    GenreId: DataTypes.INTEGER,
    BookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GenreBook',
  });
  
  // No recomendado hacer 'force: true' en producción
  // GenreBook.sync({ force: true })
  
  return GenreBook;
};
