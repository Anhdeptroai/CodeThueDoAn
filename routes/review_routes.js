const express = require('express');
const routes = express.Router();
const reviewController = require('../controllers/review_controller');

routes.get('/review', reviewController.getReviewPage);

module.exports = routes;