export const checkValidation = (email, pwd) => {
  const checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const checkPwd =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd,
    );

  console.log(checkEmail, checkPwd);

  if (!checkEmail) return "Invalid E-mail!!";
  if (!checkPwd) return "Invalid Password!!";

  return null;
};
