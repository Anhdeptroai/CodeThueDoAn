const articleController = {
    getArticle1: (req, res) => {
        res.render('end-user/articleDetail1_page');
    },

    getArticle2: (req, res) => {
        res.render('end-user/articleDetail2_page');
    },
    getArticle3: (req, res) => {
        res.render('end-user/articleDetail3_page');
    }
};
module.exports = articleController;