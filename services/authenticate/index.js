const express = require('express');
const cors = require("cors")
const app = express();

app.use(cors());
app.use((req, res, next) => {

  console.log("A new request received at " + Date.now());
  let a = " congratulations...!!!  you are logged in successfully ";
  console.log(a);
  res.send(a);

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password"
  });

  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM task_manager.persons", function (err, result, fields) {
      if (err) throw err;
      console.log(result[0].FirstName);
    });

  });

});

app.get('/home', (req, res) => {


});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(3001, () => console.log('Example app listening on port 30001'));

