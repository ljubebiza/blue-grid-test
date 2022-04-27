export const IsMailValid = (mail) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.rest(mail)) {
    return true;
  }
  return false;
};
