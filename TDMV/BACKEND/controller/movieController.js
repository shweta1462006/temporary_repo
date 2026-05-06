const { getPopularMovies } = require("../services/movieServices.js")

async function HomePage(req,res) {
    res.send("node js in home page")
    
};

async function PopularMovies(req,res) {
    const data = await getPopularMovies();
    console.log(data.results)
    res.send(data.results)
    
}
module.exports={ HomePage,PopularMovies}