const cors  = require("cors")
const express = require("express");
const session  = require("express-session");
const movieRouter = require("./routes/movieRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret:"SHWETA",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
      maxAge: 1000 * 60 * 60
    }
}));
app.use(cors({ origin: "*" }));


app.use("/",movieRouter)
app.use("/user",userRouter)

module.exports = app;