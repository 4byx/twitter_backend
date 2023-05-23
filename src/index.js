const express = require("express");
const connect = require("./config/database");
const app = express();

// const Tweet = require("./models/tweet");

// const TweetRepository = require("./repository/tweet-repository");

// const Comment = require("./models/comment");

const TweetService = require("./services/tweet-service")

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("connected to mongo db");
  const tweetService = new TweetService();

  const tweet = await tweetService.create({ content: "this is 1st #tweet" });
  console.log(tweet);


});
