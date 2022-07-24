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

// to fetch all the users data
router.get("/getall", (req, res) => {
  Model.find({})
    .populate("contacts")
    .then((result) => {
      console.log("user Data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.put("/pushupdate/:id", (req, res) => {
  console.log(req.body);
  Model.findByIdAndUpdate(req.params.id, { $push: req.body }, { new: true })
    .populate("contacts")
    .then((result) => {
      console.log("user Data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

// for login page
router.post("/authenticate", (req, res) => {
  const formdata = req.body;

  // to find the first entry
  Model.findOne({ email: formdata.email, password: formdata.password })
    .populate("contacts")
    .then((userdata) => {
      if (userdata) {
        console.log("login success");
        res.status(200).json(userdata);
      } else {
        console.log("login failed");
        res.status(300).json({ loginStatus: false });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
