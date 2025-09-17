const express = require('express');
const routes = express.Router();
const dashboardController = require('../controllers/dashboard_controller');
const requireLogin = require('../middleware/auth_middleware'); // nếu tạo riêng

routes.get('/dashboard-trang-chu', requireLogin,dashboardController.getDashboard_Home);
routes.get('/dashboard-trang-chu/:id/cap-nhat', requireLogin,dashboardController.getDashboard_updateArticle);
routes.get('/dashboard-tai-khoan', requireLogin,dashboardController.getDashboard_Account);
routes.get('/dashboard-tai-khoan/:id/cap-nhat', requireLogin,dashboardController.getDashboard_updateAccount);
routes.get('/dashboard-tien-trinh', requireLogin,dashboardController.getDashboard_Progress);
routes.get('/dashboard-tien-trinh/:id/cap-nhat', requireLogin,dashboardController.getDashboard_updateProgress);
routes.post('/dashboard-tai-khoan', requireLogin,dashboardController.insertAccount);

routes.post('/dashboard-trang-chu', requireLogin,dashboardController.insertArticle);
routes.post('/dashboard-trang-chu/:id/cap-nhat', requireLogin,dashboardController.updateArticle);
routes.post('/dashboard-trang-chu/:id/xoa', requireLogin,dashboardController.deleteArticle);

routes.post('/dashboard-tai-khoan/:id/cap-nhat', requireLogin,dashboardController.updateAccount);
routes.post('/dashboard-tai-khoan/:id/xoa', requireLogin,dashboardController.deleteAccount);


routes.post('/dashboard-tien-trinh', requireLogin,dashboardController.insertProgress);
routes.post('/dashboard-tien-trinh/:id/cap-nhat', requireLogin,dashboardController.updateProgress);
routes.post('/dashboard-tien-trinh/:id/xoa', requireLogin,dashboardController.deleteProgress);

module.exports = routes;