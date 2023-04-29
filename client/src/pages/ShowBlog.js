import bg from '../assets/bg.jpg'
import { useState ,useEffect} from "react";
import { Link, useNavigate, useParams } from  "react-router-dom";
import NavBar from '../components/NavBar';
import { useAuthContext } from '../hooks/useAuthContext';

const ShowBlog = () => {
    const {user}=useAuthContext()
    const [blog,setBlog]=useState({})
    const [error,setError] =useState(null) 
    const[visiblite,setvisiblite] =useState(true) ; 
    const MyBlog =()=>{ // test if the blog is created by the current user or not to give him the posibilte to edit and to delete our not 
        setvisiblite(true);
        //this function must be excuted when we upload paeg
    }
    let {id} = useParams()
    const navigate = useNavigate()
    useEffect (()=>{
        fetch('http://localhost:5000/getBlog/'+id  ,{
            headers: new Headers({
                'Authorization': 'Bearer '+user.token,
                'Content-Type': 'application/json'
              })
        })
        .then(res => {
            if(!res.ok)
            {
                throw Error('Error in getting data')
            }
            return res.json()})
        .then (data => {
            setBlog(data)
        } ) 
        .catch(Error => {
            setError(Error.message)
        } )
            MyBlog()
        }
        ,[])



        const deleted = (()=>{
            fetch('http://localhost:5000/delete/'+blog._id , {method: 'DELETE' ,
            headers : {"Content-Type" : "application/json",
            'Authorization': 'Bearer '+user.token, }
        })
            .then(res=>{
                setError('the Blog is delted')
                navigate('/') 
            })
            .catch(err=>{
                setError(Error.message)
            })
        })
    return (
    <div>
        <NavBar />
    <div  className="shadow-xl mx-[10%] rounded-lg bg-[#29abe2] my-[3%] bg-opacity-5 lg:p-5 md:p-4 sm:p-3 p-2">   
        {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }     
        <div className='flex justify-between'>
            <div className='w-[50%]'>
                <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]   font-semibold  '>{blog.title}</h1>
                <p className='text-left opacity-50 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px]'> #{blog.category}</p>
                <p className='text-left mt-[3%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] w-[75%]  inline'> {blog.description} </p>
                <p className='text-left mt-[10%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-semibold'>Created By: <span className='text-left ml-1 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-normal opacity-75'> {blog.auther}</span> </p>
                <p className='text-left mt-[5%] lg:text-[14px] md:text-[11px] sm:text-[8px] text-[5px] opasity-50 '> In {blog.createdAt}</p>
            </div>
            <div className='w-[50%] '><img src={blog.image} alt='blog' className='w-[100%]  sahdow-sm rounded-lg'/></div>
        </div>
        <hr className='mt-[5%] mb-[5%] '/>
        <p className='  mb-[5%] lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px] w-[75%] lg:leading-8  md:leading-6 sm:leading-4 leading-2 text-center mx-auto'>
           {blog.body}
        </p>
        <div className='flex justify-end gap-2'>
          {visiblite &&  <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 "  ><Link to={'/edit/'+blog._id}>Edit</Link></button>}
          {visiblite && <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 " onClick={deleted} >Delete</button> }
        
        </div>
        
        
        
    </div>  
    </div>);
}
 
export default ShowBlog;