import logo from './logo.svg';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
