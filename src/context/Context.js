import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CrudContext = createContext();

export const ContextProvider = ({children}) => {

    const [data, setData] = useState([]);

    //Function that get the data from database
    const getData = async () => {
        const response = await axios.get("http://localhost:3006/db");
        console.log(response.data);
        setData(response.data);
      }
  
    useEffect(() => {
      getData();
    }, [])

    return (
        <CrudContext.Provider value={{data}}>
            {children}
        </CrudContext.Provider>
    )
}