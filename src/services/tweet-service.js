import { TweetRepository, HashtagRepository } from "../repository/index"

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {

        // getting tags from content
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substring(1));

        const tweet = await this.tweetRepository.create(data);

        // getting tags which are not present
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags)
        let preTags = alreadyPresentTags.map((tag) => tag.title);


        // processing new tags
        let newTags = tags.filter((tag) => !preTags.includes(tag))
        newTags = newTags.map((tag) => {
            return { title: tag, tweets: [tweet.id] }
        })

        // adding tweets id in previous tags which are already present
        alreadyPresentTags.map((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })


        // bulk creating new hashtags
        await this.hashtagRepository.bulkCreate(newTags);
        return tweet;
    }
}

module.exports = TweetService;