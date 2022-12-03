import { useState } from "react";


const EditBlog = () => {
    const[Time,setTime]=useState(Date().toLocaleString())
    const getTime = ()=>{
        setTime(Date().toLocaleString())
    } 
    return (
        <div className="shadow-xl mx-[10%] lg:p-5 md:p-4 sm:p-3 p-2 bg-[#29abe2] bg-opacity-5 rounded-xl">
        <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  lg:mb-10 md:mb-8 sm:mb-6 mb-4 font-semibold text-[#29abe2] '>Edit Blog</h1>
        <form action='post' className="ml-[15%]">
            <div className="flex justify-start  items-center ">
                <label className="lg:text-[18px] mr-[10%]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Name <br/>
                    <input type="text" required placeholder="john" maxLength='20'  className="bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label>
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium "> Email <br/>
                    <input type="email" required placeholder="john.doe@company.com" maxLength='50'  className="bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label> 
            </div>
               
                
            <div className='   flex justify-start items-center lg:mt-10 md:mt-8 sm:mt-6 mt-4'>
                <label className="  lg:text-[18px]   mr-[10%] md:text-[15px] sm:text-[12px] text-[9px] font-medium text-left "> Title<br/>
                    <input type="text" required placeholder="Machine Learning"  maxlength="20"  className="w-full bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label>
                <label className='lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] font-medium text-left ' >The Category <br/>
                    <select required className=" w-full font-medium bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  lg:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                <label className='lg:text-[18px] mr-[5%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left ' >
                    Upload a photo for your Blog <br/>
                    <input type='file' required className="md:text-[15px] sm:text-[12px] text-[9px] hover:cursor-pointer " />
                </label>
                <label className='lg:text-[18px] mr-[5%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                    Description <br/>
                    <textarea cols="40" rows="7" required placeholder="Write a description about your blog in 200 letters"  maxlength="200" size='200' className="w-full  bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </label>
            </div>
            <div className="mt-[10%] flex justify-start">
            <label className='lg:text-[18px] mr-[10%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                The Blog <br/>
                <textarea  cols="75" rows="17"required placeholder="Write your blog"  className="w-full h-full bg-gray-50 border-2 shadow-lg  border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </label>
            </div>
            <div className="mt-[10%]">
                <label className='lg:text-[18px] mr-[10%] md:text-[15px] sm:text-[12px] text-[8px] font-medium text-left '>
                    Date of Publication 
                    <input type="text" disabled value={Time} required   className="mr-[5%] bg-gray-50 border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label>
                <input type="submit" className=" mb-[10%]  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={getTime} />
            </div>
        </form>
    </div>
    );
}
export default EditBlog;