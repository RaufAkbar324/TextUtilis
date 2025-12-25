import "./App.css";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import About from "./About";
import { useState } from "react";



function App() {
  const [mode,setmode]=useState('black');
  const toggle=()=>{
    if(mode==='black'){
      setmode('light');
      document.body.style.backgroundColor='white';
    }
    else{
      setmode('black');
      document.body.style.backgroundColor='Tomato';
    }
  }
  return (
    <>
      <Navbar title="TextUtilis" HomeText="Home" AboutText="About" mode={mode} toggleMode={toggle}/>
      <TextArea mode={mode} />
      {/* <About /> */}
    </>
  );
}
export default App;
