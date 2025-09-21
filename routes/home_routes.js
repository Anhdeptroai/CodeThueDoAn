const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/home_controller');

routes.get('/', homeController.getHome);
routes.get('/trang-chu', homeController.getHome);

module.exports = routes;