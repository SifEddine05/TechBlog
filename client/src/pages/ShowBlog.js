import bg from '../assets/bg.jpg'
import { useState ,useEffect} from "react";
import { Link } from  "react-router-dom";

const ShowBlog = () => {
    const[visiblite,setvisiblite] =useState(true) ; 
    const MyBlog =()=>{ // test if the blog is created by the current user or not to give him the posibilte to edit and to delete our not 
        setvisiblite(true);
        //this function must be excuted when we upload paeg
    }
    useEffect (MyBlog,[])
    return (
    
    <div  className="shadow-xl mx-[10%] rounded-lg bg-[#29abe2] my-[3%] bg-opacity-5 lg:p-5 md:p-4 sm:p-3 p-2">        
        <div className='flex justify-between'>
            <div>
                <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]   font-semibold  '>Blog Title</h1>
                <p className='text-left opacity-50 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px]'> #Category</p>
                <p className='text-left mt-[3%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] w-[75%]  inline'> Description FKDSJKJFKLJDSKF jfhjhsdjfkhsdjkfh kdshhhhhh hhhhhhhhhhhhhhhhhhhhhfjkhdsjfhd kldsfhsdhhh JDSKJFKSJDKFJDSKJFjksq jdgsgfjkdfhhkfgHG </p>
                <p className='text-left mt-[10%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-semibold'>Created By: <span className='text-left ml-1 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-normal opacity-75'> Sifou</span> </p>
                <p className='text-left mt-[5%] lg:text-[14px] md:text-[11px] sm:text-[8px] text-[5px] opasity-50 '> {Date().toLocaleString()}</p>
            </div>
            <div className='w-[100%] self-center'><img src={bg} alt='blog' className='w-[100%]  sahdow-sm rounded-lg'/></div>
        </div>
        <hr className='mt-[5%] mb-[5%] '/>
        <p className='  mb-[5%] lg:text-[18px] md:text-[15px] sm:text-[12px] text-[9px] w-[75%] lg:leading-8  md:leading-6 sm:leading-4 leading-2 text-center mx-auto'>
            In his tractibus navigerum nusquam visitur flumen sed in locis plurimis aquae suapte natura calentes emergunt ad usus aptae multiplicium medelarum. verum has quoque regiones pari sorte Pompeius Iudaeis domitis et Hierosolymis captis in provinciae speciem delata iuris dictione formavit

            Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.

            Siquis enim militarium vel honoratorum aut nobilis inter suos rumore tenus esset insimulatus fovisse partes hostiles, iniecto onere catenarum in modum beluae trahebatur et inimico urgente vel nullo, quasi sufficiente hoc solo, quod nominatus esset aut delatus aut postulatus, cap    
        </p>
        <div className='flex justify-end gap-2'>
          {visiblite &&  <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 "  ><Link to='/edit'>Edit</Link></button>}
          {visiblite && <button className="  border-2 shadow-lg border-gray-300 text-gray-900 bg-[#29abe2] hover:cursor-pointer hover:text-white lg:text-[16px] font-semibold md:text-[13px] sm:text-[10px] text-[7px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block   md:p-2.5 p-1 "  >Delete</button> }
        
        </div>
        
        
        
    </div>  );
}
 
export default ShowBlog;