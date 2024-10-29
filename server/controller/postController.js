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
    },
    getPost: async (req, res) => {
        try {
            const id = req.params.id
            const query = "SELECT `username`, `email`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date`, FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=?";
            const[rows] = await pool.query(query, [id]);

            if(rows.length === 0) {
                return res.status(404).json("Post not found");
            }
            res.json({data:rows[0]})
            
        } catch (error) {
            res.status(500).json("Server Side Problem");
        }
    }
}

module.exports = postController;