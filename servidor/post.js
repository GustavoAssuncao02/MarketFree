const express = require("express");
const server = express();
const port = 8081;
const cors = require("cors");
const bodyParser = require("body-parser");

const routerForm = require("./api/rotas.js");

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routerForm);

server.listen(port, (error) => {
  if (error) {
    console.log("Error");
    return;
  }
  console.log(`Rodando na porta: ${port}`);
});
