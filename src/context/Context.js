import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CrudContext = createContext();

export const ContextProvider = ({ children }) => {

  const [data, setData] = useState([]);
  const [createVisible, setCreateVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState({});

  //Function that get the data from database
  const getData = async () => {
    const response = await axios.get("http://localhost:3006/db");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <CrudContext.Provider
      value={{
        data,
        getData,
        createVisible,
        setCreateVisible, 
        updateVisible, 
        setUpdateVisible, 
        itemToUpdate, 
        setItemToUpdate
      }}
    >
      {children}
    </CrudContext.Provider>
  );
};
