
const express = require('express') ;
const app = express();
const mongoose= require('mongoose') ;
const cors = require('cors')
const dotenv = require('dotenv')

const BlogsRoutes = require('./routes/BlogsRoutes')
const AuthRoutes  =require('./routes/AuthRoutes')
const requireAuth =require('./middelware/requireAuth')
// user : TechBlog
//password : sifou123456789

const dbURI = 'mongodb+srv://TechBlog:sifou123456789@cluster0.h1vs7.mongodb.net/TechBlog' ;
//'mongodb+srv://EsiSwitch:esi1234@cluster0.h1vs7.mongodb.net/Data?retryWrites=true'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected')
        app.listen(process.env.PORT || 5000)

    })
    .catch(err => console.log(err));

    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(cors())
    dotenv.config()
    
    app.use(AuthRoutes)
    app.use(requireAuth)
    app.use(BlogsRoutes)

   
    // add delete Blog 

    /*{
 "title" :"Machine Learning" , 
 "category": "Ai",
 "auther":"11111",
"description":"lsdkfhdqgshfkj sjdhjsqhf dhfjdsh qsdd qfdjsq dqskfjqsf qsfh djfkkj kjdfskj kfk",
"body":"skfkjskdj dksjfhds d f d fs df ds gf sfg fdgksdjgk dskfjksdjfj dfksjdf sdfkjdghjd gksdjgkdjkgjsd gksdjgksdjkgjdsg sdjgksdng dskjkjdf sdjgksnf djn k klh jk hjhsjk njs hj shkl jskj jjklqkjfkj n  hksnvk hk n" , 
"nbr_views" : 0 , 
"image": "non"
}*/
