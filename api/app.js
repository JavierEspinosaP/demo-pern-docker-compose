const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors')

app.use(express.json());
app.use(cors())
app.use("/books", require("./routes/books.js"));
app.use("/genres", require("./routes/genres.js"));


app.listen(port, () =>
  console.log(`Servidor levantado en el puerto ${port}`)
);
