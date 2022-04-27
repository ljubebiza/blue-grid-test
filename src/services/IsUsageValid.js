import { IsMailValid } from "./IsMailValid";
import { Alert } from "./Alert";
import IsInputEmpty from "./IsInputEmpty";

export const IsUsageValid = (name, email, question) => {
  if (!IsInputEmpty(name) && !IsInputEmpty(email) && !IsInputEmpty(question)) {
    Alert("top-end", "warning", "Please fill out all fields");
    return false;
  }
  if (!IsMailValid(email)) {
    Alert(
      "top-end",
      "warning",
      "Adress must contain name, @, domain name and domain: example@gmail.com"
    );
    return false;
  }

  return true;
};
