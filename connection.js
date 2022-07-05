const mongoose = require("mongoose");

const db_name = "ConvoDB";
const url = `mongodb+srv://abhinavlko:abhi8004@cluster0.5fkbuk7.mongodb.net/ConvoDB?retryWrites=true&w=majority`;

mongoose
  .connect(url)
  .then((data) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
