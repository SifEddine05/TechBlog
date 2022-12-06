const Forgotpwd = () => {
    return ( 
        <div className="bg-[#29abe2] h-screen  bg-opacity-30 lg:p-14 md:p-10 sm:p-6 p-4 ">
        <div className=' mb-[5%]  bg-[#29abe2] bg-opacity-30 mx-[5%] rounded-xl lg:p-5 md:p-4 sm:p-3 p-2 shadow-lg'>
            <div className=' shadow-xl bg-[#FFFF] rounded-md  lg:p-5 md:p-4 sm:p-3 p-2'>
                <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]  mb-1 font-semibold text-[#29abe2] '>Password reset</h1>
                <p className=' mt-[2%]  lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px]  text-center  '>we'll email you a link to rest your password </p>
                <br   />
                <label className="lg:text-[18px]  md:text-[15px] sm:text-[12px] text-[9px] mx-[33%] font-medium "> Email <br/>
                    <input type="email" required placeholder="john.doe@company.com" maxLength='50'  className="bg-gray-50 w-[35%]  mx-auto border-2 shadow-lg border-gray-300 text-gray-900 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block  md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </label>
                <button className=" mb-[2%]  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500    md:p-2.5 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-[25%] mx-auto"  >Reset</button>
            </div>
        </div>     
    </div> );
}
 
export default Forgotpwd;