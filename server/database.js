const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: "115.187.18.50",
    user: "carecatd_arxblogapp",
    password: "Arxblogapp",
    database: "carecatd_arxblogapp"
});

module.exports = pool;