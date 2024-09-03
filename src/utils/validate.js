export const checkValidData = (Email, Password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password Error";

  return null;
};
