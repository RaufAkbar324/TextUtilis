import "./App.css";
import Navbar from "./Navbar";
import TextArea from "./TextArea";
import About from "./About";
import { useState } from "react";
import Alert from "./Alert";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";

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

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743"; // Changed tomato to a dark blue for better UI
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtilis - Dark Mode";
    } 
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtilis - Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtilis"
        HomeText="Home"
        AboutText="About"
        mode={mode}
        toggleMode={toggle}
      />

      {/* This component needs the "null check" inside it! */}
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route
            exact path="/"
            element={<TextArea heading="Enter Your Text here to Analyze" mode={mode} showalert={showalert} />}
          />
          <Route
            exact path="/about"
            element={<About mode={mode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;