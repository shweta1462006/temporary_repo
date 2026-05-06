const express = require('express');
const userRouter = express.Router();
const {login,register} = require("../controller/userController.js")

userRouter.get("/log",login);
userRouter.get("/reg",register)


module.exports = userRouter;