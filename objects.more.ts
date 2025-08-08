//readonly properties in TypeScript

type Users = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};
let myUser: Users = {
  _id: "12345",
  name: "Alice",
  email: "alice@gmail.com",
  isActive: false,
};

myUser.email = "alice123@gmail.com";

type creditCardNumber = {
  cardNumber: string;
};

type creditCardDate = {
  cardDate: string;
};

// Using intersection types to combine multiple types
// This allows us to create a new type that includes properties from both types.
type cardDetails = creditCardNumber & creditCardDate;

let myCardDetail: cardDetails = {
  cardNumber: "1234-5678",
  cardDate: "12-14",
};

console.log(myCardDetail);

// myUser._id = "67890";
// Uncommenting the line above will cause a TypeScript error because _id is readonly, so we cannot reassign it.

console.log(myUser._id);
