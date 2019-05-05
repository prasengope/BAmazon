require("dotenv").config();
const mysql = require('mysql');
var password = require("./password");

module.exports = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: password.database.password,
  database: "bamazon"
})