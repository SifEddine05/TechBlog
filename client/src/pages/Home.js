import BoxBlog from "../components/BoxBlog";
import SwitchBlogs from "../components/SwitchBlogs";
import SideBar from "../components/SideBar"
import { useEffect, useState } from "react";
const Home = () => {
    const [boxes,setBoxes] =useState([]) 
    const [error,setError] =useState(null) 

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
    } ) 
    .catch(Error => {
        setError(Error.message)
    } )


},[])



    return ( 
        <div>
            <SwitchBlogs />
            {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }
            <div className='flex justify-center sm:flex-row flex-col-reverse'>
                <div className="flex flex-wrap justify-center ml-[2%]">
                    {boxes.map((elem=>{
                       return( <BoxBlog key={elem._id} title={elem.title} author={elem.auther} date1={elem.createdAt} body={elem.description} views={elem.nbr_views} _id={elem._id} />)
                    }))}   
                </div>
                <SideBar />
            </div>
            
            
        </div>
     );
}
 
export default Home;
