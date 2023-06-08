const Hashtag = require("../models/hashtag.js");

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.create(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async get(tweetId) {
    try {
      const tag = await Hashtag.findById(tweetId);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy() {
    try {
      await Hashtag.findByIdAndRemove(data);
      return true;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll(titleList) {
    try {
      await Hashtag.deleteMany({
        title: titleList,
      });
      return true;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
