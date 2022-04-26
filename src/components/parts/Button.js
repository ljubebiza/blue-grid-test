import React from "react";

export default function Button(props) {
  return (
    <button type={props.buttonType} onClick={props.buttonFunc}>
      {props.buttonText}
    </button>
  );
}
