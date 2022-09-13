const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    // aws ip
    host: "3.35.152.204",
    // mysql username
    user: "kosu",
    // mysql user password
    password: "tndud0396",
    // db name
    database: "order_system",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = { pool };