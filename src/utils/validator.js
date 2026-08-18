export const checkValidation = (email, pwd, fname) => {
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const checkPwd =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd,
    );
  const checkName = fname ? /^[A-Za-z]+(?: [A-Za-z]+)+$/.test(fname) : true;

  if (!checkEmail) return "Invalid E-mail!!";
  if (!checkPwd) return "Invalid Password!!";
  if (!checkName) return "Invalid Name";

  return null;
};
