import React from 'react';
import './style/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Posts from './components/Posts';

const App = () => {



  
  return (
    <Router>
      <div className="App">
      <h1>JSON server CRUD operations</h1>
      <Routes>
        <Route path="/" element={<Posts />}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
