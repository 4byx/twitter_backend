const { CommentService } = require("../services/index");

const commentService = new CommentService();

const create = async (req, res) => {
  try {
    const { modelType, modelId } = req.query;
    const { content, userId } = req.body;

    const response = await commentService.createComment(
      modelId,
      modelType,
      userId,
      content
    );
    // console.log("controller ", response);
    return res.status(201).json({
      Success: true,
      data: response,
      message: "Successfully created the comment",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      Success: false,
      data: [],
      message: "Failed to create the comment",
      err: error,
    });
  }
};

module.exports = {
  create,
};
