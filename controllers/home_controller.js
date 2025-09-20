const homeController = {
    getHome: async(req, res) => {
        res.render('end-user/home_page');
    },
}
module.exports = homeController;