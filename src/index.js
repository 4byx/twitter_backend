const express = require("express");
const connect = require("./config/database");
const app = express();

// const Tweet = require("./models/tweet");

const TweetRepository = require("./repository/tweet-repository");

const Comment = require("./models/comment");

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("connected to mongo db");

  const tweetRepository = new TweetRepository();

  // const tweet = await tweetRepository.create({ content: "new 5th tweet" });
  // console.log(tweet);
  // const tweet = await tweetRepository.create({ content: "new 1st comment" });
  const comment = await Comment.create({ content: "new 5th comment" });
  const tweet = await tweetRepository.get("646b9b214b4a3581a3b29d70");
  tweet.comments.push(comment);
  await tweet.save();
  console.log(tweet);
});
