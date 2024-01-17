const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  cpf: { type: Number, required: true },
  phone: { type: Number, required: true },
  role: { type: String, default: "USER" },
});

module.exports = mongoose.model("Person", personSchema);
