const express = require("express");
const app = express();
const onServer = () => {
  app.get("/coords", (req, res) => {
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
app.listen(3500);

module.exports = onServer;
