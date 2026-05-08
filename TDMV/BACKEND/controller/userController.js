const {readJSON,writeJSON}  = require("../utils/fileHandler.js");
const USER_PATH = "./JSON/users.json";



const login =async(req,res)=>{
      res.send("welcome to login Page")

}
const loginPage =(req,res)=>{
  res.render("loginPage")
}
const RegisterPage =(req,res)=>{
  res.render("RegisterPage")
}
const register =async(req,res)=>{
    try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Required Inputs." });
    }
    const allUsers = await readJSON(USER_PATH);
    const userExists = allUsers.find((u) => u.username === username);
    if (userExists) {
      return res.status(400).json({ message: "User Already Exists." });
    }
    const newUser = {
      id: Date.now(),
      username,
      password,
    };

    allUsers.push(newUser);
    writeJSON(USER_PATH, allUsers);
    res.status(201).redirect("/login");
  } catch (err) {
    console.error(err);
    return;
  }

};

module.exports = {login,register,loginPage,RegisterPage}