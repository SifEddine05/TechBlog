import NavBar from "./components/NavBar";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ShowBlog from "./pages/ShowBlog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Forgotpwd from "./pages/Forgotpwd";




function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} /> 
        <Route  path="/newBlog" element={<AddBlog/>}/> 
        <Route  path="/blogs/:id" element={<ShowBlog/>}/>
        <Route  path="/edit/:id" element={<EditBlog/>}/> 

        <Route  path="/login" element={<Login/>}/>
        <Route  path="/signup" element={<SignUp/>}/>
        <Route  path="/frgpass" element={<Forgotpwd/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
