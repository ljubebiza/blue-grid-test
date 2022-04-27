import React from "react";

export default function TextArea(props) {
  return (
    <textarea
      rows="10"
      cols="50"
      name="article"
      placeholder="Type your article here..."
      onChange={props.textAreaFunc}
      value={props.textAreaValue}
    ></textarea>
  );
}
