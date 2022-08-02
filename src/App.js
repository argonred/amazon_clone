import React from "react";
import Header from "./components/Header";
import Login from "./screens/Login";
import Home from "./screens/Home";
import "./index.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return(
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/login" element={
                                                    <div>
                                                        <Login />
                                                    </div>} />
                    <Route path="/" element={
                                                    <div>
                                                        <Header />
                                                        <Home />
                                                    </div>}/>
                </Routes> </div> </Router>
    )
}

export default App;