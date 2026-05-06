const express = require('express')
const movieRouter = express.Router()
const { HomePage, PopularMovies } = require("../controller/movieController.js");
// const {HomePage,} =require("../controller/movieController.js")

movieRouter.get("/home",HomePage);
movieRouter.get("/popular",PopularMovies);

module.exports = movieRouter;