import NavBar from "./NavBar";
import BoxBlog from "./BoxBlog";
import SwitchBlogs from "./SwitchBlogs";
import SideBar from "./SideBar";
const Home = () => {
    const boxes = [];
for (let i = 0; i < 8; i++) {
    boxes.push(<BoxBlog key={i} />);
}
    return ( 
        <div>
            <NavBar />
            <SwitchBlogs />
            <div className='flex justify-start'>
                <div className="flex flex-wrap justify-start ml-[5%]">
                    {boxes}   
                </div>
                <SideBar />
            </div>
            
            
        </div>
     );
}
 
export default Home;
