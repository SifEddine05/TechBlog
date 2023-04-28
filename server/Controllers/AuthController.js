const User = require('../models/User')
const jwt = require('jsonwebtoken')

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}

module.exports.signup=async (req,res)=>{
    const {email , password ,name} = req.body 
    
    try {
        const user = await User.signup(email,password,name)
        //console.log(user._id);
        const token = createToken(user._id)
        console.log(token);
        res.status(200).json({email,name,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
