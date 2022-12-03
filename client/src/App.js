import NavBar from "./components/NavBar";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import ShowBlog from "./pages/ShowBlog";
import EditBlog from "./pages/EditBlog";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   
    <Router>
       <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/newBlog"><AddBlog /></Route>
        <Route exact path="/blogs/:id"><ShowBlog /></Route>
        <Route exact path="/edit"><EditBlog /></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
