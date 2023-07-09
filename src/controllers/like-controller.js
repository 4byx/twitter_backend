const { LikeService } = require("../services/index");
const likeService = new LikeService();

const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    console.log(req.query);
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "Successfully toggle Like",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: error,
    });
  }
};

module.exports = {
  toggleLike,
};
