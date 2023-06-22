const { Genre } = require("../models/index");

const GenreController = {
  insert(req, res) {
    Genre.create(req.body)
      .then((genre) => {
        res.send(genre);
      })
      .catch((err) => console.error(err));
  },
  async getAll(req, res) {
    try {
      const genres = await Genre.findAll();
      res.send(genres);
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
};

module.exports = GenreController;
