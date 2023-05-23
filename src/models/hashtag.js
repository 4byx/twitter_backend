import mongoose from "mongoose"


const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]
}, { timestamps: true });

export const Hashtag = mongoose.model("Hashtag", hashtagSchema);
