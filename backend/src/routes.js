const express = require('express');
const locationController = require('../controllers/location')

const routes = express.Router();

routes.post("/local",locationController.store)

routes.get("/local",locationController.index)

module.exports = routes;