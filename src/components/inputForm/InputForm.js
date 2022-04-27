import React from "react";

import InputField from "../parts/InputField";
import Button from "../parts/Button";
import TextArea from "../TextArea";
import "./styles.css";
import { HandleSubmit } from "../../services/HandleSubmit";

export default function InputForm(props) {
  return (
    <div className="input-form">
      <InputField
        fieldPlaceholder={"Title"}
        filedTyp={"text"}
        func={props.func}
        inputValue={props.inputValue}
      />
      {props.children}
      <TextArea
        textAreaFunc={props.textAreaFunc}
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
