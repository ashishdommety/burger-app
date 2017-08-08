const path = require("path");

const orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
  all: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  create: function(vals,cb){
    orm.insertOne(vals,function(res){
      cb(res);
    });
  },
  update: function(vals, burgersId, cb){
    orm.updateOne(vals, burgersId, function(res){
      cb(res);
    })
  }
};

module.exports = burger;
