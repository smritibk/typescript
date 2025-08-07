//readonly properties in TypeScript
var myUser = {
    _id: "12345",
    name: "Alice",
    email: "alice@gmail.com",
    isActive: false,
};
myUser.email = "alice123@gmail.com";
var myCardDetails = {
    cardNumber: "1234-5678",
    cardDate: "12-14",
};
console.log(myCardDetails);
// myUser._id = "67890";
// Uncommenting the line above will cause a TypeScript error because _id is readonly, so we cannot reassign it.
console.log(myUser._id);
