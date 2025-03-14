const mysql = require("mysql2");
//for mysql
const pool = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "expressjs_db"
    }
);

module.exports = pool.promise();
