//using union types to combine different types
var score = 100;
score = "100";
score = 100;
var Alice = {
    name: "Alice",
    id: 123,
    userName: "alice123",
};
var Bob = {
    name: "Bob",
    id: 456,
};
Bob = { userName: "bob123", id: 456 };
getDbId(3);
getDbId("smriti");
function getDbId(id) {
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
    console.log("DB id is: ".concat(id));
}
