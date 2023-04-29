
const mongoose= require('mongoose') ;

const bcrypt = require("bcrypt")
const validator = require('validator')
const Schema = mongoose.Schema ; 

const UserSchema = new Schema({
    name:{
        type:String , 
        required : true , 
    },
    email : {
        type : String , 
        required : true , 
        unique : true , 
     },
    password : {
        type : String,
        required : true ,
    }
},{ timestamps: true }) 

UserSchema.statics.signup = async function (email,password,name) {
        const exist = await this.findOne({email})
        
        if(exist)
        {
            throw Error('Email already in use')
        }
        if(!email || !password){
            throw Error('All fields must be filled')
        }
        if(!validator.isEmail(email))
        {
            throw Error('Email is not valid')

        }
        if(!validator.isStrongPassword(password))
        {
            throw Error('Password not strong enough')

        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        const user = await this.create({name , email , password : hashPassword})
        return user 
    }

    UserSchema.statics.login = async function (email,password) {
        const user = await this.findOne({email})
        
        if(!user)
        {
            throw Error('Incorrect email')
        }
        if(!email || !password){
            throw Error('All fields must be filled')
        }

        const match = await bcrypt.compare(password,user.password)
        if(!match)
        {
            throw Error('Incorrect password')

        }
        return user
    }



const User = mongoose.model('User' , UserSchema)

module.exports= User ;
