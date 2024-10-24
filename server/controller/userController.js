

const pool = require('../database')

const userController = {
    getAllUser: async (req, res)=>{
        try {
            const query = "SELECT * FROM users";
            const [results] = await pool.query(query);
            res.json({data: results});
        } catch (error) {
            res.status(500).json("Server Side Error", error)
        }
    },
}


module.exports = userController;