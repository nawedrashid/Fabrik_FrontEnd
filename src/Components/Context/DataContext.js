import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const InitialDataContext = {
  GLBData: [
    {
      _id: "",
      name: "",
      file3d: "",
    },
  ],
  setGLBData: () => null,
};

export const DataContext = createContext(InitialDataContext);

const GLBDataContext = ({ children }) => {
  const [GLBData, setGLBData] = useState(InitialDataContext.GLBData);
  const [count, setCount] = useState(0)

  useEffect(() => {
    const getGLBData = async () => {
      const GLBResponse = await axios.get("http://localhost:5000/threeFile");
      if (GLBResponse) {
        setGLBData(GLBResponse.data.getGLBData);
        setCount(count+1)
      } else {
        toast.error("Failed to Upload");
      }
    };
    getGLBData();
  }, [count]);

  return(
    <DataContext.Provider value = {{GLBData,setGLBData,setCount,count}}>
        {children}
    </DataContext.Provider>
  )
};

export default GLBDataContext
