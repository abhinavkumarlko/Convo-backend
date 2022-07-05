const { Schema, model } = require("../connection");

const schema = new Schema({
  name: String,
  email: String,
  address: String,
  contact: String,
  password: String,
});

module.exports = model("users", schema);
