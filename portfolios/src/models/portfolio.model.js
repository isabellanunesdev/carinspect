const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    vehicleType: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    licensePlate: { type: String, required: true },
    chassis: { type: String, required: true },
    manufactureYear: { type: Number, required: true },
    vehicleImages: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("portfolio", portfolioSchema);
