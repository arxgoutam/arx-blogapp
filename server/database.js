const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
});
// const pool = mysql.createPool({
//     host: "115.187.18.50",
//     user: "carecatd_arxblogapp",
//     password: "Arxblogapp",
//     database: "carecatd_arxblogapp"
// });

module.exports = pool;