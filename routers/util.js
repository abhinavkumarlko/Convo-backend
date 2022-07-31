// const multer = require("multer");
// const router = require("express").Router();

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
// }).single("file");

// router.post("/uploadfile", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(400).send("Something went wrong!");
//     }
//     res.send(req.file);
//   });
// });

// module.exports = router;
