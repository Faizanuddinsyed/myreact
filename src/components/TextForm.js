

// import React, { useState } from 'react'

// function TextForm() {

//   const [text, setText] = useState("")

//   const handleOnClick = () => {
//     setText(text.toUpperCase());
   
//   }

//   const handleClick = () => {
//     setText(text.toLowerCase())
//   }

//   const handleClear = () => {
//     setText('')
//   }

//   const handleOnChange = (event) => {
//     setText(event.target.value)
//   }
//   return (
//     <div>

//       <h1>Text Form</h1>
//       <div className="mb-3">
//         <textarea className="form-control" id="myBox" rows="3" value={text} onChange={handleOnChange}></textarea>
//       </div>
//       <button type="submit" className="btn btn-primary mx-2" onClick={handleOnClick}>upperCase</button>
//       <button type="submit" className="btn btn-primary mx-2" onClick={handleClick}>lowercase</button>
//       <button type="submit" className="btn btn-primary" onClick={handleClear}>clear text</button>


//       <div className='container'>
//         <h1>Text will be seen here</h1>
//         <p>{text}</p>

//       </div>

//       <div>
//         <p>{text.length}  words and {text.split(" ").length} characters</p>
//         <p>{text.split(" ").filter(word => word.length > 0).length} unique words</p>
//         <p>{0.008* text.split(" ").length} minutes read</p>
//       </div>

//     </div>
    
//   )
// }

// export default TextForm


import React from 'react'
import { useState ,useRef} from 'react'

function TextForm(props) {

  const [text, setText] = useState("");

  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);


  const startCounter = () =>{
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(()=>{
      setCount((prevCount)=> prevCount+1);
    },1000);
  };

  const stopCounter = () =>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const handleOnClick = () =>{
    setText(text.toUpperCase());
  }

  const handleClick = () =>{
    setText(text.toLowerCase());
  }

  const handleTitleCase = () => {
    setText(
      text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  const handleClear = () =>{
    setText("");
  }

  const handleCount = () =>{
    setCount("");
  }

  const handleIncrement = () =>{
    setCount(count+1);
  }

  const handleDecrement = () =>{
    setCount(count-1);
  }



  const handleOnChange = (event) =>{
      setText(event.target.value);
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange} ></textarea>
    </div>
    <div>
      <button className='btn btn-primary mt-2' onClick={handleOnClick}>upperCase</button>
      <button className='btn btn-primary mt-2 mx-2' onClick={handleClick}>lowerCase</button>
      <button className='btn btn-primary mt-2' onClick={handleClear}>Clear</button>
      <button className='btn btn-primary mt-2 mx-2' onClick={handleTitleCase}>Capital</button>
    </div>

    <div className='container mt-2'>

     <h1> Preview Text</h1>

     <p>{text}</p>
     <p><b>Lenght -</b> {text.length}</p>
     <p1>{text.split(" ").length}</p1>
     
     

    </div>

    <div className='container mt-3'>

      <h1>Count - {count}</h1>
      <button className='btn btn-primary mx-1' onClick={handleIncrement}>Increment</button>
      <button className='btn btn-primary' onClick={handleDecrement}>decrement</button>
      <button className='btn btn-primary mx-1' onClick={startCounter}>Start</button>
      <button className='btn btn-primary' onClick={stopCounter}>Stop</button>
      <button className='btn btn-primary mt-2 mx-1' onClick={handleCount}>clear</button>

    </div>
    </>
  )
}

export default TextForm



















































