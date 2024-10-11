import React, { useState } from "react";
import Navbar from "./components/Navbar";
 import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./Alert";
// import "./App.css";




function App() {

  const [mode, setMode] = useState("light");

  const [btnText,setBtnText] = useState("Enable DarkMode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      setBtnText("Enable LightMode");
      document.body.style.backgroundColor = "#0a1a31";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("light");
      setBtnText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled","success");
    }
  }

  const toggleGreenMode = () => {
    if(mode === "light"){
      setMode("dark");
      setBtnText("Enable LightMode");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("light");
      setBtnText("Enable GreenMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode Enabled","success");
    }
  }

  return (
    <>
    {/* <h1 classNameName="good">how are u </h1>
    <h2>why is this so small</h2> */}


    

    


    <Navbar title = "TextUtils" about = "AboutUtils" mode = {mode} btnText={btnText} toggleMode={toggleMode} toggleGreenMode={toggleGreenMode}/>

    <Alert alert = {alert}/>
      
      <div className="container">
      <TextForm showAlert={showAlert} heading = "Enter ur text to  analyze"/>
     
      </div>

      <div className="container mt-5">
        <About/>
      </div>
    
    </>
  )
}

export default App;
