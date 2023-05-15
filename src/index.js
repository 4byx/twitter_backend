const express = require("express");
const connect = require("./config/database");
const app = express();

// const Tweet = require("./models/tweet");

const TweetRepository = require("./repository/tweet-repository");

app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("connected to mongo db");
  //   const tweet = await Tweet.create({
  //     content: "This is first tweet",
  //     userEmail: "jd@admin.com",
  //   });
  //   console.log(tweet);
  const tweetRepositry = new TweetRepository();
  // const tweet = await tweetRepositry.update("64620ed8c822e4f458d4726a", {
  //   content: "updated 6th tweet",
  //   userEmail: "jd@admin.com",
  // });
  const tweet = await tweetRepositry.create({ content: "my tweet" });
  console.log(tweet);
  tweet.comments.push({ content: "first comment" });
  await tweet.save();
  console.log(tweet);
});
