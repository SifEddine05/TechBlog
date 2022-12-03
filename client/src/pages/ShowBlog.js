import bg from '../assets/bg.jpg'
const ShowBlog = () => {
    return (
    <div className="shadow-xl mx-[10%] rounded-lg bg-[#29abe2] my-[3%] bg-opacity-5 p-5">        
        <div className='flex justify-between'>
            <div>
                <h1 className='text-center lg:text-[40px] md:text-[30px]  sm:text-[20px]  text-[10px]   font-semibold  '>Blog Title</h1>
                <p className='text-left opacity-50 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px]'> #Category</p>
                <p className='text-left mt-[3%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] w-[75%]'> Description FKDSJKJFKLJDSKF jfhjhsdjfkhsdjkfh kdshfjkhdsjfhd kldsfhsdhhh JDSKJFKSJDKFJDSKJFjksqjdgsgfjkdfhhkfgHG </p>
                <p className='text-left mt-[10%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-semibold'>Created By: <span className='text-left ml-1 lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] font-normal opacity-75'> Sifou</span> </p>
                <p className='text-left mt-[5%] lg:text-[14px] md:text-[11px] sm:text-[8px] text-[5px] opasity-50 '> {Date().toLocaleString()}</p>
            </div>
            <img src={bg} alt='blog' className='w-[50%]  sahdow-sm rounded-lg'/>
        </div>
        <hr className='mt-[5%] mb-[5%] '/>
        <p className='text-left  mb-[10%] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[7px] w-[75%] leading-8 text-center mx-auto'>jsqdhjqshdjk sjqhfdjkgdsqfhg djsfhjksdgfjksdj j hjsdhjfhjkdshvj hdsjhfjksdhjhfjdshjk jshfjhdsjkhjfhjf jhdjfhhfjdshj </p>
        
        
    </div>  );
}
 
export default ShowBlog;