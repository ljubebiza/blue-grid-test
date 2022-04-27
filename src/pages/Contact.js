import React, { useState } from "react";

import Layout from "../components/Layout";
import InputField from "../components/parts/InputField";
import InputForm from "../components/inputForm/InputForm";
import { HandleContactForm } from "../services/HandleContactForm";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [formValues, setFormValues] = useState("");

  return (
    <Layout>
      {formValues ? (
        <div>
          <h3>Name</h3>
          {formValues.name}
          <h3>Email</h3>
          {formValues.email}
          <h3>Question</h3>
          {formValues.question}
          <p>Thank you for contacting us</p>
        </div>
      ) : (
        ""
      )}
      <InputForm
        func={(event) => setName(event.target.value)}
        inputValue={name}
        fieldPlaceholder={"Name"}
        buttonText={"Submit"}
        buttonFunc={() => {
          HandleContactForm(
            name,
            email,
            question,
            setName,
            setEmail,
            setQuestion,
            setFormValues
          );
        }}
        textAreaFunc={(event) => setQuestion(event.target.value)}
        textAreaValue={question}
      >
        <InputField
          func={(event) => {
            setEmail(event.target.value);
          }}
          fieldPlaceholder={"Email"}
          inputValue={email}
        />
      </InputForm>
    </Layout>
  );
}
