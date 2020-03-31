const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const onServer = () => {
  app.get("/coords", (req, res) => {
    res.setHeader(
      "Access-Controle-Allow-Methods",
      "GET,POST,OPTIONS,PUT,PATCH,DELETE"
    );
    res.sendFile(__dirname + "/arquivos/coord.json");
  });
  app.get(
    "/times",
    (req, res) => {
      res.sendFile(__dirname + "/arquivos/times.json");
    },
    () => {}
  );
};
app.listen(80);

module.exports = onServer;
