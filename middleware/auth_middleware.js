function requireLogin(req, res, next) {
    if (req.session && req.session.user) {
        // đã đăng nhập -> cho qua
        next();
    } else {
        // chưa đăng nhập -> chuyển về trang login
        res.redirect('/dang-nhap');
    }
}

module.exports = requireLogin;