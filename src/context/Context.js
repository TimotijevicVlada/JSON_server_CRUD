import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CrudContext = createContext();

export const ContextProvider = ({ children }) => {
  
  const [data, setData] = useState([]);
  const [createVisible, setCreateVisible] = useState(false);
  const [createValues, setCreateValues] = useState({});

  //Function that get the data from database
  const getData = async () => {
    const response = await axios.get("http://localhost:3006/db");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //Handle add new post
  const handleAdd = async () => {
    await axios.post("http://localhost:3006/posts", createValues);
    getData();
  };

  return (
    <CrudContext.Provider
      value={{
        data,
        getData,
        handleAdd,
        createVisible,
        setCreateVisible,
        createValues,
        setCreateValues,
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
