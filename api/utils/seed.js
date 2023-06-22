const {Book, Genre, GenreBook} = require('../models'); 

const books_seed = require('./books_seed');
const genres_seed = require('./genres_seed');
const genrebooks_seed = require('./genresbooks_seed');

  
GenreBook.bulkCreate(genrebooks_seed)
  .then(() => console.log("Genrebooks seeded successfully."))
  .catch((err) => console.error(err));

Book.bulkCreate(books_seed)
  .then(() => console.log("Books seeded successfully."))
  .catch((err) => console.error(err));

Genre.bulkCreate(genres_seed)
  .then(() => console.log("Genres seeded successfully."))
  .catch((err) => console.error(err));

