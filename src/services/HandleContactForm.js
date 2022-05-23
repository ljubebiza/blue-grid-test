import { Alert } from "./Alert";
import { IsUsageValid } from "./IsUsageValid";

export const HandleContactForm = (
  name,
  email,
  question,
  setName,
  setEmail,
  setQuestion,
  setFormValues
) => {
  if (IsUsageValid(name, email, question)) {
    const formValue = {
      name: name,
      email: email,
      question: question,
    };

    setFormValues(formValue);
    setName("");
    setEmail("");
    setQuestion("");
    Alert("center", "success", "created successfully", 1500);
  }
};
