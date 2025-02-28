const {signUpController, signInController} = require("../../controller/auth/auth");
const express = require("express");

const router = express.Router();

router.post("/sign-Up", signUpController)

router.post("/sign-In", signInController)


module.exports = router