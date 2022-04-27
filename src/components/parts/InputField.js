import React from "react";

export default function InputField(props) {
  return (
    <input
      value={props.inputValue}
      placeholder={props.fieldPlaceholder}
      type={props.fieldType}
      onChange={props.func}
    />
  );
}
