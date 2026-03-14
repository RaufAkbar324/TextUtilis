import React from "react";
import { useState } from "react";
import Alert from "./Alert";

export default function TextArea(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("UpperCase Was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('Converted to UpperCase','alert-success');
  };
  const handledownClick = () => {
    console.log("UpperCase Was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('Converted to LowerCase','alert-success');
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const handleOnClear=()=>{
    setText("");
    props.showalert('Text Cleared','alert-success');
  }
  const handleOnCopy=()=>{
    let a=document.getElementById("myBox");
    a.select();
    navigator.clipboard.writeText(a.value);
    document.getSelection().removeAllRanges();
    props.showalert('Text Copied','alert-success');
  }
  const RemoveExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert('Extra Space Removed','alert-success');
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
        <button disabled={text.length===0} className="btn btn-success my-1 mx-1" onClick={handleUpClick}>
          UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handledownClick}>
          LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleOnClear}>
          ClearText
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnCopy}>
          CopyText
        </button>
        <button disabled="text.length===0" className="btn btn-warning mx-1 my-1" onClick={RemoveExtraSpace}>
          RemoveExtraSpace
        </button>

        <h1 className="my-3">Word Count</h1>
        <p>
          {text.split(" ").filter((element)=> {return element.length!==0}).length} <span className="fw-bold">words</span>{" "}
          and {text.length} <span className="fw-bold">characters</span>
        </p>
        <h1 className="my-3" >Text Preview</h1>
        <p>{text.length===0?"Enter something to preview it here":text}</p>
      </div>
    </>
  );
}
