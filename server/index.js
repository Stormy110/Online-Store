require('dotenv').config();

const http = require("http");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const es6Renderer = require("express-es6-template-engine");
const session = require("session")
const FileStore = require("session-file-store")(session);
const app = express();
const server = http.createServer(app);
const bcrypt = require("bcryptjs");


const logger = morgan("dev");
const hostname = "0.0.0.0";
const port = 4000;



const { layout } = require("./utils")
const homeController = require("./controllers/home")


app.use(logger);
app.use(helmet);