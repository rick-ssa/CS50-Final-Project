const express = require('express');
const routes = require('./routes');
const createTable = require('../models/location')

const server = express();

createTable()

server.use(express.json())
server.use(routes)

server.listen(3333);