const orm = require("../config/orm.js");

var burger = {
  all: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  create: function(cols,vals,cb){
    orm.insertOne("burgers",cols,vals,function(res){
      cb(res);
    });
  },
  update: function(objectColVals, conditionCol,conditionVal, cb){
    orm.updateOne("burgers", objectColVals, conditionCol, conditionVal, function(res){
      cb(res);
    })
  }
};

module.exports = burger;
