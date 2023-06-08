const express = require("express");
const connect = require("./config/database.js");
const apiRoutes = require("./routes/index.js");
const bodyParser = require("body-parser");

const LikeRepository = require("./repository/like-repository.js");
const User = require("./models/user.js");
const Tweet = require("./models/tweet.js");

const checktest = async () => {
  try {
    const rep = new LikeRepository();
    const user = await User.create({
      email: "abc@gmail.com",
      name: "abhiahuja",
      password: "abhiahuja",
    });
    const tweet = await Tweet.create({
      content: "This is #third #tweet #king",
    });
    const like = await rep.create({
      onModel: "Tweet",
      likeable: tweet.id,
      user: user.id,
    });
    console.log(user);
    console.log(tweet);
    console.log(like);
  } catch (error) {
    console.log(error);
    throw { error };
  }
};

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
  // checktest();
};

setupAndStartServer();
