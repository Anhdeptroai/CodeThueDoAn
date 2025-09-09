const express = require('express');
const routes = express.Router();
const authController = require('../controllers/auth_controller');

routes.get('/dang-nhap', authController.getLogin);
routes.post('/dang-nhap', authController.verifyLogin);

module.exports = routes;