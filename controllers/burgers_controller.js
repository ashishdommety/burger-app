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
    req.body.name
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
