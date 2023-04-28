import BoxBlog from "../components/BoxBlog";
import SwitchBlogs from "../components/SwitchBlogs";
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
const Home = () => {
    const [boxes,setBoxes] =useState([]) 
    const [error,setError] =useState(null) 
    const [blogs , setBlogs]=useState([])
useEffect(()=>{
   setError(null)
    fetch('http://localhost:5000/blogs')
    .then(res => {
        if(!res.ok)
        {
            throw Error('Error in getting data')
        }
        return res.json()})
    .then (data => {
        setBoxes(data)
        setBlogs(data)
    } ) 
    .catch(Error => {
        setError(Error.message)
    } )


},[])



    return ( 
        <div>
            <NavBar />
            <SwitchBlogs func={setBoxes} blogs={blogs}  />
            {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }
            <div className='flex justify-center  flex-col-reverse'>
                <div className="flex flex-wrap justify-center ml-[2%]">
                    {boxes.map((elem=>{
                       return( <BoxBlog key={elem._id} title={elem.title} image={elem.image}author={elem.auther} date1={elem.createdAt} body={elem.description} views={elem.nbr_views} _id={elem._id} />)
                    }))}   
                </div>
                <SideBar func={setBoxes} blogs={blogs} boxes={boxes} />
            </div>
            
            
        </div>
     );
}
 
export default Home;
