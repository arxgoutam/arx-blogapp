const pool = require('../database');
const jwt = require('jsonwebtoken');

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

    getPost: async (req, res)=>{
        try {
            const id = req.params.id;
            const query = "SELECT p.id, `username`, `email`, `title`, `post_desc`, p.img, u.profile_img AS userImg, `cat`, `date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"
            const [row] = await pool.query(query, [id]);
            if (row.length === 0) {
                return res.status(404).json({ message: "Post not found" }); // Handle case where no post is found
            }
            res.json({
                data: row[0]
            })
        } catch (error) {
            res.status(500).json("Server Side Problem !!!");
            
        }
    },

    postPost: async (req, res) => {
        try {
            // check token
            const token = req.cookies.access_token;
            if(!token) return res.status(401).json("Not Authenticated!");

            // Verify the JWT token
            jwt.verify(token, "jwtkey", async (err, userInfo) => {
                if(err) return res.status(403).json("Token is not valid!");

                // Prepare the query and values
                const query = "INSERT INTO posts(`title`, `post_desc`, `img`, `cat`, `post_date`, `uid`) VALUES (?)";
                const values = [
                    req.body.title,
                    req.body.desc,
                    req.body.img,
                    req.body.cat,
                    req.body.date,
                    userInfo.id
                ];

                try {
                    const [result] = await pool.query(query, [values]);
                } catch (dbError) {
                    res.status(500).json("Server error while creating post");
                }
            });
        } catch (error) {
            res.status(500).json("Server error while creating post!");
        }
    },

    postUpdate: async (req, res) => {
        try {
            // check token
            const token = req.cookies.access_token
            if(!token) return res.status(401).json("Not Authenticated!");

            //Verify the JWT token
            jwt.verify(token, "jwtkey", async(err, userInfo)=>{
                if(err) return res.status(403).json("Token is not valid!!");

                const postId = req.params.id;
                const query = "UPDATE posts SET";
                const values =[];

                try {
                    // Execute the query and update the post
                    // Check if any rows were updated
                } catch (error) {
                    res.status(500).json("Server error while updating post!");
                }
            });
        } catch (error) {
            res.status(500).json("Server error while updating post!");
        }
    },
}

module.exports = postController;