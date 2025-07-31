function addTwo(num: number) {
  return num + 2;
}

let myNum = addTwo(6);

console.log(myNum);

function getUpperCase(val: string) {
  return val.toUpperCase();
}

console.log(getUpperCase("Hello world!"));

let loggedInUser = (
  name: string,
  email: string,
  isEmployee: boolean = false
) => {
  if (isEmployee) {
    return `I am ${name}`;
  } else return "Not employee";
};

console.log(loggedInUser("Smriti", "smriti@gmail.com"));

export {};
