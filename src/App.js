import './App.css';
import Navbar from "./components/Navbar";
import {Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
        <Router>
      <Navbar/>
        </Router>
    </div>
  );
}

export default App;
