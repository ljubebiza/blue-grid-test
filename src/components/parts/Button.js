import React from "react";

export default function Button(props) {
  return (
    <button id={props.id} type={props.buttonType} onClick={props.buttonFunc}>
      {props.buttonText}
    </button>
  );
}
