import React, { useState } from "react";
import Navbar from "./components/Navbar";
 import TextForm from "./components/TextForm";
import About from "./components/About";
// import "./App.css";




function App() {

  const [mode, setMode] = useState("light");

  const [btnText,setBtnText] = useState("Enable DarkMode");

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      setBtnText("Enable LightMode");
      document.body.style.backgroundColor = "#0a1a31";
      document.body.style.color = "white";
    }
    else{
      setMode("light");
      setBtnText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
    {/* <h1 classNameName="good">how are u </h1>
    <h2>why is this so small</h2> */}


    

    


    <Navbar title = "TextUtils" about = "AboutUtils" mode = {mode} btnText={btnText} toggleMode={toggleMode}/>
      
      <div className="container">
      <TextForm heading = "Enter ur text to  analyze"/>
     
      </div>

      <div className="container mt-5">
        <About/>
      </div>
    
    </>
  )
}

export default App;
