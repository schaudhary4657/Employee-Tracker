const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employee_DB"
});

connection.connect();

// Setting up connection.query to use promises instead of callbacks because this allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;