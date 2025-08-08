//type alias example
// This code demonstrates the use of type aliases in TypeScript.

// type User = {
//   name: string;
//   age: number;
//   isActive: boolean;
// };

// function createUser(user: User) {
//   return user;
// }

// console.log(
//   createUser({
//     name: "John",
//     age: 30,
//     isActive: true,
//   })
// );



type Length = {
  l1: number;
  l2: number;
};

function getArea(length: Length) {
  console.log(`The area is ${length.l1 * length.l2}`);
}

getArea({ l1: 5, l2: 10 });
