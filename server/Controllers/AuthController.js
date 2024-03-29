const User = require('../models/User')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const validator = require('validator')
const crypto = require('crypto')

const createToken = (_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})
}




module.exports.signup=async (req,res)=>{
    const {email , password ,name} = req.body 
    
    try {
        const user = await User.signup(email,password,name)
        const token = createToken(user._id)
        console.log(token);
        res.status(200).json({email,name,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports.login=async (req,res)=>{
    const {email , password} =req.body
    try {
        const user = await User.login(email,password)
        const token = createToken(user._id)
        const name = user.name
        res.status(200).json({email , token ,name})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


