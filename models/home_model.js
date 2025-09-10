const pool = require("../configs/db");

const artical = {
    async getlistArticle() {
        const result = await pool.query("SELECT * FROM article");
        return result.rows;
    },

    async insertArticle(title, description, content) {
        const query = `INSERT INTO article (title_article, description_article, content_article) VALUES ($1, $2, $3)` 
        await pool.query(query, [title, description, content]);
    },

    async getArticleById(id) {
        const query = "SELECT * FROM article WHERE id = $1";
        const result = await pool.query(query, [id]);
        return result.rows[0];
    },

    async updateArticleById(id, title, description, content) {
        await pool.query("UPDATE article SET title_article = $1, description_article = $2, content_article = $3 WHERE id = $4",[title, description, content, id]);
    },

    async deleteArticleById(id) {
        const query = 'DELETE FROM article WHERE id = $1';
        await pool.query(query, [id]);
    }
}

module.exports = artical;