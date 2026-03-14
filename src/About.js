import React from "react";
import { useState } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText, setBtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <h2 className="mt-4 mb-4">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What is Text-Utilis?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              <strong>Text-Utilis is a simple text helper tool that helps you analyze your text.
                 It can quickly show the number of characters, number of words, and other 
                useful details in your text. It is very helpful for students, writers, 
                and content creators who want to check their text easily.
                </strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              How does Text-Utilis count words and characters?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              You just need to paste or type your text into the text box.
               The tool will automatically calculate and display the total
                number of words, characters, and other text statistics instantly.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Is Text-Utilis free to use?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Yes, Text-Utilis is completely free to use.
               You can analyze your text, count words, 
               check characters, and use other text tools
                without paying anything.
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </>
  );
}
