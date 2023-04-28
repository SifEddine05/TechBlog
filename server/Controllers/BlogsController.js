
const Blogs = require('../models/Blogs')


module.exports.getblogs= async (req,res)=>{
    try{
        const blogs = await Blogs.find() ; 
        res.status(200).json(blogs) ; 
    }catch(err) {
        res.status(400).json("there is a problem in fetching blogs")
    }  
}

module.exports.addBlog=(async (req,res)=>{
    const blog = new Blogs(req.body)
    try {
        const blogs = await blog.save()
        res.status(200).json("add successfully ")
    } catch(err)
    {
        res.status(400).json('this Blog dosent add there is a problem ')
    }
})

module.exports.getBlog = async (req,res)=>{
    try {
        console.log(req.params.id);
        const blog = await Blogs.find({_id:req.params.id})
        blog[0].nbr_views = blog[0].nbr_views+1;
        const blog1 = await Blogs.findOneAndUpdate({_id:req.params.id} , {nbr_views:blog[0].nbr_views})
        res.status(200).json(blog1);

    }catch(err)
    {
        res.status(400).json("there is a problem in getting data ") ; 
    } }  

    module.exports.editBlog = async (req,res)=>{
        try {
            const blog = await Blogs.updateOne({_id:req.body._id} ,req.body )
            res.status(200).json(blog)
        }catch(err)
        {
            res.status(400).json("probleme in editing ")
        }
    } 
