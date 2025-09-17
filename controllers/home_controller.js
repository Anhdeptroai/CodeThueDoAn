const article = require('../models/home_model');

const homeController = {
    getHome: async(req, res) => {
        const articles = await article.getlistArticle();
        res.render('end-user/home_page', { articles });
    },

    getArticleDetail: async(req, res) => {
        const { id } = req.params;
        const articleDetail = await article.getArticleById(id);
        res.render("end-user/articleDetail_page", { article: articleDetail });
    }
}
module.exports = homeController;