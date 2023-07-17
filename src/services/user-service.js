const { UserRepository } = require("../repository");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(data) {
    const user = await this.userRepository.create(data);
    return user;
  }

  async getByEmail(email) {
    try {
      const user = await this.userRepository.getByEmail({ email });
      return user;
    } catch (error) {
      console.log("something wrong in user service layer");
      throw error;
    }
  }
}

module.exports = UserService;
