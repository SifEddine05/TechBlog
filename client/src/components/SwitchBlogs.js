import { useState } from "react";



export default function SwitchBlogs() {

    const stl1='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px]  shadow-xl border rounded-sm p-2 font-medium'
    const stl2='lg:text-[18px] md:text-[16px] sm:text-[12px] text-[8px]  shadow-xl border rounded-sm p-2 font-medium text-[#29abe2]	 bg-[#000] bg-opacity-5  shadow-inner'
    const [style1,setStyle1] =useState(stl2)
    const [style2,setStyle2] =useState(stl1)
    const [style3,setStyle3] =useState(stl1)

const handlClick = (e)=>{
    if(e.target.value==='all')
    {
        setStyle1(stl2)
        setStyle2(stl1)
        setStyle3(stl1)

    }else if (e.target.value==='trending')
    {
        setStyle1(stl1)
        setStyle2(stl2)
        setStyle3(stl1)

    }else{
        setStyle1(stl1)
        setStyle2(stl1)
        setStyle3(stl2)
 
    }
}
  return (
      <div className='mt-[2%] mb-[2%] flex pl-[5%]'>
          <button className={style1 } value='all' onClick={handlClick}>All Blogs</button>
          <button className={style2} value='trending' onClick={handlClick}>Trending</button>
          <button className={style3} value='myblogs' onClick={handlClick}>My blogs</button>

      </div>
    
  );
}
