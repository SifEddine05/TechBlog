

import { useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuthContext } from "../hooks/useAuthContext";
const AddBlog = () => {
    const[Time,setTime]=useState(Date().toLocaleString())
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [description,setDescription]=useState('')
    const [body,setBody]=useState('')
    const [image , setImage] =useState('')
    const [file , setFile] =useState(null)
    const fileInputRef = useRef(null)
    const {user} =useAuthContext()
    const [error,setError] = useState(null)
    const navigate = useNavigate()  
    const submit = async ()=>{
        const file = fileInputRef.current.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'TechBlog');
        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dc3fxvt26/image/upload',
            formData
          );
        setError(null)
        setTime(Date().toLocaleString())
        if(name==='' || email==='' || category==='' || name ==='' || description==='' || body==='' || image===''){
            setError('Please Fill All the fields ')
        }
        else{
            const blog = {
                title:title ,
                category:category,
                auther:name,
                description:description,
                body:body,
                nbr_views:0,
                image:response.data.secure_url
            }
           fetch('http://localhost:5000/newBlog' , { method : 'POST' , 
				      headers : {"Content-Type" : "application/json" },
                      'Authorization' : 'Bearer '+user.token,
				      body : JSON.stringify(blog) 
				      } )
				      .then((res)=>{   setError('Your Blog is Added succesfuly')
                            navigate('/')
                    })
				      .catch(err=>setError(err.message) ) }
        
    } 
    return ( 
    <div>
    <NavBar />
    <div className="shadow-xl mx-[10%] lg:p-5 md:p-4 sm:p-3 p-2 bg-[#29abe2] bg-opacity-5 rounded-xl">
        <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  lg:mb-10 md:mb-8 sm:mb-6 mb-4 font-semibold text-[#29abe2] '>Add New Blog</h1>
        <div  className="ml-[15%]">
            <div className="flex justify-start  items-center ">
                <label className="lg:text-[18px] mr-[10%]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Name <br/>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required placeholder="john" maxLength='20'  className="bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 "/>
                </label>
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Email <br/>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required placeholder="john.doe@company.com" maxLength='50'  className="bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 "/>
                </label> 
            </div>
            <div className='   flex justify-start items-center lg:mt-10 md:mt-8 sm:mt-6 mt-4'>
                <label className="  lg:text-[18px]   mr-[10%] md:text-[15px] sm:text-[12px] text-[9px] font-medium text-left "> Title<br/>
                    <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" required placeholder="Machine Learning"  maxlength="20"  className="w-full bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                <label className='lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium text-left ' >The Category <br/>
                    <select value={category} onChange={(e)=>{setCategory(e.target.value)}}   required className=" w-full font-medium bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  lg:p-2.5 p-1 ">
                            <option selected className="opacity-75">Choose a category</option>
                            <option value={'web'}>Web Developpment </option>
                            <option value={'Bc'}>Block Chaine</option>
                            <option value={'mobile'}>Mobile Developpment</option>
                            <option value={'Ai'}>Artificial Intelligence </option>
                            <option value={'Cs'}>Cyper Security </option>    
                        </select>
                </label>    
            </div>
            <div className='flex justify-start  items-center lg:mt-10 md:mt-8 sm:mt-6 mt-4'>
                <label className='lg:text-[18px] mr-[5%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left  ' >
                    Upload a photo for your Blog <br/>
                    <input type='file' required ref={fileInputRef}
                     accept="image/*" className="md:text-[12px] sm:text-[10px] text-[7px] w-[100%] hover:cursor-pointer " 
                    />
                </label>
                <label className='lg:text-[18px] mr-[5%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                    Description <br/>
                    <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} cols="40" rows="7" required placeholder="Write a description about your blog in 200 letters"  maxlength="200" size='200' className="w-full bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "></textarea>
                </label>
            </div>
            <div className="mt-[10%] flex justify-start">
            <label className='lg:text-[18px] mr-[10%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                The Blog <br/>
                <textarea value={body} onChange={(e)=>{setBody(e.target.value)}} cols="75" rows="17"required placeholder="Write your blog"  className="w-full h-full bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "></textarea>
            </label>
            </div>
            <div className="mt-[10%]">
                <label className='lg:text-[18px] mr-[10%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                    Date of Publication 
                    <input type="text" disabled value={Time} required   className="mr-[5%] w-[90%] bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }
                <input type="submit"  className=" mb-[10%]  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 " onClick={submit} />
            </div>
        </div>
    </div>
    </div>
     );
}
 
export default AddBlog;