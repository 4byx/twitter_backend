const express = require("express");
const router = express.Router();
const { TweetController } = require("../../controllers/index");

router.post("/create", TweetController.create);

module.exports = router;
