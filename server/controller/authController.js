
const jwt = require('jsonwebtoken');
const pool = require('../database');

const authController = {
    register: async (req, res) => {
        try {
            // Check user
            const getQuery = "SELECT * FROM users WHERE username = ? OR email= ?";
            const [result] = await pool.query(getQuery, [req.body.username, req.body.email]);
            if(result.length){
                return res.status(409).json("User already exist")
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
    },
    login: async (req, res) => {
        try {
            // Check User 
            const query = "SELECT * FROM users WHERE email = ?";
            const [data] = await pool.query(query, [req.body.email]);

            if(data.length === 0) return res.status(404).json("user not found");

            // Check Psaaword
            const isPasswordCorrect = req.body.password === data[0].password;
            if(!isPasswordCorrect) return res.status(400).json("Wrong email or password");

            // Generate JWT token
            const token = jwt.sign({id: data[0].id}, "jwtkey");
            const { password, ...other} = data[0]

        } catch (error) {
            return res.status(500).json("Server Side Problem")
        }
    }
}

module.exports = authController;