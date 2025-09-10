const article = require('../models/home_model');
const user = require("../models/auth_model");

const dashboardController = {
    getDashboard_Home: async(req, res) => {
        const articles = await article.getlistArticle(); 
        res.render('admin/manage_page/dashboard_home', { articles });
    },

    getDashboard_Account: async(req, res) => {
        const users  = await user.getlistAccount(); 
        res.render('admin/manage_page/dashboard_account', { users });
    },

    getDashboard_updateArticle: async(req, res) => {
        const { id } = req.params;
        const articleData = await article.getArticleById(id);
        res.render('admin/manage_page/update_page/updateArticle', { articleData });
    },

    insertArticle: async(req, res) => {
        const { title, description, content } = req.body;
        await article.insertArticle(title, description, content);
        res.redirect("/dashboard-trang-chu");
    },

    insertAccount: async(req, res) => {
        const { email, password, decentralization } = req.body;
        await user.insertAccount(email, password, decentralization);
        res.redirect("/dashboard-tai-khoan");
    },

    updateArticle: async (req, res) => {
        const { id } = req.params;
        const { title, description, content } = req.body;
        await article.updateArticleById(id, title, description, content);
        res.redirect("/dashboard-trang-chu");
    },

    deleteArticle: async (req, res) => {
        const { id } = req.params;
        await article.deleteArticleById(id);
        res.redirect("/dashboard-trang-chu");
    }
}

module.exports = dashboardController;