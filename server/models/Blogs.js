
const mongoose= require('mongoose') ;


const Schema = mongoose.Schema ; 

const blog = new Schema ({
        title : {
            type : String  ,
            require : true 
        },
        category : { // we must put it with upper case 
            type: String , 
            require : true ,
        },
        auther : {
            type : String , 
            require : true  , 
        },
        description :{
            type:String ,
            require : true ,
        },
        body :{
            type :String ,
            require : true , 
        },
        nbr_views :{
            type : Number ,
            require : true ,
        },
        image:{
            type : String ,
            require : true ,
        }


},{ timestamps: true })// date of publish and of update is saved by this timestamps: true  we use only col.createdAt and col.updatedAt

const Blogs = mongoose.model('Blogs' , blog)

module.exports= Blogs ;