const express = require("express");
const BookController = require("../controllers/BookController");
const router = express.Router();

router.post("/", BookController.insert);
router.get("/", BookController.getAll);
router.get("/id/:id", BookController.getById);
router.delete("/:id", BookController.delete);
router.put("/:id", BookController.update);

module.exports = router;
