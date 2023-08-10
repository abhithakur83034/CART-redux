
let ADMIN = {
    "email" : "admin@gmail.com",
    "password":"admin"
}

const adminLogin = async(req,res)=>{
    try {
        if(ADMIN.email === req.body.email && ADMIN.password === req.body.password){
            res.status(201).json({message: "admin login"})
        }else{
            res.status(500).json({message: "please check your email & password"})
        }        
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    adminLogin
}