const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(tweetId, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy() {
    try {
      await Tweet.findByIdAndRemove(data);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
