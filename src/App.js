import "./App.css";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import About from "./About";
import { useState } from "react";
import Alert from "./Alert";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { remove } from "dom/lib/mutation";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggle = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    console.log(cls);
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743"; // Changed tomato to a dark blue for better UI
      showalert("Dark mode has been enabled", "alert-success");
      document.title = "TextUtilis - Dark Mode";
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "alert-success");
      document.title = "TextUtilis - Light Mode";
    }
  };


const removeBodyClasses=()=>{
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-secondary');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-info');
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
}

  return (
    <div>
    <BrowserRouter>
    <Navbar title="TextUtilis" HomeText="Home" AboutText="About" mode={mode} toggleMode={toggle}/>
        <Alert alert={alert} />
    <Routes>
      
      <Route path="/" element={<TextArea heading="Enter Your Text here to Analyze" mode={mode} showalert={showalert}/>} />
      <Route path="/about" element={<About />} />
    </Routes>

    </BrowserRouter>
     </div>
    
   
  );
}

export default App;