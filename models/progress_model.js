const pool = require("../configs/db");

const progress = {
    async getlistProgress() {
        const result = await pool.query("SELECT * FROM progress");
        return result.rows;
    },

    async insertProgress(user_id, title, description, percent, deadline, status) {
        const query = `INSERT INTO progress (user_id, title_progress, description_progress, percent, deadline, status) 
                        VALUES ($1, $2, $3, $4, $5, $6)`;
        await pool.query(query, [user_id, title, description, percent, deadline, status]);
    },

    async getProgressById(id) {
        const query = "SELECT * FROM progress WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    async updateProgressById(id, user_id, title, description, percent, deadline, status) {
        await pool.query("UPDATE progress SET user_id = $1, title_progress = $2, description_progress = $3, percent = $4, deadline = $5, status = $6 WHERE id = $7",[user_id, title, description, percent, deadline, status, id]);
    },

    async deleteProgressById(id) {
        const query = 'DELETE FROM progress WHERE id = $1';
        await pool.query(query, [id]);
    }
}

module.exports = progress;