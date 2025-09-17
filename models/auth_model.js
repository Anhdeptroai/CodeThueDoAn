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
    },

    async getAccountById(id) {
        const query = "SELECT * FROM users WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    async updateAccountById(id, email, password, decentralization) {
        await pool.query("UPDATE users SET email = $1, password = $2, decentralization = $3 WHERE id = $4",[email, password, decentralization, id]);
    },

    async deleteAccountById(id) {
        const query = 'DELETE FROM users WHERE id = $1';
        await pool.query(query, [id]);
    }
};

module.exports = User;