const validation = (email, password) => {
  const isEmail =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      email
    );
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

  if (!isEmail) return "Invalid Email";
  if (!isPassword) return "Invalid Password";

  return null;
};

export default validation;
