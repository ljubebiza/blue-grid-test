export default function isMailValid(mail) {
  patern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (patern.rest(mail)) {
    return true;
  }
  return false;
}
