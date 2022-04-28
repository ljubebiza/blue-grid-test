import { IsMailValid } from "./IsMailValid";
import { Alert } from "./Alert";
import IsInputEmpty from "./IsInputEmpty";

export const IsUsageValid = (name, email, question) => {
  if (IsInputEmpty(name) || IsInputEmpty(email) || IsInputEmpty(question)) {
    Alert("top-end", "warning", "Please fill out all fields", 2000);

    return false;
  } else if (!IsMailValid(email)) {
    Alert(
      "top-end",
      "warning",
      "Email sould contain name, @, domain name: example@gmail.com",
      3000
    );
    return false;
  }
  return true;
};
