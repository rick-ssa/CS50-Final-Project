const express = require('express');
const routes = require('./routes');
const createTable = require('../models/location')
const cors = require('cors')
const server = express();

createTable()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333);