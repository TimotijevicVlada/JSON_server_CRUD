import React from "react";
import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;
