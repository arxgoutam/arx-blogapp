const pool = require('../database');

const postController = {
    getAllpost: async (req, res) => {
        try {
            const query = req.query.cat? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";
            const [rows] = req.query.cat ? await pool.query(query, [req.query.cat]) : await pool.query(query);
            res.json({data: rows});
        } catch (error) {
            res.status(500).json("Server Side Problem");
        }
    }
}

module.exports = postController;