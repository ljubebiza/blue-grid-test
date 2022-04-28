import React from "react";

export default function TextArea(props) {
  return (
    <textarea
      rows="10"
      cols="50"
      name="article"
      placeholder={props.textAreaPlaceholder}
      onChange={props.textAreaFunc}
      value={props.value}
    ></textarea>
  );
}
