

const pool = require('../database')

const userController = {
    getAllUser: async (req, res)=>{
        try {
            const query = "SELECT * FROM users";
            const [results] = await pool.query(query);
            res.json({data: results});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Database query failed' });
        }
    },
}


module.exports = userController;