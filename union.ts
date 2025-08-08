//using union types to combine different types

// The 'score' variable can hold either a number or a string value using a union type
let score1: number | string = 100;

score1 = "100";
score1 = 100;

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let Alice1: User | Admin = {
  name: "Alice",
  id: 123,
  userName: "alice123",
};

let Bob1: User | Admin = {
  name: "Bob",
  id: 456,
};

Bob1 = { userName: "bob123", id: 456 };

gettingDbId(3);
gettingDbId("smriti");

function gettingDbId(id: number | string) {
  // id.toUpperCase();
  //the above operation is not allowed as the ID is a defined as a union type of number or string
  // but we can perform the following operation by checking the type of id
  //this is a type guard and this is how we can use union types effectively without causing type errors
  if (typeof id === "string") {
    id = id.toUpperCase();
  }
  if (typeof id === "number") {
    id = id + 1;
  }

  // Simulating a database operation
  console.log(`DB id is: ${id}`);
}

//using union types with arrays

const data1: number[] = [1, 2, 3];
const data2: string[] = ["one", "two", "three"];

const data3: number[] | string[] = [1, 2, 3];
const data4: number[] | string[] = ["one", "two", "three"];

const data5: (number | string | boolean)[] = [1, "two", 3, "four", true];
