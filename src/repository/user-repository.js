const CrudRepository = require("./crud-repository");
const User = require("../models/user");
class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async deleteAll() {
    try {
      //   await this.User.deleteMany({ name: "abhi" });
      await User.deleteMany({});
      return true;
    } catch (error) {
      console.log("something wrong in user repository");
      throw { error };
    }
  }

  async getByEmail(data) {
    try {
      const user = await User.findOne(data);
      return user;
    } catch (error) {
      console.log("something wrong user repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
