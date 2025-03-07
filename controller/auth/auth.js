const { signUp, signIn } = require("../../service/auth/auth");

const signUpController = async (req, res) => {
  try {
    // console.log(req.body);
    
    const newUser = await signUp(req.body);
    console.log(newUser);
    
    res.status(201).json({
      message: `user details save successfully`,
      data: newUser,
      status: true,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: `user signup failed`,
        data: error.message,
        status: false,
      });
  }
};

const signInController = async (req, res) => {
  try {
    const userObj = req.body;
    const userData = await signIn(userObj);
    return res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ message: error.message, data: [], status: false });
  }
};

module.exports = { signUpController, signInController };
