/* eslint-env node */
"use strict";

const path = require("path");
const express = require("express");
const helmet = require("helmet");

const staticFileLocation = path.join(__dirname, "app");
const home = "index.html";

const app = express();
app.use(helmet());

app.get("/", (request, response) => {
  response.send(`${staticFileLocation}/${home}`);
  response.end();
});

app.use(express.static(staticFileLocation));

const port = 8081;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
