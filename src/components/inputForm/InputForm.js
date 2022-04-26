import React from "react";

import InputField from "../parts/InputField";
import Button from "../parts/Button";
import TextArea from "../TextArea";
import "./styles.css";

export default function InputForm(props) {
  return (
    <div className="input-form">
      <InputField
        fieldPlaceholder={"Title"}
        filedTyp={"text"}
        func={props.func}
        titleValue={props.titleValue}
      />
      <TextArea
        textAreaFunc={props.textAreaFunc}
        value={props.value}
      ></TextArea>
      <Button
        buttonType={"submit"}
        buttonText={props.buttonText}
        buttonFunc={props.buttonFunc}
      />
    </div>
  );
}
