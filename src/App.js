import './App.css';
import Navbar from "./components/Navbar";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Route exact path="/register" children={<Register/>}/>
        </Router>
    </div>
  );
}

export default App;
