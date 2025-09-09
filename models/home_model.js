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
    }
}

module.exports = artical;