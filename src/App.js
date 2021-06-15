import React, {useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Design from "./pages/Design";
import {useDispatch} from "react-redux";
import { getShapes } from './actions/shapes'
import Profile from "./pages/Profile";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getShapes());
    }, [dispatch]);

    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Route exact path="/register" children={<Register/>}/>
                <Route exact path="/login" children={<Login/>}/>
                <Route exact path="/design" children={<Design/>}/>
                <Route exact path="/profile" children={<Profile/>}/>
            </Router>
        </div>
    );
}

export default App;
