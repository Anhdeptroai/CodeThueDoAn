const express = require('express');
const routes = express.Router();
const articleController = require('../controllers/article_controller');

routes.get('/article/1', articleController.getArticle1);
routes.get('/article/2', articleController.getArticle2);
routes.get('/article/3', articleController.getArticle3);

module.exports = routes;