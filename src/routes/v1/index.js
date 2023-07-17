const express = require("express");
const router = express.Router();
const {
  TweetController,
  LikeController,
  CommentController,
  AuthController,
} = require("../../controllers/index");

const { authenticate } = require("../../middlewares/authenticate");

router.post("/create", authenticate, TweetController.create);
router.post("/likes", LikeController.toggleLike);
router.post("/comment", CommentController.create);
router.post("/signup", AuthController.signup);
router.post("/signin", AuthController.signin);

module.exports = router;
