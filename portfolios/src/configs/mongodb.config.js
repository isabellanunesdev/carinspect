const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://root:root@mongo:27017";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" == Connected to MongoDB == ");
  } catch (error) {
    console.error(" xx Failed to connect to MongoDB xx", error);
    setTimeout(connectMongoDB, 5000);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log(" xx MongoDB disconnected xx");
  setTimeout(connectMongoDB, 5000);
});

module.exports = connectMongoDB;
