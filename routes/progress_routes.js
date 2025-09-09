const express = require('express');
const routes = express.Router();
const progressController = require('../controllers/progress_controller');

routes.get('/lich-trinh', progressController.getProgress);

module.exports = routes;