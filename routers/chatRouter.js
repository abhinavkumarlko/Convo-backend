const express = require("express");
const router = express.Router();
const Model = require("../models/chatModel");

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
    // .populate("contacts")
    .then((result) => {
      console.log("user Data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});
router.get("/getbyemail/:email", (req, res) => {
  Model.findOne({ email: req.params.email })
    .then((result) => {
      console.log("user Data fetched");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyuser/:userid/:recid", (req, res) => {
  console.log('user : ', req.params.userid, 'rec : ', req.params.recid);
  Model.find({ user: req.params.userid, rec: req.params.recid })
    .then((result) => {
      console.log("chat Data fetched");
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

//managing user and update
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get("/getbyid/:userid", (req, res) => {
  console.log(req.params.userid);
  res.send("Response from getbyid");
});

router.put("/update/:id", (req, res) => {
  const formdata = req.body;

  // to find the entry by id and update with formdata
  Model.findByIdAndUpdate(req.params.id, formdata)
    .then((result) => {
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
