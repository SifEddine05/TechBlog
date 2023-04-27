import BoxBlog from "../components/BoxBlog";
import SwitchBlogs from "../components/SwitchBlogs";
import SideBar from "../components/SideBar"
const Home = () => {
    const boxes = [];
for (let i = 0; i < 8; i++) {
    boxes.push(<BoxBlog key={i} />);
}
    return ( 
        <div>
            <SwitchBlogs />
            <div className='flex justify-center sm:flex-row flex-col-reverse'>
                <div className="flex flex-wrap justify-center ml-[2%]">
                    {boxes}   
                </div>
                <SideBar />
            </div>
            
            
        </div>
     );
}
 
export default Home;
