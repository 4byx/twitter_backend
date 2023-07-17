const { UserService } = require("../services");

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created the user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Not able to create the user",
      data: [],
      err: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const user = await userService.getByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "No user found",
      });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        message: "Password is wrong",
        success: false,
      });
    }
    const token = user.genJwt();
    return res.status(200).json({
      success: true,
      message: "Successfully signed in user",
      data: token,
      err: [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Not able to sign in the user",
      data: [],
      err: error,
    });
  }
};

module.exports = {
  signup,
  signin,
};
