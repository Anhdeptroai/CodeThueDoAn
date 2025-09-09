const express = require('express');
const routes = express.Router();
const dashboardController = require('../controllers/dashboard_controller');

routes.get('/dashboard', dashboardController.getDashboard);
routes.post('/dashboard', dashboardController.insertArticle);

module.exports = routes;