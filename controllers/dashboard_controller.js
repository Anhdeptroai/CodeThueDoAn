const article = require('../models/home_model');

const dashboardController = {
    getDashboard: (req, res) => {
        res.render('admin/dashboard_page');
    },

    insertArticle: async(req, res) => {
        const { title, description, content } = req.body;
        await article.insertArticle(title, description, content);
        res.redirect("/dashboard");
    }
}

module.exports = dashboardController;