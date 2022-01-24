const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlInters = "SELECT * FROM instaheilasr.get_pass;";
  db.query(sqlInters, (err, result) => {
    err ? console.log(err) : res.send(result);
  });
});

app.post("/api/postKey", (req, res) => {
  const name = req.body.name;
  const pas = req.body.password;
  const sqlInters = "INSERT INTO get_pass (email, password) VALUES (?, ?);";
  db.query(sqlInters, [name, pas], (err, result) => {
    err ? console.log(err) : console.log(result);
  });
});

app.delete("/api/delete/:name", (req, res) => {
  const getName = req.params.name;

  const sqlDelete = "DELETE FROM get_pass WHERE id = ? ";
  db.query(sqlDelete, getName, (err, result) => {
    if (err) console.log(err);
  });
});

let port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Run ${port}...`));
