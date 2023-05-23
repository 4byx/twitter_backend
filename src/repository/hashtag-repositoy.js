import { Hashtag } from "../models/hashtag";

class HashtagRepository {
    async create(data) {
        try {
            const tag = await hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data) {
        try {
            const tags = await hashtag.create(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId) {
        try {
            const tag = await hashtag.findById(tweetId);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy() {
        try {
            await hashtag.findByIdAndRemove(data);
            return true;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(titleList) {
        try {
            await hashtag.deleteMany({
                title: titleList
            });
            return true;
        } catch (error) {
            console.log(error);
        }
    }

    async findByName(titleList) {
        try {
            const tags = await hashtag.find({
                title: titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository;
