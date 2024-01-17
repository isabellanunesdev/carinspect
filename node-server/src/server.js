require("dotenv").config();
const express = require("express");
const showBanner = require("node-banner");
const cors = require("cors");
const connectMongoDB = require("./configs/mongodb.config");
const personRoutes = require("./routes/person.routes");

const app = express();

connectMongoDB();

app.use(cors());
app.use(express.json());
app.use("/person", personRoutes);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
  await showBanner(
    "noted-server",
    `Server is running on: http://localhost:${port}\n`,
    "green",
    "green"
  );
});
