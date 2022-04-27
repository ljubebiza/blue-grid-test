export const HandleContactForm = (name, email, question, setFormValues) => {
  const formValue = {
    name: name,
    email: email,
    question: question,
  };
  setFormValues(formValue);
};
