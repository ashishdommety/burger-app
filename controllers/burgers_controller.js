const express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// QUESTION: Not sure if this is right?
router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
