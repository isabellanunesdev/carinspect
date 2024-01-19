require("dotenv").config();
const express = require("express");
const showBanner = require("node-banner");
const cors = require("cors");
const connectMongoDB = require("./configs/mongodb.config");
const routes = require("./routes");

const app = express();

connectMongoDB();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, async () => {
  await showBanner(
    "surveys",
    `Server is running on: http://localhost:${port}\n`,
    "green",
    "green"
  );
});
