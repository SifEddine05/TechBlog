import logo from '../assets/logo.png'
import contact from '../assets/identification.png'
import about from '../assets/info.png'
import logout from '../assets/logout.png'
import { Link } from  "react-router-dom";
import { useState } from 'react';
import user from '../assets/engineer.png'

const NavBar = () => {
   
    return ( 
    <nav className='bg-[#29abe2] flex justify-between  rounded-xl  mx-[12.5%] w-[75%] my-2 shadow-lg'>
        <div className="flex justify-start items-center">
            <img src={logo} alt='logo' className='lg:w-[170px] md:w-[120px] sm:w-[80px] w-[60px]'/>
        </div>
        <div className='flex justify-around items-center'>
            <div className='flex items-center lg:mr-10 md:mr-8 sm:mr-6 mr-4'>
                <img src={user} alt="user" className='lg:w-[40px] md:w-[30px] sm:w-[20px] w-[10px]'/>
                <h3 className='lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] text-[#FFF] ml-2'>Sifou</h3>
            </div>
            <div className='flex justify-around items-center group'>
                <Link to='/LogOut' className='lg:w-[35px] md:w-[30px] sm:w-[20px] w-[10px] lg:mr-4 md:mr-3 mr-2 '><img src={logout} alt='logout' /></Link> 
                <Link to='/LogOut' className='hidden group-hover:block lg:mr-4 md:mr-3 mr-2 hover:text-[#000] text-[#FFFF] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px]'>LogOut</Link> 
            </div>
        </div>
       
    </nav> 
    );
}
 
export default NavBar;

/*{ !hover && <Link to='/ContactUs' className='lg:w-[40px] md:w-[30px] sm:w-[20px] w-[10px] lg:mr-4 md:mr-3 mr-2'><img src={contact} alt='conact' /></Link> }
               {hover && <Link to='/ContactUs' className='lg:mr-4 md:mr-3 mr-2 hover:text-[#000] text-[#FFFF] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px] '>ConactUs</Link> }
               { !hover && <Link to='/AboutUs' className='lg:w-[40px] md:w-[30px] sm:w-[20px] w-[10px] lg:mr-4 md:mr-3 mr-2 '><img src={about} alt='about' /></Link> }
                { hover && <Link to='/AboutUs' className='lg:mr-4 md:mr-3 mr-2 hover:text-[#000] text-[#FFFF] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[10px]'>AboutUs</Link> }
                
*/
//Color : #29abe2 , #ee1823