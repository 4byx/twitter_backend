const express = require("express");
const router = express.Router();
const {
  TweetController,
  LikeController,
  CommentController,
} = require("../../controllers/index");

router.post("/create", TweetController.create);
router.post("/likes", LikeController.toggleLike);
router.post("/comment", CommentController.create);
module.exports = router;
