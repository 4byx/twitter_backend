const CrudRepository = require("./crud-repository");
const Like = require("../models/like");
class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }
}

module.exports = LikeRepository;
