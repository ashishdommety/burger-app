const path = require("path");
const connection = require(path.join(__dirname, "connection.js"));

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(vals, cb) {

    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";

    connection.query(queryString, [vals,false], function(err, result) {
      console.log(queryString);
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateOne: function(vals, burgersId, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    connection.query(queryString,[
      {devoured: vals},
      {id: burgersId}
    ],function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}

module.exports = orm;
