const express = require("express");
const app = express();
const path = require("path");
const body = require("body-parser")
const burger = require(path.join(__dirname, "..", "models", "burger.js"));

const router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  var burgerName = req.body.name;
  if(burgerName === ""){
    burgerName = "Empty Burger";
  }
  burger.create([
    burgerName
  ], function(){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var boolCheck = (req.body.devoured === "true");
  burger.update(boolCheck, req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;
