const CrudRepository = require("./crud-repository");
const Like = require("../models/like");
class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findByUserAndLikeable(data) {
    try {
      const tweet = await Like.findOne(data);
      return tweet;
    } catch (error) {
      console.log("error in repository layer");
      throw { error };
    }
  }
}

module.exports = LikeRepository;
