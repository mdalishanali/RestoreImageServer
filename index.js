require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

const cors = require("cors");

const imageRoutes = require("./routes/image.routes");


app.use("/api/image", imageRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
