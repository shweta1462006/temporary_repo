const cors  = require("cors")
const express = require("express");
const movieRouter = require("./routes/movieRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(cors({ origin: "*" }));


app.use("/",movieRouter)
app.use("/user",userRouter)

module.exports = app;