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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    },
  ],
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
