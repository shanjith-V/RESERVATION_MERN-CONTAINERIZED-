import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./Pages/Home.jsx";
import Success from "./Pages/Success.jsx";
import Login from "./Pages/Login.jsx";
import RegPage from "./Pages/RegPage.jsx";



const App = () => {
  return ( <Router>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<RegPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/success" element={<Success />} />
      
    
    
      
      
      
      

     

    </Routes>
    <Toaster />
  </Router>
  )
};
export default App;