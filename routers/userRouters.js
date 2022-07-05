const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(req.body);
  // res.send("request processed in user router");

  // Create Operation
  new Model(formdata)
    .save()
    .then((result) => {
      console.log("data saved!!");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
