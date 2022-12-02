import NavBar from "./NavBar";
import BoxBlog from "./BoxBlog";
import SwitchBlogs from "./SwitchBlogs";
const Home = () => {
    const boxes = [];
for (let i = 0; i < 8; i++) {
    boxes.push(<BoxBlog key={i} />);
}
    return ( 
        <div>
            <NavBar />
            <SwitchBlogs />
            <div className="flex flex-wrap justify-start mx-[5%]">
                 {boxes}   

            </div>
            
        </div>
     );
}
 
export default Home;
