import NavBar from "./components/NavBar";
import Home from './pages/Home';
import AddBlog from './pages/AddBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
   
    <Router>
       <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/newBlog"><AddBlog /></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
