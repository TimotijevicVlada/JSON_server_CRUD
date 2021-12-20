import React, {useEffect} from 'react';
import './style/App.css';
import axios from "axios";

const App = () => {

   const getData = async () => {
      const response = await axios.get("http://localhost:3006/comments");
      console.log(response.data);
    }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="App">
      <h1>JSON server CRUD operations</h1>
    </div>
  );
}

export default App;
