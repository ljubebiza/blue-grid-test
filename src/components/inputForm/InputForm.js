import React from "react";

import InputField from "../parts/InputField";
import Button from "../parts/Button";
import TextArea from "../TextArea";
import "./styles.css";

export default function InputForm(props) {
  return (
    <div className="input-form">
      <InputField
        fieldPlaceholder={props.fieldPlaceholder}
        filedTyp={"text"}
        func={props.func}
        inputValue={props.inputValue}
      />
      {props.children}
      <TextArea
        textAreaFunc={props.textAreaFunc}
        textAreaPlaceholder={props.textAreaPlaceholder}
        value={props.textAreaValue}
      ></TextArea>
      <Button
        buttonType={"submit"}
        buttonText={props.buttonText}
        buttonFunc={props.buttonFunc}
      />
    </div>
  );
}
