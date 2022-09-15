import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./UI/Card";
import "./Home.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "./Context/DataContext";

const Home = () => {

  const [fileName, setFileName] = useState("No File Selected")
  const [GLBfile, setGLBFile] = useState()

  const { GLBData, setCount,count } = useContext(DataContext) 

  const changeHandler = (e) => {
    setFileName(e.target.files[0].name)
    setGLBFile(e.target.files[0])
  }

  const clickHandler = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("fileName", fileName);
      form.append("dfile", GLBfile);
      const response = await axios({
        method: "post",
        url: 'http://localhost:5000/threeFile/upload',
        data: form,
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
      if (response) {
        setFileName("No File Selected")
        setGLBFile()
        setCount(count+1)
        toast.success("Uploaded")
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
    
  return (
    <div className="bgr">
      <Card className="SUCC">
        <div className="assi">Assignment</div>
        <p className="passi">Made by Md Nawed Rashid</p>
      </Card>
      <Card className="SUCCC">
        <div className="uploadS">
          <div className="fileS">
          <input id="filebutton" type="file" hidden onChange={(e) =>changeHandler(e)} />
          <label htmlFor="filebutton" className="labelU"> 
            File
           </label>
           <span className="spn">{fileName}</span>
          </div>
          
          <button className="upload btn" onClick={(e)=>clickHandler(e)}>Upload</button>
        </div>
      </Card>
      <Card className="SUCCCC">
        {GLBData.map((models) => {
          return (
            <div className="views">
              <div className="modelName">{models.name}</div>
              <div>
                <Link to={`/${models._id}`}>
                  <button className="btn arrow">{">"}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </Card>
      <ToastContainer theme="light" position="top-center" autoClose={1000}  />
    </div>
  );
};

export default Home;
