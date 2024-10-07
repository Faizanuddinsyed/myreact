import React from "react";
import Navbar from "./components/Navbar";
 import TextForm from "./components/TextForm";
import About from "./components/About";
// import "./App.css";




function App() {


  return (
    <>
    {/* <h1 classNameName="good">how are u </h1>
    <h2>why is this so small</h2> */}


    

    


    <Navbar title = "TextUtils" about = "AboutUtils"/>
      
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
