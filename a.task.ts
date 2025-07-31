let logInUser = (
  userName: string,
  password: string,
  role: string = "guest"
) => {
  if (role === "admin") {
    if (password === "admin123") {
      return `Welcome admin ${userName}`;
    }
  } else if (role === "employee") {
    if (password.indexOf("emp") === 0) {
      return `Welcome employee ${userName}`;
    }
  } else if (role === "guest") {
    return `Welcome guest ${userName}`;
  } else {
    function throwErr(errMsg: string): never {
      throw new Error(errMsg);
    }
    return `Invalid role`;
  }
};

console.log(logInUser("Smriti", "emp1234", "employee"));
