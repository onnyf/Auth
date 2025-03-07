const user = require('../../model/user');
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signUp = async (userObj) => {
    // if (!userObj) {
    //     throw new Error("No details supplied");
    // }
    // const newUser = await user.create(userObj);
    // return newUser;
    // console.log(newUser);
    const newUser = await user.create(userObj)
    return newUser
    
};

const signIn = async (userObj) => {
    const { email } = userObj;
    const userData = await user.find({ email: email });
    if (!userData) throw new Error(" Invalid credentails supplied");

    const token = await generateToken(userObj)
    const userResponse = {
        message: `User logged in succussfully`,
        data: userData,
        status: true,
        token: token,
    };

    console.log(userResponse);
    return userResponse;
};


const generateToken = async (payload) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1hr",
    });
    return token;
}

module.exports = { signUp, signIn };









