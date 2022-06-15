const express = require("express");
const { dbConnection } = require("./database/config");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(express.json());

dbConnection();

server.listen( process.env.PORT);
server.use(cors());
//rutas
server.use('/api/auth', require('./routes/auth'));



server.use(express.static('public'));
console.log(
  `The server is running at http://localhost: ${process.env.PORT}`
);