import mongoose from "mongoose"

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    max: [250, 'Tweet cannot be more than 250 words']
  },
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hashtag'
    }
  ]
}, { timestamps: true });

tweetSchema.virtual('contentWithEmail').get(function process() {
  return `${this.content} \nCreated by : ${this.userEmail}`;
})

export const Tweet = mongoose.model("Tweet", tweetSchema);