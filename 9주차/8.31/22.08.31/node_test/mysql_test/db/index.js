const mysql = require("mysql2/promise");

const pool = mysql.createPool({

  host : "3.35.152.204",
  user : "kosu",
  password : "tndud0396",
  database : "jony",
  waitForConnections : true,
  connectionLimit : 10,
  queueLimit : 0,
})

module.exports = {pool};