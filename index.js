require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const imageRoutes = require("./routes/image.routes");

app.use("/api/image", imageRoutes);

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
    <body>
      <p>This is api for image restoration!</p>
    </body>
  </html>
`;
  res.send(html);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Listening on Port ${port} and running in ${process.env.NODE_ENV}`
  );
});
