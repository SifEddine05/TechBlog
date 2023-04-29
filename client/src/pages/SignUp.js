import { useState } from 'react';
import login from '../assets/Login.jpg'
import { Link } from  "react-router-dom";
import { useSignup } from '../hooks/useSignup';


const SignUp = () => {
    const {signup,error}=useSignup()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name, setName]=useState('')

    const submit = async()=>{
        console.log(email,password,name);
        const res = await signup(email,password,name)
    }
    return ( 
        <div className="bg-[#29abe2] bg-opacity-30 lg:p-14 md:p-10 sm:p-6 p-4 ">
        <div className=' mb-[5%] flex justify-between bg-[#FFFF] mx-[5%] rounded-xl lg:p-5 md:p-4 sm:p-3 p-2 shadow-lg'>
            <div className=' shadow-xl rounded-md grow lg:p-5 md:p-4 sm:p-3 p-2'>
                <h1 className='text-left lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  mb-1 font-semibold text-[#29abe2] '>Sign up</h1>
                <br   />     
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Name <br/>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required placeholder="YourName" maxLength='15'  className="bg-gray-50 w-full  border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                <br   />
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Email <br/>
                    <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} required placeholder="john.doe@company.com" maxLength='25'  className="bg-gray-50 w-full border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                <br   />
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Password 
                    <br/>    
                    <input type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password" maxLength='50' minLength='6' className="bg-gray-50 w-full border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }
                <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500    md:p-2.5 p-1  block w-[50%] mt-[10%] ml-[12%]"  onClick={submit}>Sign up</button>
            </div>
            <img src={login} alt='login' className=' w-[60%] rounded-lg  '/>
        </div>     
    </div> );
}
 
export default SignUp;