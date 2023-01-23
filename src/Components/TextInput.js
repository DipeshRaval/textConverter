import React, { useState } from "react";

const TextInput = (props) => {
  const [text, setText] = useState("");

  const clickToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAltert("Text covert to Lower Case", "success");
  };
  const clickToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAltert("Text covert to Upper Case", "success");
  };

  const clickToCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAltert("Text copy in to clipbeard", "success");
  };

  const clickToClear = () => {
    setText("");
  };
  const clickToRemoveSpace = () => {
    const newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAltert("extra space are removed from a text", "success");
  };

  const onChangeHandle = (event) => {
    // console.log("on chnage");
    setText(event.target.value);
  };
  return (
    <div
      className={`container my-2 text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h3 className="my-2">{props.title}</h3>
      <div className="mb-3 mt-2">
        <textarea
          className={`form-control bg-${
            props.mode === "light" ? "light" : "dark"
          } text-${props.mode === "light" ? "dark" : "light"}`}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={clickToUpperCase}
        >
          To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={clickToLowerCase}
        >
          To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={clickToClear}
        >
          CLEAR
        </button>
        <button
          type="button"
          disabled={text.length === 0}
          className={`btn btn-primary mx-2 my-1`}
          onClick={clickToCopy}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2 my-1"
          disabled={text.length === 0}
          onClick={clickToRemoveSpace}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>
        <h2>Analysis of Your Text</h2>
        <p>
          Your Text contain a{" "}
          <span style={{ fontWeight: "bold" }}>
            {text.length === 0
              ? 0
              : text.split(/\s+/).filter((ele) => {
                  return ele.length > 0;
                }).length}{" "}
            words
          </span>{" "}
          and a{" "}
          <span style={{ fontWeight: "bold" }}>
            {text.trim().length} Letters.
          </span>
        </p>

        <p>
          You can read this text in{" "}
          <strong>
            {0.008 *
              text.split(/\s+/).filter((ele) => {
                return ele.length > 0;
              }).length}{" "}
            Minutes
          </strong>
        </p>

        <h2>Preview</h2>
        <p>{text ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
};

export default TextInput;
