const {readJSON,writeJSON}  = require("../utils/fileHandler.js");
const USER_PATH = "./data/users.json";



const login =(req,res)=>{
res.send("welcome to login page")
}

const register =(req,res)=>{
    res.send("welcome to register Page")
}

module.exports = {login,register}