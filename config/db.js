const mySql = require("mysql");

const db = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "asrbek1625",
  database: "instaheilasr",
  multipleStatements: true,
});

module.exports = db;
