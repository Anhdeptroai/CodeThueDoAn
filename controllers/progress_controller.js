const user = require("../models/auth_model");
const progress = require("../models/progress_model");

const progressController = {
    getProgress: async (req, res) => {
        const progresslist  = await progress.getlistProgress();
        const users  = await user.getlistAccount();
        res.render('end-user/progress_page', { progresslist, users });
    }
}

module.exports = progressController;