const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
  }, // there is array of comments in tweet
  comments: [
    {
      content: {
        type: String,
        required: true,
      },
    },
  ],
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
