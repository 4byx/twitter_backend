const { TweetService } = require("../services/index");

const tweetService = new TweetService();

const create = async (req, res) => {
  try {
    const body = req.body;
    const tweet = await tweetService.create(body);
    return res.status(201).json({
      Success: true,
      data: tweet,
      message: "Successfully tweeted the tweet",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      data: [],
      message: "Failed to create the tweet",
      err: error,
    });
  }
};

module.exports = {
  create,
};
