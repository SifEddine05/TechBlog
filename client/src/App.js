import NavBar from "./components/NavBar";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ShowBlog from "./pages/ShowBlog";
import EditBlog from "./pages/EditBlog";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from "./pages/SignUp";
import Forgotpwd from "./pages/Forgotpwd";




function App() {
  return (
   
    <Router>
      <Switch>
        <Route exact path="/"> <NavBar /> <Home /></Route>
        <Route exact path="/newBlog"> <NavBar /> <AddBlog /></Route>
        <Route exact path="/blogs/:id"><NavBar /> <ShowBlog /></Route>
        <Route exact path="/edit"> <NavBar /> <EditBlog /></Route>
        <Route exact path="/login" ><Login /></Route>
        <Route exact path="/signup" ><SignUp /></Route>
        <Route exact path="/frgpass" ><Forgotpwd /></Route>

      </Switch>
    </Router>
   
  );
}

export default App;
