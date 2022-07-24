const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  name: String,
  email: String,
  contact: String,
  contacts: [{ type: Types.ObjectId, ref: "users" }],
  password: String,
});

module.exports = model("users", schema);
