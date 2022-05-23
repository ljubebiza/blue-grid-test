import React from "react";
import formContent from "../styles/formContent.css";

export default function FormContent(props) {
  return (
    <div className="form-content">
      <label>Name:</label>
      {props.formValues.name}
      <div className="line"></div>

      <label>Email:</label>
      {props.formValues.email}
      <div className="line"></div>

      <div className="question-text">
        <h3>Your question:</h3>
        {props.formValues.question}
      </div>
      <div className="polite-text">Thank you for contacting us</div>
    </div>
  );
}
