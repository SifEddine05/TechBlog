import { useState } from "react";
import add from '../assets/write.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'



export default function SwitchBlogs() {

    const stl1='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px]  shadow-xl border rounded-sm p-2 font-medium'
    const stl2='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px]  shadow-xl border rounded-sm p-2 font-medium text-[#29abe2]	 bg-[#000] bg-opacity-5  shadow-inner'
    const [style1,setStyle1] =useState(stl2)
    const [style2,setStyle2] =useState(stl1)
    const [style3,setStyle3] =useState(stl1)
    const [addBlog,setAdd]=useState(false) 

const handlClick = (e)=>{
    if(e.target.value==='all')
    {
        setStyle1(stl2)
        setStyle2(stl1)
        setStyle3(stl1)
        setAdd(false);

    }else if (e.target.value==='trending')
    {
        setStyle1(stl1)
        setStyle2(stl2)
        setStyle3(stl1)
        setAdd(false);

    }else{

        setStyle1(stl1)
        setStyle2(stl1)
        setStyle3(stl2)
        setAdd(true);
 
    }
}
  return (
      <div className='mt-[2%] mb-[2%] '>
        <div className='flex pl-[5%]'>
          <button className={style1 } value='all' onClick={handlClick}>All Blogs</button>
          <button className={style2} value='trending' onClick={handlClick}>Trending</button>
          <button className={style3} value='myblogs' onClick={handlClick}>My blogs</button>
        </div>
        {addBlog && <Link to='/newBlog' className='flex justify-end mr-[20%] group items-center' >
            <button className=' shadow-xl border rounded-lg lg:p-2 md:p-1.5 sm:p-1 p-0.5 font-medium w-[4%]'> <img src={add} alt='add' className='w-full' /> </button>          
            <p className='hidden group-hover:block  hover:text-[#29abe2] lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px] font-medium ml-1'>Add Blog</p>
        </Link> }
    </div>
  );
}
