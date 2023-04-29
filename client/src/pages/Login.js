import { useState } from 'react';
import login1 from '../assets/Login.jpg'
import { Link } from  "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom/dist';



const Login = () => {
    const [error,setError] = useState(null)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {login} =useLogin()
    const navigate =useNavigate()
    const submit =async()=>{
        setError(null)
        if(email==='' || password==='')
        {
            setError('Please fill all the fields')
        }
        else{
            const user = await login(email,password,setError)
            navigate('/')
        }
    }
    return ( 
    <div className="bg-[#29abe2] bg-opacity-30 lg:p-14 md:p-10 sm:p-6 p-4 ">
        <div className=' mb-[5%] flex justify-between bg-[#FFFF] mx-[5%] rounded-xl lg:p-5 md:p-4 sm:p-3 p-2 shadow-lg'>
            <div className=' shadow-xl rounded-md grow lg:p-5 md:p-4 sm:p-3 p-2'>
                <h1 className='text-left lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  mb-1 font-semibold text-[#29abe2] '>Login</h1>
                <p className='  mb-[5%] inline lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px]  text-left opacity-50 '>Don't have an account yet? </p>
                <Link to='/signup' className='  lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px] underline text-[#293be2]'>Sign Up</Link>
                <br   />
                <br   />

                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Email <br/>
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required placeholder="john.doe@company.com" maxLength='50'  className="bg-gray-50 w-full border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                <br   />
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Password 
                    <Link to='/frgpass' className='  lg:text-[14px] md:text-[12px] sm:text-[9px] text-[7px] underline ml-[20%] text-[#293be2]'>Forgot Password?</Link>
                    <br/>    
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required placeholder="Password" maxLength='50' minLength='6' className="bg-gray-50  w-full border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 "/>
                </label>
                {error && <h3 className="mt-4 md:text-lg text-sm text-red-600 font-bold mb-4 ml-4">{error} </h3> }
                <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500    md:p-2.5 p-1  block w-[50%] mt-[10%] ml-[12%]"  onClick={submit}>Login</button>
                <hr className='mt-[5%] mb-[5%] w-[75%]'/> 
            </div>
            <img src={login1} alt='login' className=' w-[60%] rounded-lg  '/>
        </div>     
    </div> );
}
 
export default Login;