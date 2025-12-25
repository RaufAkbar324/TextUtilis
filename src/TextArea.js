import React from "react";
import { useState } from "react";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("UpperCase Was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handledownClick = () => {
    console.log("UpperCase Was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleOnClear=()=>{
    setText("");
  }
  const handleOnCopy=()=>{
    let a=document.getElementById("myBox");
    a.select();
    navigator.clipboard.writeText(a.value);
  }
  const RemoveExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }


  // setText("New Text");
  return (
    <>
      <div className="container text-start w-50" style={{backgroundColor: props.mode==='black'?'tomato':'white', color : props.mode==='black'?'white':'black'}}>
        <h3 className="my-5">TEXTUTILIS APP</h3>
        <textarea
          style={{backgroundColor: props.mode==='black'?'tomato':'white', color : props.mode==='black'?'white':'black'}}
          id="myBox"
          className="form-control"
          rows="4"
          placeholder="Enter your Text here..."
          onChange={handleOnChange}
          value={text}
        ></textarea>
        <button className="btn btn-success my-3" onClick={handleUpClick}>
          UpperCase
        </button>
        <button className="btn btn-info mx-3" onClick={handledownClick}>
          LowerCase
        </button>
        <button className="btn btn-danger" onClick={handleOnClear}>
          ClearText
        </button>
        <button className="btn btn-primary mx-3" onClick={handleOnCopy}>
          CopyText
        </button>
        <button className="btn btn-warning" onClick={RemoveExtraSpace}>
          RemoveExtraSpace
        </button>

        <h1 className="my-3">Word Count</h1>
        <p>
          {text.split(" ").length - 1} <span className="fw-bold">words</span>{" "}
          and {text.length} <span className="fw-bold">characters</span>
        </p>
        <h1 className="my-3" >Text Preview</h1>
        <p>{text.length===0?"Enter something to preview it here":text}</p>
      </div>
    </>
  );
}
