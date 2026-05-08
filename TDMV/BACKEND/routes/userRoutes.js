const express = require('express');
const userRouter = express.Router();
const {login,register,loginPage,RegisterPage} = require("../controller/userController.js")

// userRouter.post("/log",login);
// userRouter.get("/login",loginPage)
userRouter.get("/register",RegisterPage)
userRouter.post("/reg",register)


module.exports = userRouter;