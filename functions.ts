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

//more on functions

const heros = ["spiderman", "thor", "ironman"];

console.log(
  heros.map((hero): string => {
    return `Hero is ${hero}`;
  })
);

//anonymous functions

heros.forEach((hero) => {
  console.log(hero.toUpperCase());
});

//void function: function that does not return any thing but it may return undefined

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

//never function: function that never returns anything
// the difference between the void function and never function being that the never function
//does not completely perform its execution

function fail(msg: string): never {
  throw new Error(msg);
}

//When fail() is called, it immediately throws an error
// The function execution stops abruptly - no lines after it will execute
// This helps with type safety and exhaustive checks

export {};
