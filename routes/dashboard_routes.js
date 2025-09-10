const express = require('express');
const routes = express.Router();
const dashboardController = require('../controllers/dashboard_controller');

routes.get('/dashboard-trang-chu', dashboardController.getDashboard_Home);
routes.get('/dashboard-trang-chu/:id/cap-nhat', dashboardController.getDashboard_updateArticle);
routes.get('/dashboard-tai-khoan', dashboardController.getDashboard_Account);
routes.post('/dashboard-tai-khoan', dashboardController.insertAccount);
routes.post('/dashboard-trang-chu', dashboardController.insertArticle);
routes.post('/dashboard-trang-chu/:id/cap-nhat', dashboardController.updateArticle);
routes.post('/dashboard-trang-chu/:id/xoa', dashboardController.deleteArticle);

module.exports = routes;