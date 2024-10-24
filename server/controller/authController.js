

const pool = require('../database');

const authController = {
    register: async (req, res) => {
        try {
            // Check user
            const getQuery = "SELECT * FROM users WHERE username = ? OR email= ?";
            const [result] = await pool.query(getQuery, [req.body.username, req.body.email]);
            if(result.length){
                return req.status(409).json("User already exist")
            }
            // insert user 
            const insertQuery = "INSERT INTO users(`full_name`, `username`, `email`, `password`) VALUES (?, ?, ?, ?)";
            const values = [req.body.full_name, req.body.username, req.body.email, req.body.password];
            await pool.query(insertQuery, values);
            return res.status(200).json("User Created Successfully. ")
        } catch (error) {
            console.log(error);
            return res.status(500).json("Server Side Problem")
        }
    }
}

module.exports = authController;