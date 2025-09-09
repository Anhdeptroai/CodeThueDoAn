const pool = require("../configs/db");

const User = {
    async findByEmail(email) {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows[0];
    }
};

module.exports = User;