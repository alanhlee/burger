const mysql = require("mysql2");

module.exports = mysql.createConnection(
  myprocess.env.URL || "mysql://root:rootroot@localhost:3306/burgers_db"
);
