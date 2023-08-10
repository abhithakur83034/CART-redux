const userModel = require('../Model/userModel');

const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const users = [
            {
                name,
                email,
                password,
            }
        ];
        await userModel.insertMany(users);

        // Send a success response
        return res.status(201).json({ message: 'Users registered successfully' });
    } catch (error) {
        console.error('Error in user registration:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


const userLogin = async(req,res)=>{
    try {
        const user = await userModel.findOne(req.body)
        if(user){
            return res.status(201).json({message: 'Login successfully'})
        }else{
            console.log("can't find user")
           res.status(500).json({ message: "can't find user" });
        }
        // 
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    userRegister,
    userLogin
};
