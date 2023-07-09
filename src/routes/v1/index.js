const express = require("express");
const router = express.Router();
const { TweetController, LikeController } = require("../../controllers/index");

router.post("/create", TweetController.create);
router.post("/likes", LikeController.toggleLike);

module.exports = router;
