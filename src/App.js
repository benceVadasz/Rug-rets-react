import './App.css';
import Navbar from "./components/Navbar";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Design from "./pages/Design";

const App = () => {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Route exact path="/register" children={<Register/>}/>
            <Route exact path="/login" children={<Login/>}/>
            <Route exact path="/design" children={<Design/>}/>
        </Router>
    </div>
  );
}

export default App;
