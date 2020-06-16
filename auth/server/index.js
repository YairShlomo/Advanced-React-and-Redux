const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ json: '*/*' }))

//server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Sertver listening on 3090");
