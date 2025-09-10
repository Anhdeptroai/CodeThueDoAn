const pool = require("../configs/db");

const User = {
    async getlistAccount() {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    },
    
    async insertAccount(email, password, decentralization) {
        const query = `INSERT INTO users (email, password, decentralization) VALUES ($1, $2, $3)` 
        await pool.query(query, [email, password, decentralization]);
    },

    async findByEmail(email) {
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows[0];
    }
};

module.exports = User;