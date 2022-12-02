import bg from '../assets/bg.jpg'
import note from '../assets/note.png'
import date from '../assets/date.png'
import more from '../assets/more.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const BoxBlog = () => {
    return ( 
    <div className=" mr-[1%] mb-[1%] lg:h-[320px] shadow-2xl rounded-xl lg:w-[250px]  md:w-[180px]  sm:w-[150px] w-[100px]  md:h-[250px] sm:h-[200px] pb-2 " >
        <Link to='/blogs/:id' >
            <div className='h-[55%]'>
                <img src={bg} alt="bg" className='rounded-xl p-1 h-[100%] w-[100%]' />
            </div>
            <div className='flex justify-center'>
                <h3 className='lg:text-[18px] md:text-[14px] sm:text-[10px] text-[10px] font-black  '>React Blog</h3>

            </div>
            <div className='flex justify-center mt-2 '>
                <div className='flex items-center  justify-center '>
                    <img src={note} alt='author' className='w-[20%]'/>
                    <h3 className='lg:text-[14px] md:text-[10px] sm:text-[7px] text-[6px] ml-1 '>Sifou</h3>
                </div>
                <div className='flex items-center  justify-center '>
                    <img src={date} alt='date' className='w-[15%] mr-1' />
                    <h3 className='lg:text-[14px] md:text-[10px] sm:text-[7px] text-[6px] mr-1' >01/12/2022</h3>
                </div>
            
            </div>
            <div>
                <p className=' lg:text-[14px] md:text-[10px] sm:text-[7px] text-[6px] text-center textopacity-75 mt-2'>jkdfhshdkfhdj skqffjqjjkfjqkjf jsfkqkfjjfkqdjfk lqfkljklqjdkfjjfj</p>
            </div>
            <div className='flex justify-end group items-center mt-1'>
                <img src={more} alt='more' className='w-[10%] hover:cursor-pointer mr-1'/> 
                <Link to='/blogs/:id ' className=' hidden group-hover:block hover:text-[#29abe2] lg:text-[14px] md:text-[10px] sm:text-[7px] text-[6px] text-[#000]'>See more</Link>
            </div>
        </Link>
        
        
    </div> 
    );
}
 
export default BoxBlog;