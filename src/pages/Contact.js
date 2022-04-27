import React from "react";
import { useState } from "react";

import Layout from "../components/Layout";
import InputForm from "../components/inputForm/InputForm";
import { HandleContactForm } from "../services/HandleContactForm";
import InputField from "../components/parts/InputField";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [formValues, setFormValues] = useState("");

  return (
    <Layout>
      <div>
        name:
        <h1>{formValues.name}</h1>
        email:
        <h1>{formValues.email}</h1>
        question:
        <p>{formValues.question}</p>
        Thank you for contacting us.
      </div>
      <InputForm
        func={(event) => {
          setName(event.target.value);
        }}
        inputValue={name}
        textAreaFunc={(event) => {
          setQuestion(event.target.value);
        }}
        textAreaValue={question}
        buttonText={"Submit"}
        buttonFunc={(e) =>
          HandleContactForm(name, email, question, setFormValues)
        }
      >
        <InputField
          func={(event) => {
            setEmail(event.target.value);
          }}
          inputValue={email}
        />
      </InputForm>
    </Layout>
  );
}
