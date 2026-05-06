const login =(req,res)=>{
    console.log(res.res("welcome to login page"))
}

const register =(req,res)=>{
    res.send("welcome to register Page")
}

module.exports = {login,register}