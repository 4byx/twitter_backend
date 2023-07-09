const { LikeRepository, TweetRepository } = require("../repository/index");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    try {
      if (modelType === "Tweet") {
        var likeable = await this.tweetRepository
          .get(modelId)
          .populate({ path: "likes" });
      } else if (modelType === "Comment") {
        // To DO
      } else {
        throw new Error("unknown model type");
      }

      const exists = await this.likeRepository.findByUserAndLikeable({
        user: userId,
        likeable: modelId,
        onModel: modelType,
      });

      if (exists) {
        likeable.likes.pull(exists.id);
        await likeable.save();
        await this.likeRepository.destroy(exists.id);
        var isAdded = false;
      } else {
        const newLike = await this.likeRepository.create({
          user: userId,
          onModel: modelType,
          likeable: modelId,
        });
        likeable.likes.push(newLike);
        await likeable.save();

        var isAdded = true;
      }
      return isAdded;
    } catch (error) {
      console.log(error);
      console.log("error in like services");
      throw { error };
    }
  }
}

module.exports = LikeService;
