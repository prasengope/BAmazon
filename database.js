const mysql = require('mysql');
var password = require("./password");
require("dotenv").config();

module.exports = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "Sylhet123",
  database: "bamazon"
})