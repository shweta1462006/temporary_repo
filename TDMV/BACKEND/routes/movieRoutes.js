const express = require("express");
import { HomePage, PopularMovies } from "../controller/movieController.js";
const router = express.Router();
router.get("/",HomePage)
router.get("/popular",PopularMovies)