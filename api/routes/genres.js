const express = require("express");
const GenreController = require("../controllers/GenreController");
const router = express.Router();

router.post("/", GenreController.insert);
router.get("/",GenreController.getAll)

module.exports = router;
