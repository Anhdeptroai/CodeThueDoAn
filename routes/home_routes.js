const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/home_controller');

routes.get('/trang-chu', homeController.getHome);
routes.get('/', homeController.getHome);

module.exports = routes;