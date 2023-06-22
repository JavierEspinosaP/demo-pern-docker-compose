const { Book, Genre, GenreBook } = require("../models/index");

const BookController = {
  insert(req, res) {
    Book.create(req.body)
      .then((book) => {
        book.addGenre(req.body.GenreId); //añade el genero en la tabla intermedia
        res.status(201).send(book);
      })
      .catch((err) => console.error(err));
  },
  async getAll(req, res) {
    try {
      const books = await Book.findAll({
        include: [
          { model: Genre, attributes: ["name"], through: { attributes: [] } },
        ],
      });
      res.send(books);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      const book = await Book.destroy({
        where: {
          id,
        },
      });
      const genre = await GenreBook.destroy({
        where: {
          BookId: id,
        },
      });
      res.send({
        message: "The book with id " + id + " has been removed",
        id: req.params.id,
        book,
        genre,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async update(req, res) {
    try {
      await Book.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const book = await Book.findByPk(req.params.id);
      book.setGenres(req.body.GenreId); //actualiza el género en la tabla intermedia
      res.send({message:"Libro actualizado con éxito",book});
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "no ha sido posible actualizado el libro" });
    }
  },
  async getById(req, res) {
    try {
      const book = await Book.findByPk(req.params.id, {
        include: [
          { model: Genre, attributes: ["id"], through: { attributes: [] } },
        ],
      });
      res.send(book)
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "no ha sido posible obtener el libro" });
    }
  },
};

module.exports = BookController;
