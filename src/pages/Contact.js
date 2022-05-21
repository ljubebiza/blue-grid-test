import React, { useState } from "react";

import Layout from "../components/Layout";
import InputField from "../components/parts/InputField";
import InputForm from "../components/inputForms/InputForm";
import { HandleContactForm } from "../services/HandleContactForm";
import FormContent from "../components/FormContent";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [formValues, setFormValues] = useState("");

  return (
    <Layout>
      <div className="text-wreper">
        <h1>Contact us</h1>
        <p>
          <strong>Feel</strong> free to reach us for any reason we are on your
          disposal
        </p>
      </div>
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
        textAreaPlaceholder={"You can place your question here..."}
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
      {formValues ? <FormContent formValues={formValues} /> : ""}
    </Layout>
  );
}
