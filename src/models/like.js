const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  onModel: {
    type: String,
    required: true,
    enum: ["Tweet", "Comment"],
  },
  likeable: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "onModel",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
