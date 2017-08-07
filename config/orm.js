const connection = require("./connection.js");

var orm = {
  selectAll:function(tableInput, cb){
    var queryString = "SELECT * FROM ??";
    connection.query(queryString,[tableInput], function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  insertOne:function(table, columns, values, cb){
    var queryString = "INSERT INTO ?? VALUES (?)";
    connection.query(queryString,[table,{columns:values}], function(err,result){
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, objectColumnValues, conditionColumn, conditionValue, cb){
    var queryString = "UPDATE ?? SET ?? WHERE ??=?";
    connection.query(queryString,
      [table,objectColumnValues,conditionColumn,conditionValue],
    function(err,result){
      if(err) throw err;
      cb(result);
    });
  }
}

module.exports = orm;
