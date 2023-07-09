const express = require("express");
const connect = require("./config/database.js");
const apiRoutes = require("./routes/index.js");
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(3000, async () => {
    console.log("Server started");
    await connect();
    console.log("connected to mongo db");
  });
};

setupAndStartServer();
