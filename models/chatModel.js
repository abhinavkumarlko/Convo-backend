const { Schema, model, Types } = require("../connection");

const schema = new Schema({
  chatData: Object,
  user: { type: Types.ObjectId, ref: "users" },
  rec: { type: Types.ObjectId, ref: "users" },
  createdAt: Date,
});

module.exports = model("chats", schema);
