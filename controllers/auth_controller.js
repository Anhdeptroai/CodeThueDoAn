const users = require("../models/auth_model");

const loginController = {
    getLogin: (req, res) => {
        res.render('public/login_page', {error: null} );
    },

    verifyLogin: async(req, res) => {
        const {email, password} = req.body;
        const user = await users.findByEmail(email);

        if(!user || user.password !== password) {
            req.session.user = { id: user.id, email: user.email, decentralization: user.decentralization };
            return res.render("public/login_page", { error: "Sai email hoặc mật khẩu!" });
        } else {
            // login thành công -> set session
            req.session.user = { id: user.id, email: user.email, decentralization: user.decentralization };
            // Kiểm tra quyền với role = 0
            if (user.decentralization === 0) {
                return res.render("public/middleRedirect_page");
            } else {
                return res.redirect("/trang-chu");
            }
        }
    }
}

module.exports = loginController;