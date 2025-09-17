const article = require('../models/home_model');
const user = require("../models/auth_model");
const progress = require("../models/progress_model");

const dashboardController = {
    getDashboard_Home: async(req, res) => {
        const articles = await article.getlistArticle();
        res.render('admin/manage_page/dashboard_home', { articles });
    },

    getDashboard_Account: async(req, res) => {
        const users  = await user.getlistAccount();
        res.render('admin/manage_page/dashboard_account', { users });
    },

    getDashboard_Progress: async(req, res) => {
        const progresslist  = await progress.getlistProgress();
        const users  = await user.getlistAccount();
        res.render('admin/manage_page/dashboard_progress', { progresslist, users });
    },

    getDashboard_updateArticle: async(req, res) => {
        const { id } = req.params;
        const articleData = await article.getArticleById(id);
        res.render('admin/manage_page/update_page/updateArticle', { articleData });
    },

    getDashboard_updateAccount: async(req, res) => {
        const { id } = req.params;
        const accountData = await user.getAccountById(id);
        res.render('admin/manage_page/update_page/updateAccount', { accountData });
    },

    getDashboard_updateProgress: async(req, res) => {
        const { id } = req.params;
        const progressData = await progress.getProgressById(id);
        res.render('admin/manage_page/update_page/updateProgress', { progressData });
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

    insertProgress: async(req, res) => {
        const { user_id, title, description, percent, deadline, status } = req.body;
        await progress.insertProgress(user_id, title, description, percent, deadline, status);
        res.redirect("/dashboard-tien-trinh");
    },

    updateArticle: async (req, res) => {
        const { id } = req.params;
        const { title, description, content } = req.body;
        await article.updateArticleById(id, title, description, content);
        res.redirect("/dashboard-trang-chu");
    },

    updateAccount: async (req, res) => {
        const { id } = req.params;
        const { email, password, decentralization } = req.body;
        await user.updateAccountById(id, email, password, decentralization);
        res.redirect("/dashboard-tai-khoan");
    },

    updateProgress: async (req, res) => {
        const { id } = req.params;
        const { user_id, title, description, percent, deadline, status} = req.body;
        await progress.updateProgressById(id, user_id, title, description, percent, deadline, status);
        res.redirect("/dashboard-tien-trinh");
    },

    deleteArticle: async (req, res) => {
        const { id } = req.params;
        await article.deleteArticleById(id);
        res.redirect("/dashboard-trang-chu");
    },

    deleteAccount: async (req, res) => {
        const { id } = req.params;
        await user.deleteAccountById(id);
        res.redirect("/dashboard-tai-khoan");
    },

    deleteProgress: async (req, res) => {
        const { id } = req.params;
        await progress.deleteProgressById(id);
        res.redirect("/dashboard-tien-trinh");
    }
}

module.exports = dashboardController;