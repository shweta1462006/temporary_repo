const cors  = require("cors")
const express = require("express");
const { HomePage, PopularMovies } = require("./controller/movieController");
const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/home",HomePage)
app.use("/popular",PopularMovies)

module.exports = app;